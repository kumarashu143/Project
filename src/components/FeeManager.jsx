import { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FeeManager = () => {
  const [fees, setFees] = useState([]);
  const [previewFees, setPreviewFees] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    courseName: '',
    feeAmount: '',
    dueDate: ''
  });

  const token = localStorage.getItem('token');
  const decoded = token ? JSON.parse(atob(token.split('.')[1])) : {};
  const isAdmin = decoded.isAdmin;
  const navigate = useNavigate();

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    const res = await axios.get('/fees', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setFees(res.data);
  };

  const fetchReminderPreview = async () => {
    const res = await axios.get('/fees/reminder-preview', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPreviewFees(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/fees', {
      ...formData,
      feeAmount: parseFloat(formData.feeAmount),
      paidAmount: 0,
      isPaid: false,
      reminderEnabled: true
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setFormData({
      studentName: '',
      studentEmail: '',
      courseName: '',
      feeAmount: '',
      dueDate: ''
    });
    fetchFees();
  };

  const updatePaidAmount = async (id, paidAmount) => {
    await axios.put(`/fees/${id}/paid-amount`, { paidAmount }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchFees();
  };

  const toggleReminder = async (id, enabled) => {
    await axios.put(`/fees/${id}/reminder`, { enabled }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchFees();
  };

  const togglePaidStatus = async (id, isPaid) => {
    await axios.put(`/fees/${id}/status`, { isPaid }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchFees();
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-IN');

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Fee Manager</h4>
        <Button variant="outline-danger" onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}>Logout</Button>
      </div>

      {isAdmin && (
        <>
          <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group className="mb-2">
              <Form.Label>Student Name</Form.Label>
              <Form.Control name="studentName" value={formData.studentName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Student Email</Form.Label>
              <Form.Control type="email" name="studentEmail" value={formData.studentEmail} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Course Name</Form.Label>
              <Form.Control name="courseName" value={formData.courseName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Fee Amount (₹)</Form.Label>
              <Form.Control type="number" name="feeAmount" value={formData.feeAmount} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit">Add Fee</Button>
          </Form>

          <Button variant="warning" className="mb-3" onClick={fetchReminderPreview}>
            Preview Reminders
          </Button>

          {previewFees.length > 0 && (
            <>
              <h5>Students Due for Reminder</h5>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Due Date</th>
                    <th>Last Reminder</th>
                  </tr>
                </thead>
                <tbody>
                  {previewFees.map(fee => (
                    <tr key={fee._id}>
                      <td>{fee.studentName}</td>
                      <td>{fee.studentEmail}</td>
                      <td>{fee.courseName}</td>
                      <td>{formatDate(fee.dueDate)}</td>
                      <td>{fee.lastReminderSent ? formatDate(fee.lastReminderSent) : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </>
      )}

      <h4>Fee Records</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student</th>
            <th>Email</th>
            <th>Course</th>
            <th>Total Fee</th>
            <th>Paid</th>
            <th>Status</th>
            <th>Balance</th>
            <th>Due Date</th>
            <th>Reminders</th>
            <th>Last Reminder</th>
          </tr>
        </thead>
        <tbody>
          {fees.map(fee => {
            const isOverdue = fee.paidAmount < fee.feeAmount && new Date(fee.dueDate) < new Date();
            const balance = fee.feeAmount - fee.paidAmount;
            return (
              <tr key={fee._id} className={isOverdue ? 'table-danger' : ''}>
                <td>{fee.studentName}</td>
                <td>{fee.studentEmail}</td>
                <td>{fee.courseName}</td>
                <td>₹{fee.feeAmount}</td>
                <td>
                  <Form.Control
                    type="number"
                    min="0"
                    max={fee.feeAmount}
                    value={fee.paidAmount}
                    onChange={(e) => updatePaidAmount(fee._id, parseFloat(e.target.value))}
                  />
                </td>
                <td>
                  <Form.Check 
                    type="switch"
                    checked={fee.isPaid}
                    onChange={(e) => togglePaidStatus(fee._id, e.target.checked)}
                    label={fee.isPaid ? "Paid" : "Unpaid"}
                  />
                </td>
                <td>₹{balance}</td>
                <td>{formatDate(fee.dueDate)}</td>
                <td>
                  <Form.Check 
                    type="switch" 
                    checked={fee.reminderEnabled} 
                    onChange={(e) => toggleReminder(fee._id, e.target.checked)} 
                    label={fee.reminderEnabled ? "Active" : "Stopped"}
                  />
                </td>
                <td>{fee.lastReminderSent ? formatDate(fee.lastReminderSent) : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FeeManager;
