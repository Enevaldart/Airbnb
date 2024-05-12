import Rules from '@/app/ui/rules';
import Payment from '@/app/ui/payment';
import Amenities from '@/app/ui/amenities';
import "@/app/globals.css";
import Collage from '@/app/ui/collages';
import React, { useState } from 'react';

const IndexPage: React.FC = () => {
  // Example array of image URLs
  const images: string[] = [
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    //'https://via.placeholder.com/300',
    // Add more image URLs as needed
  ];

  return (
    <div class="home-more">
      <h1>Family Beach House - right on the beach</h1>
      <Collage images={images} />
      <div class="des">
        <div>
      <h2>Entire home in Jambiani, Tanzania</h2>
      <ul>
        <li>2 guests</li>
        <li>1 bedroom</li>
        <li>3 beds</li>
        <li>1 bath</li>
      </ul>
      <hr />
      <h2 class="section-bed">Where you'll sleep</h2>
    <div class="bed">
      <div><span>Bedroom</span><span>1 double bed</span></div>
      <div><span>Living room</span><span>2 sofa beds</span></div>
    </div>
    <hr />
     <Amenities />
     </div>
     <Payment />
     </div>
     <hr />
     <Rules />
    </div>
  );
};

export default IndexPage;
