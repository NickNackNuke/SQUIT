import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = 'First name is required';
    if (!formData.last_name) newErrors.last_name = 'Last name is required';
    if (!formData.age || isNaN(formData.age)) newErrors.age = 'Valid age is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation errors:', validationErrors);
      setErrors(validationErrors);
    } else {
      try {
        const newUser = { ...formData };
        await createUser(newUser); // Call the createUser API function
        alert('Registered Successfully');
        navigate('/login');
      } catch (error) {
        console.error("Error creating user", error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="FirstName_ID">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          isInvalid={!!errors.first_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.first_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="LastName_ID">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          isInvalid={!!errors.last_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.last_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age_ID">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          isInvalid={!!errors.age}
        />
        <Form.Control.Feedback type="invalid">
          {errors.age}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email_ID">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password_ID">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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

      <Form.Group className="mb-3" controlId="ConfirmPassword_ID">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          isInvalid={!!errors.confirmPassword}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="ShowConfirmPassword_ID">
        <Form.Check 
          type="checkbox" 
          label="Show Password" 
          checked={showConfirmPassword}
          onChange={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Registration;
