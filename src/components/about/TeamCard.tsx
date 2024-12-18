import React from "react";
import { User } from "lucide-react";
import { TeamCardHeader } from "./TeamCardHeader";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
}

export function TeamCard({ name, role, description }: TeamCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative p-6 space-y-4">
        <TeamCardHeader name={name} role={role} />
        
        <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
        
        <p className="text-gray-600 leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}