"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { definitions } from "../data";
import Link from "next/link";
import { caveat, inter, galano } from "@/fonts";
import { Suspense } from "react";






let initialCounters = Array(definitions.length).fill(0);

function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return search;
}
function User(){
  const searchParams = useSearchParams();
  const user = searchParams.get("user");
  return user;
}

function Result(){
  
}


export default function QuestionList() {
  //const searchParams = useSearchParams();
  //const search = searchParams.get("search");
  const [counters, setCounters] = useState(initialCounters);
  const searchParams = useSearchParams();
  const user = searchParams.get("user");
  const location=searchParams.get("search");
  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        if (c === 5) c = -1;
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div className={galano.className}>
      <div className="max-w-lg mx-auto">
        <div className="sticky top-0">
          <div className="">
            <header className="px-5 py-5 text-hayat_yesil bg-hayat_mavi font-bold text-3xl rounded-lg mb-5">
              <Suspense className="flex flex-col">
                <div><Search></Search></div>
                <div className="text-sm"><User></User></div>
              </Suspense>
            </header>
          </div>
        </div>
        <ul>
          {counters.map((counter, i) => (
            <li
              className="odd:bg-indigo-50 odd:text-black even:bg-indigo-100 even:text-black text-sm"
              key={i}
            >
              <span className="uppercase font-bold">{definitions[i].tip}</span>
              <br></br>
              {definitions[i].name}
              <br></br>

              <button
                className="bg-indigo-500 m-1 p-1 text-white rounded-s hover:bg-indigo-200 hover:text-black"
                onClick={() => {
                  handleIncrementClick(i);
                }}
              >
                Puan : {counter}
              </button>
            </li>
          ))}
        </ul>
        <footer className="bg-indigo-700 mt-5 rounded-xl bottom-5 sticky">
          <Link
            className="m-4 p-4 bg-indigo-500 rounded-xl text-white hover:bg-indigo-100 hover:text-black shadow-black shadow-md shadow-transparent"
            href={"./"}
          >
            Geri
          </Link>
          
          <Link className="m-4 p-4 bg-indigo-500 rounded-xl text-white hover:bg-indigo-100 hover:text-black shadow-black shadow-md shadow-transparent" href={{pathname:"../api/add-row",query:{user:user,search:location,result:counters.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                  }, 0) /
                    (counters.length -
                      counters.filter((str) => str === 0).length)}}}>
                        Gönder
                        </Link>
        </footer>
      </div>
    </div>
  );
}


