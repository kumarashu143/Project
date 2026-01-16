import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" replace />;

  const decoded = JSON.parse(atob(token.split('.')[1]));
  const isAdmin = decoded.isAdmin;

  return isAdmin ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
