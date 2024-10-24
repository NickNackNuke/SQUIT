import React, { useState } from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";
import '../design/dashboard.css';
import Products from './products';
import Users from './users';

function Dashboard() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <h1>SQUIT Home Page</h1>;
      case 'products':
        return <Products />;
      case 'users':
        return <Users />;
      default:
        return <h1>SQUIT Home Page</h1>;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user-icon">
          <img src="user-icon.png" alt="User Icon" />
        </div>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => setCurrentView('home')}>
            🏠 Home
          </li>
          <li className="nav-item" onClick={() => setCurrentView('products')}>
            📦 Products
          </li>
          <li className="nav-item" onClick={() => setCurrentView('users')}>
            👤 Users
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="top-bar-icons">
            <FaBell className="icon" />
            <span className="notification-count">3</span>
            <FaEnvelope className="icon" />
          </div>
        </div>

        <div className="main-content-text">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
