import React from "react";
import heroImg from "/image_1.png";
import ProductGrid from "./Product";
import ChatBot from "./Chatbot";

export default function Hero() {
  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="bg-white min-h-[80vh] flex items-center py-6 lg:py-10">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          
          {/* 🧠 Text Section */}
          <div className="text-left space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Empowering Farmers with{" "}
              <span className="text-[#c7522a]">Smart AI</span> & Direct Market Access
            </h1>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md">
              FarmBoost connects farmers directly with consumers and provides AI-driven
              solutions to boost productivity and profit.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#"
                className="inline-block rounded-full border border-[#c7522a] bg-[#c7522a] px-5 py-2.5 text-white font-medium text-sm shadow-sm transition-all hover:bg-[#a3411f] hover:shadow-md"
              >
                Book Now!
              </a>

              <a
                href="#"
                className="inline-block rounded-full border border-[#c7522a] px-5 py-2.5 text-[#c7522a] text-sm font-medium hover:bg-[#c7522a] hover:text-white transition-all shadow-sm"
              >
                Menu
              </a>
            </div>
          </div>

          {/* 🌾 Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="FarmBoost AI Illustration"
              className="w-[80%] sm:w-[70%] md:w-[85%] max-w-sm rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 🛒 Product Section */}
      <section className="mt-10 mb-8">
        <ProductGrid />
        
        {/* <ChatBot /> */}
      </section>
    </>
  );
}
