import Image from "next/image";
import Card from '@/app/ui/card';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{"  "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div class="" className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

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
      <Card
        county="Kilifi, Kenya"
        region="Near Nyali Beach"
        specific="2 bedroom apartment"
        price="ksh 3,500"
        imageUrl="https://via.placeholder.com/300"
      />

      </div>
    </main>
  );
}
