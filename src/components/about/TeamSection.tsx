import React from "react";
import { TeamBioDisplay } from "./TeamBioDisplay";
import { ScrollReveal } from "../ui/ScrollReveal";

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Management Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading BRiX Assets towards excellence in investment management.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <TeamBioDisplay />
        </ScrollReveal>
      </div>
    </section>
  );
}