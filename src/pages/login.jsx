import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/registration');
  };

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const userCredentials = { email, password };
        await loginUser(userCredentials); // Call the loginUser API function
        alert('Logged in Successfully');
        navigate('/dashboard'); // Redirect to the dashboard or another page after login
      } catch (error) {
        console.error("Error logging in", error);
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>LOGIN</h3>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type={showPassword ? "text" : "password"}
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="ShowPassword_ID">
        <Form.Check 
          type="checkbox" 
          label="Show Password" 
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" onClick={handleSignUp} style={{ backgroundColor: 'blue', borderColor: 'blue' }}>
          Sign Up
        </Button>
      </div>
    </Form>
  );
}

export default Login;
