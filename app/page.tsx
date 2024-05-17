import Image from "next/image";
import Card from '@/app/ui/card';
import "./globals.css";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div class="section-1" className="flex p-5">
        <Card
        hrefLink="./homes/home1"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0051.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0052.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0053.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0054.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0055.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0056.jpg'
      />
      <Card
        hrefLink="./carousel/carousel"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0057.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0058.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0056.jpg'
      />
      <Card
        hrefLink="./carousel/carousel"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0057.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0058.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0056.jpg'
      />
      <Card
        hrefLink="./carousel/carousel"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0057.jpg'
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl='/sample/IMG-20240504-WA0058.jpg'
      />
      </div>
    </main></>
  );
}
