"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { definitions } from "../data";
import Link from "next/link";
import { caveat } from "@/fonts";
import { Suspense } from "react";
let initialCounters = Array(definitions.length).fill(0);

export default function QuestionList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [counters, setCounters] = useState(initialCounters);

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
    <div className={caveat.className}>
      <div className="max-w-lg mx-auto">
        <header className="bg-indigo-300 px-10 py-10 text-white font-bold text-3xl rounded-lg mb-5 sticky top-0">
          {search}
        </header>
        <ul>
          {counters.map((counter, i) => (
            <li
              className="odd:bg-indigo-50 odd:text-black even:bg-indigo-100 even:text-black text-xs"
              key={i}
            >
              {definitions[i].name}
              <span className="uppercase font-bold">{definitions[i].tip}</span>
              <button
                className="bg-indigo-500 m-1 p-1 text-white rounded-s hover:bg-indigo-100 hover:text-black"
                onClick={() => {
                  handleIncrementClick(i);
                }}
              >
                Puan : {counter}
              </button>
            </li>
          ))}
        </ul>
        <footer className="bg-indigo-700 mt-5 rounded-xl bottom-0 sticky">
          <Link
            className="m-4 p-4 bg-indigo-500 rounded-xl text-white hover:bg-indigo-100 hover:text-black shadow-black shadow-md shadow-transparent"
            href={"./"}
          >
            &#x021E6;
          </Link>
          <button
            className="m-4 p-4 bg-indigo-500 rounded-xl text-white hover:bg-indigo-100 hover:text-black shadow-black shadow-md shadow-transparent"
            onClick={() => {
              alert(
                counters.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0) /
                  (counters.length - counters.filter((str) => str === 0).length)
              );
            }}
          >
            Gönder
          </button>
        </footer>
      </div>
    </div>
  );
}
