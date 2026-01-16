import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/register', { email, password });
      setMessage('✅ Registered successfully! Please login.');
      setRegistered(true);
    } catch (err) {
      const errMsg = err.response?.data?.message || '❌ Registration failed';
      setMessage(errMsg);
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 bg-light rounded">
              <h4 className="mb-4 text-center fst-italic text-info-emphasis">📋 Register</h4>              
              <p className="fs-6 mb-4 text-black text-center  animate__animated animate__pulse animate__infinite">
                🌟Kindly register here to view <span className="text-primary fst-italic fw-semibold">Course Fee</span> and <span className="text-primary fst-italic fw-semibold">Course Updates</span> 🌟
              </p>
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              {message && (
                <div className="alert alert-info mt-3 text-center">
                  {message}
                </div>
              )}

              {registered && (
                <button
                  onClick={goToLogin}
                  className="btn btn-success w-100 mt-2"
                >
                  Go to Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
