import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const accordionData = [
    { title: 'Web Development', content: `Assisting in the construction of web prescence.\n Tools: JavaScript, React, and Tailwind CSS.` },
    { title: 'Visual Identity', content: 'Creating a brand image for your company that resonates with you and your audience.\n Tools: Adobe Illustrator, Adobe Photoshop, Figma' },
    { title: 'Design System', content: 'Crafting consistent and scalable design systems tailored to the needs and goals of digital products.\n Tools: Figma' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="flex-col w-[100%] mx-auto">
        <div className="flex-col justify-items-center flex items-center py-40">
          <img
            className="h-[200px] hover:animate-spin"
            src="https://i.pinimg.com/564x/00/76/ca/0076cabf25eee2369eb033fc6af1bc23.jpg"
          ></img>
          <h1 className="text-8xl tracking-normal font-syne font-medium text-left m-16">
            Hello! I'm a web developer based in Jakarta, Indonesia.
          </h1>
          <div className="w-[100%] flex justify-start">
            <div className="">
              <h1 className="text-2xl font-syne font-medium p-3 ml-32 hover:underline">Services</h1>
            </div>
            <div className="flex-col w-[30%] ml-16">
                {accordionData.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className="flex items-center justify-between cursor-pointer hover:bg-violet-200 transition rounded-lg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h2 className="text-2xl font-syne font-medium p-3">{item.title}</h2>
                      <svg
                        className={`mr-2 w-6 h-6 transition-transform transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {activeIndex === index && (
                      <div className="p-4 text-left">
                        <p className="text-lg p-3 text-gray-900 border-b-2 border-slate-800 whitespace-pre-wrap">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <div className="p-16">
            <h1 className="text-8xl tracking-normal font-syne font-medium text-right">
              I help brands simplify their digital experiences.
            </h1>
            <div className="m-6 flex justify-end">
              <Link to = "/works">
              <button className="text-xl font-syne rounded-lg p-4 m-4 border-2 border-slate-800 hover:bg-violet-200 hover:border-transparent transition">Check out my work</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
