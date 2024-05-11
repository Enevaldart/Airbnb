import "../globals.css";
import React from 'react';
import Image from "next/image";

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
        <div>
            <a href="#" class="active">Stays</a>
            <a href="#">Experiences</a>
            <a href="#">Online Experiences</a>
        </div>
        <div class="avater">
            <a href="#">Airbnb your home</a>
        </div>
        </div>
        <div class="search">
            <form action="">
                <div>
                    <label>Where</label>
                    <input type="text" name="" placeholder="Map area" id="" />
                </div>
                <hr />
                <div>
                    <label>Check in</label>
                    <input type="date" name="" value="" id="" />
                </div>
                <hr />
                <div>
                    <label>Check out</label>
                    <input type="date" name="" value="" id="" />
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