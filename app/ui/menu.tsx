"use client";

// MobileMenu.js
import React, { useState } from 'react';
import Link from 'next/link';
import "../globals.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("I can't say much today, but you are amazing", isOpen);
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  console.log("You are amazing!", isOpen);
  return (
    <nav className="mobile-menu">
      <div className="menu-toggle" onClick={toggleMenu}>Menu</div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><a href="#" class="active">stays</a></li>
        <li><a href="#">Experiences</a></li>
        <li><a href="#">Online experiences</a></li>
        <hr />
        <li><a href="#">Help center</a></li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
