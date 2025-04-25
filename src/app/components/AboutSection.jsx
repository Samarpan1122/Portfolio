"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>Flutter</li>
        <li>Tailwind CSS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>C++</li>
        <li>C#</li>
        <li>C</li>
        <li>Python</li>
        <li>Pytorch</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>JAVA</li>
        <li>SQL</li>
        <li>Firebase</li>
        <li>Micropython</li>
        <li>Arduino</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Nebraska, Lincoln (US)</li>
        <li>DPS Faridabad, India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Code</li>
        <li>PCBWay</li>
        <li>IIT Delhi</li>
        <li>Hackclub</li>
        <li>DPS Society</li>
        <li>Ankush Mehta (CS Professor), DPS</li>
      </ul>
    ),
  },
  {
    title: "Hardware skills",
    id: "Hardware skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Arduino</li>
        <li>Raspberry Pi</li>
        <li>ESP32</li>
        <li>PCB Designing</li>
      </ul>
    ),
  },
  {
    title: "Prizes",
    id: "prizes",
    content: (
      <ul className="list-disc pl-2">
        <li>Listed as Project of the week and rewarded a Raspberry Pi by PCBWay</li>
        <li>Fourth prize in Interschool Hackathon</li>
        <li>From Google Code to finish in top 10</li>
        <li>From HPE to finish in top 100</li>
        <li>Fourth prize in All India Hackathon at IIT Delhi</li>
        <li>$200 from Hackclub for best PCB design</li>
        <li>$100 for Raspberry Pi project from Hackclub</li>
        <li>PCB dev kit with Raspberry Pi (worth $250) for my original game from Hackclub</li>
        <li>$1000 + living expenses from Hackclub to showcase my project in San Francisco</li>
      </ul>
    ),
  },
  {
    title: "Fellowships",
    id: "fellowships",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>UCARE Research Fellowship (2025–2026)</strong>: Selected for the University of Nebraska–Lincoln’s UCARE program. Awarded up to $6,240 to conduct undergraduate research under faculty mentorship.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="My Original Art"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack developer with a passion for creating interactive
            and responsive applications and interesting hardware tech. I have
            experience working with several languages, participated in several
            hackathons, and worked with various organizations. I am a quick
            learner and always looking to expand my knowledge and skill set.
            I am a team player and excited to collaborate on amazing projects.
            I also enjoy sketching and gaming.
          </p>
          <div className="flex flex-row justify-start mt-8 overflow-x-auto">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Hardware skills")} active={tab === "Hardware skills"}>
              Hardware Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("prizes")} active={tab === "prizes"}>
              Prizes
            </TabButton>
            <TabButton selectTab={() => handleTabChange("fellowships")} active={tab === "fellowships"}>
              Fellowships
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
