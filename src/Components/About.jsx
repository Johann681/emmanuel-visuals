import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaCog } from "react-icons/fa";

export function About() {
  const skills = [
    { name: "Adobe Illustrator", level: 90 },
    { name: "Photoshop", level: 85 },
    { name: "Figma", level: 75 },
    { name: "Branding", level: 80 },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (inView) setAnimateBars(true);
  }, [inView]);

  return (
    <section
      id="about"
      className="py-24 bg-neutral-950 text-white scroll-mt-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-blue-500 italic">A</span>bout Me
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            A quick snapshot of who I am, what I do, and the skills that fuel my creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left Column – Bio */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Passionate <span className="text-blue-400">Graphic Designer</span> &{" "}
              <span className="text-yellow-400">Visual Artist</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              With over 5 years of experience in branding, digital art, and
              creative direction, I bring bold ideas to life through visual
              storytelling. Whether you're building a brand or telling a story — I'm here to make it unforgettable.
            </p>

            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">🎓 Education:</strong> Creative Arts Institute</li>
              <li><strong className="text-white">🧠 Experience:</strong> 5+ years</li>
              <li><strong className="text-white">📧 Email:</strong> olaoluwa.emmanuel@gmail.com</li>
              <li><strong className="text-white">📍 City:</strong> Lagos, Nigeria</li>
              <li><strong className="text-white">🧑‍💻 Freelance:</strong> Available</li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Right Column – Skills */}
          <div ref={ref}>
            <h4 className="text-xl font-semibold mb-6">My Tools & Skills</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <FaCog
                        className={`text-yellow-400 ${
                          animateBars ? "animate-spin-slow" : ""
                        }`}
                      />
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded transition-all duration-1000"
                      style={{
                        width: animateBars ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
