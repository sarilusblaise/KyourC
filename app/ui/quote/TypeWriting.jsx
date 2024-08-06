"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function TypeWriter({ data }) {
  const typeWriterRef = useRef(null);
  const authorRef = useRef(null);

  useGSAP(() => {
    //Main timeline
    let mainTimeline = gsap.timeline({
      repeat: 0,
    });

    // For each word , create a new timeline, use the  Text plugin, then append that timeline to the main one .

    let textTimeline = gsap.timeline({
      repeat: 0,
      //yoyo: true,
    });
    textTimeline.to(typeWriterRef.current, {
      text: `"${data[0].q}"`,
      duration: 2,
    });
    textTimeline.to(authorRef.current, {
      text: `-${data[0].a}-`,
      duration: 2,
    });

    mainTimeline.add(textTimeline);

    /*onUpdate: () => {
      cursorTimeline.restart();
      cursorTimeline.play();
    };

    onComplete: () => {
      cursorTimeline.play();
    };

    mainTimeline.add(textTimeline);

   const cursorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
    });

    cursorTimeline
      .to(cursorRef.current, {
        opacity: 1,
        duration: 0,
      })
      .to(cursorRef.current, {
        opacity: 0,
        duration: 0,
        delay: 0.8,
      });
    mainTimeline.add(textTimeline);*/
  });

  return (
    <p className=" text-3xl">
      <h1 ref={typeWriterRef} className="md:max-w-[70vw] mb-4"></h1>
      <span ref={authorRef} className="text-lg"></span>
    </p>
  );
}
