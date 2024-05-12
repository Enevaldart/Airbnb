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
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        hrefLink="./grid/grid1"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        hrefLink="./carousel/carousel"
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl="https://via.placeholder.com/300"
      />

      </div>
    </main></>
  );
}
