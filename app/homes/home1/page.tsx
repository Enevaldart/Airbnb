import Image from "next/image";
import Card from '@/app/ui/card';
import "@/app/globals.css";
import Collage from '@/app/ui/collages';
import React, { useState } from 'react';

const IndexPage: React.FC = () => {
  // Example array of image URLs
  const images: string[] = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    // Add more image URLs as needed
  ];

  return (
    <div class="home-more">
      <h1>Family Beach House - right on the beach</h1>
      <Collage images={images} />
      <h1>Entire home in Jambiani, Tanzania</h1>

    </div>
  );
};
export default IndexPage;
