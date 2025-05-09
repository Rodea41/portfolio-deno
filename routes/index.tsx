import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
  "skill-icons:bootstrap",
  "skill-icons:flask-light",
  "devicon:plotly",
  "skill-icons:figma-light",
  "skill-icons:git",
  "devicon:azuresqldatabase",
  "logos:leaflet"
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              'Hi AshleyRose!',
              'Hi Lauren!',
      
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          This is my personal portfolio. It is meant to showcase the technologies I've used, my past work experience, and to give more details about who I am.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
  href?: string;
  label?: string;
  href2?: string;
  label2?: string;
  href3?: string;
  label3?: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "I'm Always Looking to Learn Something New",
      description:
        "",
      image: "/img/laptop.webp",
      href: "/CompTIA A+ Certificate.pdf",
      label: "CompTIA A+ Certificate (2021)",
      href2: "https://rodea41.github.io/",
      label2: "Bitwise - Website (2022)",
      href3: "/FS_Diploma.pdf",
      label3: "Fresno State (2023)",
      href4: "",
      label4: "University of Michigan (ETA 2026)"
  
    },
    {
      title: "I Aim To Read a Book Every Month",
      description:
        "My current streak is 16 months. I read 26 books in 2024.",
      image: "/img/books.jpeg",
    },
    {
      title: "I Enjoy Musicals",
      description:
        "Seen: Moulin Rouge, Phantom Of The Opera, Hamilton, Wicked, Les Miserables, Book Of Mormon, Dear Evan Hansen, Mean Girls, Shrek , Six",
      image: "/img/musicals2.jpeg",
    },
    
  ];

  
  return (
    <>
    
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        <h1 class="text-3xl font-bold text-base-100 text-left">
          About Me
        </h1>
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
              <a href={value.href} target="_blank">{value.label}</a>
              <a href={value.href2} target="_blank">{value.label2}</a>
              <a href={value.href3} target="_blank">{value.label3}</a>
              <a >{value.label4}</a>

            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Business Development Associate",
      company: "United States Cold Storage",
      timePeriod: "Apr 2023 - Current",
      location: "Fresno, California",
    },
    {
      title: "Customer Account Supervisor",
      company: "United States Cold Storage",
      timePeriod: "Feb 2022 - Apr 2023",
      location: "Fresno, California",
    },
    {
      title: "Customer Account Specialist",
      company: "United States Cold Storage",
      timePeriod: "Mar 2021 - Feb 2022",
      location: "Fresno, California",
    },
    {
      title: "Assistant Store Manager",
      company: "Winco Foods",
      timePeriod: "Mar 2011 - Mar 2021",
      location: "Modesto, California",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
  target?: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "BD Dashboard",
      description:
        "This is the current project I am working on.",
      link: "https://github.com/Rodea41/Dashboard--ZoomInfo",
      type: "Personal Project",
      icon: "fluent-color:location-ripple-24",
      target: "_blank",
    },
    {
      title: "School.",
      description:
        "Collection of various projects completed during my time at Fresno State or University of Michigan.",
      link: "/school",
      type: "Academic",
      icon: "unjs:db0",
      target: "",
    },
    {
      title: "Work",
      description: "Examples of work done during my time at USCS",
      link: "https://github.com/Rodea41/CDI_allocation_finder/blob/main/CDI_inventory_reader.py",
      type: "Career",
      icon: "material-icon-theme:folder-rules",
      target: "_blank",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target={project.target}
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "vscode-icons:file-type-js-official",
    "skill-icons:python-dark",
    "logos:html-5",
    "logos:css-3",
    "logos:php",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "logos:vue",
    "devicon:nextjs",
    "skill-icons:nuxtjs-dark",
    "logos:nestjs",
    "logos:fresh",
    "skill-icons:laravel-dark",
    "skill-icons:tailwindcss-dark",
    "logos:deno",
    "devicon:nodejs",
    "vscode-icons:file-type-mongo",
    "logos:postgresql",
    "logos:mariadb-icon",
    "skill-icons:cassandra-light",
    "skill-icons:bootstrap",
    "skill-icons:flask-light",
    "skill-icons:git",
    "skill-icons:python-dark",
    "devicon:plotly",
    "skill-icons:figma-light",
    "devicon:azuresqldatabase",
    "logos:leaflet",
    
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}
