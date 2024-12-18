import React from "react";
import { User } from "lucide-react";

interface TeamCardHeaderProps {
  name: string;
  role: string;
}

export function TeamCardHeader({ name, role }: TeamCardHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <User className="h-6 w-6 text-primary" />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-primary font-medium">
          {role}
        </p>
      </div>
    </div>
  );
}