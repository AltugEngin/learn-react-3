"use client";
import { useState } from "react";
import Link from "next/link";
import { locations } from "./data";
import { galano } from "@/fonts";

function Answer() {
  const [loc, setLoc] = useState(locations[0]);
  const getLocation = (e) => {
    setLoc(e.target.value);
  };
  return (
    <div className={galano.className}>
      <div className="max-w-lg">
        <div className="container relative">
          <h1 className="font-bold text-2xl text-gray-900 z-10 absolute bottom-5">
            5S SAHA DENETİM UYGULAMASI{" "}
            <span className="text-indigo-500">GEBZE</span>
          </h1>
          <img className="rounded-xl blur-sm" src="./workshop.jpeg"></img>
        </div>
        <div className="mt-6">
          <select
            className="bg-indigo-200 px-4 py-2 rounded-xl w-full"
            onChange={(e) => getLocation(e)}
          >
            {locations.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <Link
            className="w-full inline-block px-4 py-2 text-center bg-indigo-500 rounded-xl text-white font-bold hover:bg-indigo-100 hover:text-black hover:font-bold shadow-black shadow-md uppercase"
            href={{ pathname: "./score", query: { search: loc } }}
          >
            Puanlama
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex justify-center my-40 font-light text-sm">
      <div>
        <Answer></Answer>
      </div>
      <div></div>
    </div>
  );
}
