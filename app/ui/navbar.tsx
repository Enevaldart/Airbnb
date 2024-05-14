import "../globals.css";
import React from 'react';
import Image from "next/image";
import MobileMenu from '@/app/ui/menu';

export default function Navbar(){
    return(
        <>
       <nav>
        <div class="tp">
       <Image
              src="/logo.jpg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
        />
        <div className="pc-menu">
            <a href="#" class="active">Stays</a>
            <a href="#">Experiences</a>
            <a href="#">Online Experiences</a>
        </div>
        <div class="avater">
            <a href="#">Airbnb your home</a>
            <MobileMenu />
        </div>
        </div>
        <div class="search" id="pc-search">
            <form action="">
                <div>
                    <label>Where</label>
                    <input type="text" name="" placeholder="Map area" id="" />
                </div>
                <hr />
                <div>
                    <label>Check in</label>
                    <input type="date" name="" value="2024-08-05" id="" />
                </div>
                <hr />
                <div>
                    <label>Check out</label>
                    <input type="date" name="" value="2024-08-11" id="" />
                </div>
                <hr />
                <div>
                    <label>Who</label>
                    <input type="text" name="" placeholder="Add guests" value="" id="" />
                </div>
                <button>Search</button>
            </form>
        </div>
        <div class="search" id="mobile">
            <form action="">
                <div>
                    <label>Where</label>
                    <input type="text" name="" placeholder="Map area" id="" />
                </div>
                <hr />
                <div>
                    <label>Who</label>
                    <input type="text" name="" placeholder="Add guests" value="" id="" />
                </div>
                <button>Search</button>
            </form>
        </div>
        <hr />
       </nav>
        </>
    );
};