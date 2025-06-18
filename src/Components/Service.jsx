import React from "react";
import {
  FaPaintBrush,
  FaVectorSquare,
  FaLaptop,
  FaFileImage,
  FaCameraRetro,
  FaLightbulb,
} from "react-icons/fa";

export function Services() {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Logo & Branding",
      description:
        "Designing cohesive brand identities and eye-catching logos that define your business.",
    },
    {
      icon: <FaVectorSquare />,
      title: "Digital Illustration",
      description:
        "Creating bold, expressive visuals for advertising, publishing, and digital platforms.",
    },
    {
      icon: <FaLaptop />,
      title: "UI/UX Design",
      description:
        "Crafting clean, user-friendly interfaces and improving digital product usability.",
    },
    {
      icon: <FaFileImage />,
      title: "Print Design",
      description:
        "Designing posters, flyers, and brochures that are ready for high-quality print.",
    },
    {
      icon: <FaCameraRetro />,
      title: "Visual Content Creation",
      description:
        "Producing creative visuals for campaigns, social media, and storytelling.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Consulting",
      description:
        "Offering guidance on visual strategies and concept development for brands.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="italic text-yellow-400">S</span>ervices
          </h2>
          <p className="text-gray-400 text-lg mt-3 max-w-xl mx-auto">
            Here's what I can help you with — all tailored to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-yellow-500/20 transition-all hover:scale-[1.03] duration-300 group border border-neutral-800"
            >
              <div className="text-yellow-400 text-4xl mb-4 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-yellow-300 transition">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
