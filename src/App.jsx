import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './pages/registration';
import Login from './pages/login';
import Dashboard from './feature/dashboard-page'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div style={{
        display: 'flex',
        justifyContent: 'center',  // Centers the entire container
        alignItems: 'center',      // Centers vertically
        height: '100vh',           // Full viewport height
        width: '100vw'             // Full viewport width
      }}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to Login on root */}
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
