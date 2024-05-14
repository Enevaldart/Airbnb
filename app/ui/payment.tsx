import "../globals.css";
import React from 'react';

interface CardProps {
  price: string;
  description: string;
}

const Payment: React.FC<CardProps> = ({ price, description }) => {
    return(
    <div class="check-rt">
        <div className="check">
        <p>{price}<span>night</span></p>
        <form action="" className="grid grid-cols2 grid-rows2">
          <div class="date" className="col-span-1 row-span-1">
            <label>Check-in</label>
            <input type="date" name="" value="2024-08-05" id="" />
          </div>
          <div class="date" className="col-span-1 row-span-1">
            <label>Checkout</label>
            <input type="date" name="" value="2024-08-11" id="" />
          </div>
          <div className="col-span-2 row-span-1">
            <label>Guests</label>
            <input type="text" value="1 Guest"/>
          </div>
        </form>
        <span>Those dates are not available</span>
        <button>Check reservation</button>
     </div>
     <div class="story">
        {description}
     </div>
     </div>
    );
};

export default Payment;