"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Smartphone, ClipboardList } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      title: "Software Engineering",
      icon: Code2,
      description: "Building scalable and maintainable software solutions",
    },
    {
      title: "Mobile & Web Development",
      icon: Smartphone,
      description: "Creating responsive applications across all platforms",
    },
    {
      title: "Project Management",
      icon: ClipboardList,
      description: "Leading teams and delivering projects on time",
    },
  ];

  const tools = [
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a software engineer and Computer Science student who loves
              building things that make life a little easier for others.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m passionate about clean design, robust engineering, and solving
              real problems in my community.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 text-center md:text-left">
              Skills & Services
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded-md bg-accent/20 group-hover:bg-accent transition-colors">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-foreground">
                          {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tools & Technologies Banner */}
        <div
          className={`mt-24 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                </div>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
