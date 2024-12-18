import React from "react";
import { TeamCard } from "./TeamCard";
import { teamMembers } from "./data/teamMembers";

export function TeamGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  );
}