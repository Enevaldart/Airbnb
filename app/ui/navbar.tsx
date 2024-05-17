"use client";

import "../globals.css";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import MobileMenu from '@/app/ui/menu'; // Ensure the MobileMenu component is correctly imported

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const buffer = 30; // Adjust this value to set the buffer zone

      if (currentScrollY > lastScrollY + buffer || currentScrollY < buffer) {
        setShowNav(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${!showNav ? 'scrolled' : ''}`}>
      <div className={`tp ${showNav ? 'visible' : ''}`}>
        <Image
          src="/logo.jpg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div className={`pc-menu ${showNav ? '' : 'hidden'}`}>
          <a href="#" className="active">Stays</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </div>
        <div className="avatar">
          <a href="#">Airbnb your home</a>
          <MobileMenu />
        </div>
      </div>
      <div className={`search ${showNav ? '' : 'hidden'}`} id="pc-search">
        <form>
          <div>
            <label>Where</label>
            <input type="text" placeholder="Map area" />
          </div>
          <hr />
          <div>
            <label>Check in</label>
            <input type="date" defaultValue="2024-08-05" />
          </div>
          <hr />
          <div>
            <label>Check out</label>
            <input type="date" defaultValue="2024-08-11" />
          </div>
          <hr />
          <div>
            <label>Who</label>
            <input type="text" placeholder="Add guests" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={`search ${showNav ? '' : ''}`} id="mobile">
        <form>
          <div>
            <label>Where</label>
            <input type="text" placeholder="Map area" />
          </div>
          <hr />
          <div>
            <label>Who</label>
            <input type="text" placeholder="Add guests" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
