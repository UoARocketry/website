"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import "./styles/home.css";
import rocketCgi from "./resources/rocket-cgi.png";
import mars from "./resources/mars.png";
import chevronDown from "./resources/chevron down.svg";
import ExecTile from "./resources/exec_tile";
import ExecMember from "./resources/execMembersData";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(scrollContainerRef.current);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1e1e1e]">
      <div className="flex pt-10">
        <div className="md:flex-[2_1_0%] flex-1 ml-[-30px]">
          <Image src={rocketCgi} alt="rocket" />
        </div>
        <div className="flex-[5_2_0%] ml-20 flex flex-col pb-3 pt-10">
          <h2 className="">
            <b>UNIVERSITY OF AUCKLAND</b>
          </h2>
          <h1 className="text-5xl flex-1 text-orange-500">
            <b>ROCKETRY CLUB</b>
          </h1>
          <p className="flex-1">
            The University Of Auckland Rocketry Club is a club dedicated to all
            things rockets. We give students the opportunity to design, build
            and fly rockets as we learn about all things aerospace.
          </p>
          <div className="flex-1" />
          <div className="flex-1">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5">
              SIGN UP
            </button>
            <button className="bg-none text-orange-500 hover:text-orange-700 font-bold py-2 px-4 rounded mt-5 ml-5">
              WHAT WE DO ➔
            </button>
          </div>
          <div className="flex-1" />
        </div>
        <div className="md:flex-[2_1_0%] flex-1"></div>
      </div>
      {/* <div className="flex justify-center">
        <Image className="w-[60px]" src={chevronDown} alt="down" />
      </div> */}
      <div className="flex mt-[120px]">
        <div className="flex-1" />
        <div className="flex-[8_8_0%]">
          <div className="flex flex-col">
            <h2>
              <b className="text-l">LEARN MORE ABOUT</b>
            </h2>
            <h1 className="text-4xl text-orange-500">
              <b>ROCKETRY</b>
            </h1>
            <p>
              <b>
                Our blog provides insights into the exciting projects and
                rockets our team is building, offering a behind-the-scenes look
                at the innovative work happening within the club. Keep an eye on
                our Events page to join us at launch days, workshops, and
                competitions where our rockets take flight and our passion for
                aerospace comes to life!
              </b>
            </p>
          </div>
          <div className="flex">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5">
              UPCOMING EVENTS
            </button>
            <button className="bg-none text-orange-500 hover:text-orange-700 font-bold mt-5 ml-5">
              BLOG ➔
            </button>
          </div>
          <h1 className="mt-20 text-4xl">
            <b>2025 EXECUTIVE TEAM</b>
          </h1>
        </div>
        <div className="flex-[3_3_0%]" />
      </div>
      <div className="flex mt-10">
        <button
          onClick={scrollLeft}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded opacity-75"
        >
          SCROLL LEFT
        </button>
        <div
          className="flex overflow-x-auto hide-scrollbar"
          ref={scrollContainerRef}
        >
          {ExecMember.map((member, index) => (
            <ExecTile name={member.name} title={member.title} key={index} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded opacity-75"
        >
          SCROLL RIGHT
        </button>
      </div>
      <div className="flex mt-20">
        <div className="flex-1" />
        <div className="flex-[6_8_0%]">
          <h1 className="text-4xl">
            <b>SPONSORS</b>
          </h1>
          <p>
            A huge shout out to the people and companies that make this possible
          </p>
        </div>
        <div className="flex-[4_4_0%] flex items-center justify-center">
          <div className="flex-1" />
          <button className="bg-none text-orange-500 hover:text-orange-700 font-bold text-right">
            BECOME A SPONSOR ➔
          </button>
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
}
