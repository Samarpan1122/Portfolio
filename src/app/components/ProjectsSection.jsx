"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Corniverse",
    description:
      "Corniverse is an immersive space simulation designed to answer one of humanity's most interesting questions: How much corn can we grow on Earth and Mars? Through a combination of 3D models, AI-driven predictions, and interactive features.",
    image: "/images/projects/corniverse.png",
    tag: ["All", "Programming"],
    gitUrl: "https://github.com/Samarpan1122/Corniverse",
    previewUrl: "https://corniverse.vercel.app/",
  },
  {
    id: 2,
    title: "Chat4fun",
    description:
      "Chatting Webapp that Block out inappropriate content automatically before sending.",
    image: "/images/projects/chat4fun.png",
    tag: ["All", "Programming"],
    gitUrl: "https://github.com/Samarpan1122/Chat4fun-Hackathon",
    previewUrl: "https://www.chat4fun.me/",
  },
  {
    id: 3,
    title: "Website-Builder-Python-Openai",
    description: "Website builder made using openai api",
    image: "/images/projects/python.png",
    tag: ["All", "Programming"],
    gitUrl:
      "https://github.com/Samarpan1122/Website-Builder-Python-Openai/tree/main",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Website-Translator-with-GoogleTranslate",
    description:
      "Uses older version of google translate without any api and without showing the banner. You can change the language by editing translate.js.",
    image: "/images/projects/trans.png",
    tag: ["All", "Programming"],
    gitUrl:
      "https://github.com/Samarpan1122/Website-Translator-with-GoogleTranslate?tab=readme-ov-file",
    previewUrl: "https://host-theta.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "This website is made using Next.js and Tailwind CSS.",
    image: "/images/projects/port.png",
    tag: ["All", "Programming"],
    gitUrl: "https://github.com/Samarpan1122/Porfolio",
    previewUrl: "samarpan-portfolio.netlify.app",
  },
  {
    id: 6,
    title: "Morse Code Keyer with raspberry pi",
    description:
      "Morse code keyer with raspberry pi pico which can be used to send morse code over internet.",
    image: "/images/projects/morse.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/Samarpan1122/morse_code-keyer-with-pi-pico",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Weather Station with raspberry pi",
    description:
      "Weather Station with raspberry pi and sensors which can be accessed from anywhere.",
    image: "/images/projects/weather.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/Samarpan1122/weather-station/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Mini Portable Game Console with raspberry pi",
    description:
      "Mini Portable Game Console with raspberry pi pico with audio,can run Java script games.",
    image: "/images/projects/sprig.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/Samarpan1122/sprig",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Controll over wifi car with raspberry pi",
    description:
      "Remote controll  car made with raspberry pi which can be controlled from phone.",
    image: "/images/projects/car.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/Samarpan1122/Wifi-car-with-pi-pico/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
