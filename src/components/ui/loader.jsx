"use client";
import React from "react";

// Pixel/Unit helper
const cssValue = (value) => (typeof value === "number" ? `${value}px` : value);

// Animation creation helper
const createAnimation = (name, frames, direction) => {
  const animationName = `${name}-${direction}`;
  if (typeof document === "undefined") return animationName;

  const styleSheet = document.styleSheets[0] || document.createElement("style");
  const keyframes = `@keyframes ${animationName} { ${frames} }`;

  if (![...styleSheet.cssRules].some((r) => r.name === animationName)) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }

  return animationName;
};

// Animations
const right = createAnimation(
  "RingLoader",
  "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);}",
  "right"
);

const left = createAnimation(
  "RingLoader",
  "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);}",
  "left"
);

// Main Loader Component
const RingLoader = ({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 60,
  ...props
}) => {
  const value = typeof size === "number" ? size : parseInt(size);

  if (!loading) return null;

  const wrapperStyle = {
    display: "inherit",
    width: cssValue(size),
    height: cssValue(size),
    position: "relative",
    ...cssOverride,
  };

  const circleStyle = (i) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: cssValue(size),
    height: cssValue(size),
    border: `${value / 10}px solid ${color}`,
    opacity: 0.4,
    borderRadius: "100%",
    animationFillMode: "forwards",
    perspective: "800px",
    animation: `${i === 1 ? right : left} ${2 / speedMultiplier}s linear infinite`,
  });

 return (
  <div className="flex items-center justify-center w-full h-full relative z-[1]">
    <span style={wrapperStyle} {...props}>
      <span style={circleStyle(1)} />
      <span style={circleStyle(2)} />
    </span>
  </div>
);

};

export default RingLoader;
