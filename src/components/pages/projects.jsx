import React from "react";
import FadeContent from "../ui/fade-content";

export const Projects = () => {
  return (
    <div className="mx-auto container py-6 px-3 md:px-5.5 items-stretch">
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </FadeContent>
    </div>
  );
};
