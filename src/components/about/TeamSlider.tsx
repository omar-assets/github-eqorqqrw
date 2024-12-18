import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamMember } from "./TeamMember";
import { teamMembers } from "./data/teamMembers";

export function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % teamMembers.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Display */}
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="relative">
            <TeamMember {...teamMembers[currentIndex]} />
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto w-12 h-12 -ml-6 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                aria-label="Previous team member"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto w-12 h-12 -mr-6 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                aria-label="Next team member"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="hidden lg:block cursor-pointer" onClick={nextSlide}>
          <div className="relative">
            <TeamMember {...teamMembers[nextIndex]} isPreview />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <ChevronRight className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-primary w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}