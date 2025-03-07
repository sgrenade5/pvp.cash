import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <nav style={{ 
      padding: '0 20px',
      height: '80px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{ 
        display: 'flex', 
        alignItems: 'center', 
        listStyle: 'none', 
        padding: 0,
        width: '100%',
        height: '100%'
      }}>
        {/* Logo positioned on the left */}
        <li style={{ flex: 1 }}>
          <Link to="/">
            <img 
              src="/pvpcashlogo.png" 
              alt="PvPCash Logo" 
              style={{ height: '60px', verticalAlign: 'middle' }}
            />
          </Link>
        </li>
        
        {/* Navigation links centered in the middle with larger font */}
        <li style={{ 
          flex: 2, 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px'
        }}>
          <Link to="/" style={{ 
            fontSize: '24px',  // Increased font size
            textDecoration: 'none',
            fontWeight: '500'  // Added slight boldness for better visibility
          }}>Home</Link>
          <Link to="/wallet" style={{ 
            fontSize: '24px',  // Increased font size
            textDecoration: 'none',
            fontWeight: '500'  // Added slight boldness for better visibility
          }}>Wallet</Link>
          <Link to="/profile" style={{ 
            fontSize: '24px',  // Increased font size
            textDecoration: 'none',
            fontWeight: '500'  // Added slight boldness for better visibility
          }}>Profile</Link>
        </li>
        
        {/* Empty space on the right to balance the layout */}
        <li style={{ flex: 1 }}></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;