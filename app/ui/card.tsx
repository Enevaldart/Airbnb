"use client";

// components/Card.tsx
import "../globals.css";

import React,  { useState } from 'react';
import CustomCarousel from '@/app/ui/carousel';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ county, hrefLink, specific, region, price, description, imageUrl }) => {
  return (
    <div class="card" className="bg-white rounded-lg overflow-hidden shadow-md">
      <a href={hrefLink} target="blank">
      {imageUrl && (
        <img className="w-full h-40 object-cover" src={imageUrl} alt={county} />
      )}
      <div class="desc" className="">
        <h2 className="">{county}</h2>
        <p class="p">{region}</p>
        <p class="p">{specific}</p>
        <p class="price">{price}<span>night</span></p>
      </div>
      </a>
    </div>
  );
};

export default Card;
