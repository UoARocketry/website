"use client";

import { useRef, useEffect, useState, createRef } from "react";
import Image from "next/image";
import "./styles/home.css";
import rocketCgi from "./resources/rocket-cgi.png";
import mars from "./resources/mars.png";
import chevronLeft from "./resources/chevron_backward.svg";
import chevronRight from "./resources/chevron_forward.svg";
import ExecTile from "./resources/exec_tile";

type ExecMember = {
  name: string;
  title: string;
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const [execMembers, setExecMembers] = useState<ExecMember[]>([]);

  // Width for exec tile
  const [execWidth, setExecWidth] = useState(220);

  // Index the exec tiles are scrolled to
  const [scrollIndex, setScrollIndex] = useState(0);

  // Detect screen resize and update exec tile width
  useEffect(() => {
    const handleResize = () => {
      if (execMembers.length === 0) return;
      if (scrollContainerRef.current) {
        setExecWidth(
          scrollContainerRef.current.clientWidth /
            Math.floor(scrollContainerRef.current.clientWidth / 220)
        );
      }
    };

    // Create refs for each ExecTile from supplied data
    scrollRefs.current = execMembers.map(
      (_, i) => scrollRefs.current[i] ?? createRef()
    );

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [execMembers]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/members");
        const data = await response.json();

        if (!data || !Array.isArray(data)) {
          console.error("No events found in the API response.");
          return;
        }

        setExecMembers(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Scroll exec tiles left
  const scrollLeft = () => {
    // If scrollIndex is 0, do nothing
    const temp = Math.max(1, scrollIndex) - 1;

    //Scroll to the left
    if (scrollContainerRef.current && scrollRefs.current[temp]?.current) {
      scrollRefs.current[temp].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    setScrollIndex(temp);
  };

  // Scroll exec tiles right
  const scrollRight = () => {
    let temp = 0;
    let scrollOffset = 0;
    if (scrollContainerRef.current) {
      // If scrollIndex is equal to exec data length, do nothing
      scrollOffset = Math.floor(
        scrollContainerRef.current.clientWidth /
          scrollRefs.current[0].current.clientWidth
      );
      temp = Math.min(scrollIndex + scrollOffset, execMembers.length - 2) + 1;
    }

    //scroll to the right
    if (scrollContainerRef.current && scrollRefs.current[temp]?.current) {
      scrollRefs.current[temp].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    setScrollIndex(temp - scrollOffset);
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
      <div className="float-right overflow-hidden">
        <div className="absolute translate-x-[-300px] translate-y-[-30%] w-[300px] h-[500px] overflow-hidden">
          <Image
            src={mars}
            alt="Mars"
            className="transform translate-x-[100px] translate-y-[100px] scale-[1.8]"
          />
        </div>
      </div>
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
          className={`bg-none ${scrollIndex === 0 ? "opacity-20" : "opacity-100"}`} // If exec scroll is at start fade button
          title="Scroll Left"
        >
          <Image src={chevronLeft} className="w-[100px]" alt="right" />
        </button>
        <div
          className="grid grid-flow-col overflow-x-auto hide-scrollbar"
          ref={scrollContainerRef}
        >
          {execMembers.length === 0 ? (
            // If exec data is not loaded show loading message
            //TODO Add skeleton loading
            <p>Loading...</p>
          ) : (
            execMembers.map((member, index) => (
              <div
                ref={scrollRefs.current[index]}
                key={index}
                className="flex justify-center"
                style={{
                  width: execWidth,
                }}
              >
                <ExecTile name={member.name} title={member.title} key={index} />
              </div>
            ))
          )}
        </div>
        <button
          onClick={scrollRight}
          // TODO pull ref references out of the BOM and into a variable that is set in the useEffect
          className={`bg-none ${
            execMembers.length === 0 ||
            execMembers.length -
              1 -
              (scrollContainerRef.current != null &&
              scrollRefs.current[0]?.current != null
                ? Math.floor(
                    scrollContainerRef.current.clientWidth /
                      (scrollRefs.current[0].current.clientWidth || 1)
                  )
                : 0) <=
              scrollIndex
              ? "opacity-20"
              : "opacity-100"
          }`} // If exec scroll is at end fade button
          title="Scroll Right"
        >
          <Image src={chevronRight} className="w-[100px]" alt="right" />
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
