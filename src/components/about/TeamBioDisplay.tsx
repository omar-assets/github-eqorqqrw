import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "./data/teamMembers";

export function TeamBioDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMember = teamMembers[currentIndex];

  const nextBio = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevBio = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevBio}
          className="p-2 hover:bg-gray-50 rounded-lg transition-colors group"
          aria-label="Previous team member"
        >
          <ChevronLeft className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">{currentMember.name}</h3>
          <p className="text-primary font-medium">{currentMember.role}</p>
        </div>
        
        <button
          onClick={nextBio}
          className="p-2 hover:bg-gray-50 rounded-lg transition-colors group"
          aria-label="Next team member"
        >
          <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Bio Content */}
      <div className="relative overflow-hidden">
        <div 
          className="transition-opacity duration-300"
          key={currentMember.name}
        >
          <p className="text-gray-600 leading-relaxed">{currentMember.description}</p>
        </div>
      </div>

      {/* Progress Indicators */}
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
            aria-label={`View ${teamMembers[index].name}'s bio`}
          />
        ))}
      </div>
    </div>
  );
}