import Image from "next/image";
import "./styles/home.css";
import rocketCgi from "./resources/rocket-cgi.png";
import mars from "./resources/mars.png";

export default function Home() {
  return (
    <div className="flex pt-10">
      <div className="md:flex-[2_1_0%] flex-1 ml-[-30px]">
        <Image src={rocketCgi} alt="rocket" />
      </div>
      <div className="flex-[5_2_0%] ml-20 ">
        <h2 className="pt-2">
          <b>UNIVERSITY OF AUCKLAND</b>
        </h2>
        <h1 className="text-4xl">
          <b>ROCKETRY CLUB</b>
        </h1>
        <p className="pt-3">
          The University Of Auckland Rocketry Club is a club dedicated to all
          things rockets. We give students the opportunity to design, build and
          fly rockets as we learn about aerospace.
        </p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            Join Us
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-5">
            what we do
          </button>
        </div>
      </div>
      <div className="md:flex-[2_1_0%] flex-1"></div>
      {/* <Image src={mars} alt="rocket" /> */}
    </div>
  );
}
