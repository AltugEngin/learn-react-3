"use client";
import { useState } from "react";
import Link from "next/link";
import { locations } from "./data";
import { galano } from "@/fonts";
import { useUser,UserButton } from "@clerk/nextjs";



function Answer() {

  const { isLoaded, isSignedIn, user } = useUser();
  const [loc, setLoc] = useState(locations[0]);
  const getLocation = (e) => {
    setLoc(e.target.value);
  };
  

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  

  

  return (
    <div className={galano.className}>
       
      <div className="max-w-lg">
        <div className="flex flex-col items-end">
      <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
      <div>
      Merhaba, {user.firstName}!
    </div>
    <div className="text-gray-500">{user.emailAddresses[0].emailAddress}</div></div>
        <div className="container relative">
          <h1 className="font-bold text-2xl text-hayat_yesil z-10 absolute bottom-5">
            <span className="font-bold text-9xl">5S</span> SAHA DENETİM
            UYGULAMASI <span className="text-hayat_mavi">GEBZE</span>
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
            href={{ pathname: "./score", query: { search: loc,user: user.emailAddresses[0].emailAddress} }}
          >
            Puanlama
          </Link>
        </div>
        <div className="mt-5">
          <Link
            className="w-full inline-block px-4 py-2 text-center bg-indigo-500 rounded-xl text-white font-bold hover:bg-indigo-100 hover:text-black hover:font-bold shadow-black shadow-md uppercase"
            href="./5s_manual.pdf"
          >
            KULLANICI EL KİTABI
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
