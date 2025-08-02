
import React from 'react';
import './Footer.css'; 

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Jubilee Multicultural Church. All rights reserved.</p>
    </footer>
  );
}