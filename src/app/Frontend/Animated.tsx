"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";


export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="tracking-tighter text-4xl font-semibold text-white">
              What is <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Additional ?
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNO42aYVnaS5phudCpBUkNsbfFbmvCEtb8kQ&s"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
