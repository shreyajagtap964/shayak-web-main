"use client";
import React, { useState } from "react";
// import TestimonialSingle from "./testimonial-single";
// import { ul } from "framer-motion/client";

const faqData = [
  {
    question: "What is SAHAYAK, and how does it work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
        SAHAYAK is a sustainable farming solution designed to grow high-value crops like microgreens and lettuce using a clay-based evaporative cooling system and IoT-powered temperature control. It uses porous clay plates to absorb water and cool the environment, maintaining an optimal temperature range of 16-24°C. An IoT system monitors and adjusts fan speeds to ensure consistent crop health.
        </p>
      </div>
    ),
  },
  {
    question: "What crops can I grow using SAHAYAK?",
    answer:
      "SAHAYAK is ideal for growing high-value crops such as microgreens, lettuce, and mushrooms, which require controlled temperatures for optimal growth.",
  },
  {
    question: "What is the role of the IoT system in SAHAYAK?",
    answer:
      "The IoT system in SAHAYAK continuously monitors temperature and humidity and automatically adjusts fan speeds to maintain optimal growing conditions. It also provides real-time data for better crop management and efficiency.",
  },
  {
    question: "How much does SAHAYAK cost?",
    answer:
      "Basic Plan: ₹2,730 (one-time cost)Includes: Clay-based cooling system, IoT temperature control, soilless farming setup, grow light, user manual, and email support. Pro Plan: ₹12,000 (with additional features like training and priority support).",
  },
  {
    question: "How energy-efficient is SAHAYAK compared to traditional farming methods?",
    answer:
      "SAHAYAK is highly energy-efficient, consuming up to 70% less power than traditional cooling methods like ACs. It also reduces water usage by up to 90%, making it an eco-friendly farming solution.",
  },
  {
    question: "How do I maintain the SAHAYAK system?",
    answer:
      "SAHAYAK requires minimal maintenance. Regularly refill the water supply for the clay plates and clean the system as per the user manual.",
  },
  {
    question: "What is the warranty and return policy for SAHAYAK?",
    answer:
      "Warranty: Basic & Pro Plans: 1-year warranty. Returns: 30-day return policy—if you're not satisfied, you can request a return or refund.",
  },
  {
    question: "Can SAHAYAK be used in areas with high temperatures?",
    answer:
      "Yes, SAHAYAK is designed to work efficiently even in hot climates, maintaining optimal growing conditions for crops.",
  },
  {
    question: "How can I purchase SAHAYAK?",
    answer:
      "You can purchase SAHAYAK directly from our website or contact our sales team for bulk orders and custom solutions.",
  },
  {
    question: "Can I scale my farming operation with SAHAYAK?",
    answer:
      "Yes, SAHAYAK is highly scalable. The Pro Plan supports up to 5 farming units, and the Enterprise Plan offers customizable solutions for large-scale operations.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <li>
      <button
        className="relative flex w-full items-center gap-2 border-t border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-green-700">{question}</span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L2 6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 leading-relaxed text-slate-600">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </li>
  );
};

export default function FAQ({ }: { config?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fefff4]" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-green-500">FAQ</p>
            <p className="text-3xl font-extrabold text-orange-600 md:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
        {/* <TestimonialSingle
          testimonial={{
            name: "Emily Thompson",
            content:
              "QuillMinds has transformed my teaching experience. The AI-powered lesson plans are not only time-saving but also incredibly creative and engaging for my students.",
            schoolName: "Westfield High School",
            image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emily",
          }}
        /> */}
      </div>
    </section>
  );
}
