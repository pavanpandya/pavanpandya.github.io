"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a background in{" "}
        <span className="font-medium">Computer Science</span>, I’ve built and
        shipped{" "}
        <span className="font-medium">AI-powered full-stack applications</span>{" "}
        across startups, research labs, and consulting.{" "}
        <span className="italic">What drives me</span> is the challenge of
        turning ideas into scalable products, whether that means architecting
        reliable backend systems, crafting clean user interfaces, or automating
        infrastructure. My core stack includes{" "}
        <span className="font-medium">
          Python, React, Node.js, Django, Flask, and PostgreSQL
        </span>
        , and I’m experienced with{" "}
        <span className="font-medium">
          AWS, Docker, Kubernetes, and CI/CD pipelines
        </span>
        . I’m currently seeking a{" "}
        <span className="font-medium">full-time Software Engineer role</span>{" "}
        where I can contribute end-to-end and make an impact.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy experimenting
        in the kitchen and taking long walks with music or podcasts, great ways
        to recharge and spark fresh ideas. I thrive on{" "}
        <span className="font-medium">
          collaboration and continuous learning
        </span>
        , and I’m always excited to build meaningful products alongside great
        teams.
      </p>

      {/* Template */}
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}

      {/* Template */}
      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
