import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";

const poppins = localfont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100 900",
});
export default function Home() {


  return (
    <main className="bg-purple-200">
      <section className="grid grid-cols-2  h-[50vh]">

        <div className="flex flex-col justify-center items-center gap-4">
          <p className={`text-2xl font-bold ${poppins.classname}`}>
            Welcome to Bitlinks, the world's best URL shortener!
          </p>

          <p>
            Get started by navigating to the "Shorten" page to create your first short link!
          </p>

          <div className='flex gap-3 justify-start'>
            <Link href='/shorten'><button className=' bg-purple-600 text-white rounded-lg shadow-lg p-2 py-0'>Try Now</button></Link>
            <Link href='/github'><button className=' bg-purple-600 text-white rounded-lg shadow-lg p-2 py-0'>Github</button></Link>
          </div>
          </div>
          <div className=" flex flex-row justify-center ">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="Bitlinks Logo"
            width={600}
            height={200}

          />

        </div>
      </section>
    </main>
  );
}
