import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registration from './pages/registration';
import Login from './pages/login';

function BasicExample() {
  return (
    <>
    <h3>REGISTRATION</h3>
      <Registration />
    
    <h3>LOGIN</h3>
      <Login />
    </>
  )
}

export default BasicExample;