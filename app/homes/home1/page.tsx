import Rules from '@/app/ui/rules';
import Payment from '@/app/ui/payment';
import Amenities from '@/app/ui/amenities';
import "@/app/globals.css";
import Collage from '@/app/ui/collages';
import Assets from '@/app/ui/mainAssets';
import React, { useState } from 'react';

const IndexPage: React.FC = () => {
  // Example array of image URLs
  const images: string[] = [
    '/sample/IMG-20240504-WA0051.jpg',
    '/sample/IMG-20240504-WA0052.jpg',
    '/sample/IMG-20240504-WA0053.jpg',
    '/sample/IMG-20240504-WA0054.jpg',
    '/sample/IMG-20240504-WA0055.jpg',
    '/sample/IMG-20240504-WA0056.jpg',
    '/sample/IMG-20240504-WA0057.jpg',
    '/sample/IMG-20240504-WA0058.jpg',
    '/sample/IMG-20240504-WA0059.jpg',
    '/sample/IMG-20240504-WA0060.jpg',
    '/sample/IMG-20240504-WA0061.jpg',
    '/sample/IMG-20240504-WA0062.jpg',
    '/sample/IMG-20240504-WA0064.jpg',
    '/sample/IMG-20240504-WA0066.jpg',
  ];

  return (
    <div class="home-more">
      <Collage images={images} name="Family Beach House - right on the beach" />
      <div class="des">
       <div class="des-sc">
        <h2>Entire home in Jambiani, Tanzania</h2>
        <Assets guests="2" bedroom="1" bed="1" bath="2" />
        <hr />
        <h2 class="section-bed">Where you'll sleep</h2>
        <div class="bed">
          <div>
            <span>Bedroom</span>
            <span>1 double bed</span>
          </div>
          <div>
            <span>Living room</span>
            <span>2 sofa beds</span>
          </div>
        </div>
        <hr />
        <Amenities />
       </div>
       <Payment price="ksh 4,500" description="This is one of the rooms in this specious apartment. It has a very serene environment with lovely view. You will love it." />
     </div>
     <hr />
     <Rules />
    </div>
  );
};

export default IndexPage;
