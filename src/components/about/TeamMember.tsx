import React, { useState } from "react";
import { User } from "lucide-react";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  isPreview?: boolean;
}

export function TeamMember({ name, role, description, isPreview = false }: TeamMemberProps) {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm transition-all ${
      isPreview ? "p-4 opacity-60 hover:opacity-80" : "p-8"
    }`}>
      <ImagePlaceholder
        icon={User}
        text={isPreview ? undefined : "Team Member Photo"}
        aspectRatio={isPreview ? "portrait" : "landscape"}
        alt={`${name} - ${role}`}
        className={isPreview ? "" : "mb-8"}
      />
      
      {!isPreview && (
        <>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-primary font-medium text-lg mb-4">{role}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </>
      )}
    </div>
  );
}