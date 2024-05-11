import "../globals.css";
import React from 'react';

export default function Payment(){
    return(
        <div class="check">
        <p>Ksh 3,500<span>night</span></p>
        <form action="" className="grid grid-cols2 grid-rows2">
          <div class="date" className="col-span-1 row-span-1">
            <label>Check-in</label>
            <input type="date" name="" value="05/08/2024" id="" />
          </div>
          <div class="date" className="col-span-1 row-span-1">
            <label>Checkout</label>
            <input type="date" name="" value="05/13/2024" id="" />
          </div>
          <div className="col-span-2 row-span-1">
            <label>Guests</label>
            <input type="text" value="1 Guest"/>
          </div>
        </form>
        <span>Those dates are not available</span>
        <button>Check reservation</button>
     </div>
    );
};