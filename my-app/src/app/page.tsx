"use client"
import Image from "next/image";
import projects from "./data";
import Link from "next/link";


export default function Home() {
  console.log("data: ", projects);
  console.log("first");
  return (
    <div className="text-black justify-center flex w-10/12 m-auto flex-col items-center ">
      <h1 className="text-3xl py-[4vw] ">Projects</h1>

      <div className="flex w-full flex-wrap justify-evenly ">

      {projects.map((items:any,index:any) => (


      <div style={{ backgroundImage: `url('./public/dice.png')` }} className={`flex border w-5/12 h-[40vh] bg-cover  m-5 flex-col justify-end`}>
        <div className="flex w-10/12 h-[20vh] bg-blue-100 ">
          <div className="flex flex-col justify-center w-1/5">
            <Link href={`${items.link}`}> <div className="flex justify-center my-1 border bg-pink-100 py-1 px-4 w-[5vw] text-sm rounded m-auto ">code</div> </Link>
            <Link href={`${items.code}`}> <div className="flex justify-center my-1 border bg-pink-100 py-1 px-4 w-[5vw] text-sm rounded m-auto ">link</div> </Link>
          </div>
          <div className="flex py-3 px-2 flex-col w-4/5">
            <h1 className="text-lg mb-1">{items.heading}</h1>
            <p className="text-xs">{items.summary}</p>
          </div>
        </div>
      </div>
))}

      </div>

    </div>
  );
}
