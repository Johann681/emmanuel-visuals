import React from "react";
import profileImg from "../assets/profile.jpg";


export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-neutral-950 text-white flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-light mb-2">
            Welcome, my name is{" "}
            <span className="font-bold text-blue-400">
              Olaoluwa Emmanuel
            </span>
          </h3>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            I am a{" "}
            <span className="typing text-yellow-400">
              Creative Graphic Designer
            </span>
          </h1>
          <p className="mb-6 text-lg text-gray-400">
            Specializing in branding, digital illustrations, and visual
            storytelling. I bring bold concepts to life through stunning visual
            design.
          </p>
          <a
            href="https://wa.link/r073gi"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
        <img
  src={profileImg}
  alt="Olaoluwa Emmanuel"
  className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
/>

        </div>
      </div>
    </section>
  );
}
