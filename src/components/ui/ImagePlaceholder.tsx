import React from "react";
import { LucideIcon, User, Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  icon?: LucideIcon;
  text?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "auto";
  className?: string;
  alt: string;
}

export function ImagePlaceholder({
  icon: Icon = User,
  text,
  aspectRatio = "auto",
  className = "",
  alt
}: ImagePlaceholderProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: ""
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`
        relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10
        ${aspectRatioClasses[aspectRatio]}
        ${className}
      `}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        {text && (
          <p className="mt-4 text-sm text-gray-500 font-medium px-4 text-center">
            {text}
          </p>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(46,125,50,0.05)_50%,transparent_75%)] animate-shimmer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
    </div>
  );
}