"use client";
import { useEffect, useState } from "react";
import Beams from "../../theme/dark";
import Squares from "../../theme/light";

export default function DarkVeilWrapper() {
  const [theme, setTheme] = useState("light");
  const baseColor = theme === "dark" ? [0.0, 0.0, 1.0] : [1.0, 1.0, 1.0];
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const current = saved || (prefersDark ? "dark" : "light");
    setTheme(current);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {theme === "dark" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            background: "#333",
          }}
        >
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={5}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={351}
          />
        </div>
      )}

      {theme === "light" && (
        <div style={{ width: "100vw", height: "100%",  background: "#C4E1E6"}}>
          <Squares
            speed={0.5}
            squareSize={100}
            direction="up" // up, down, left, right, diagonal
            borderColor="#547792"
            hoverFillColor="#000"
          />
        </div>
      )}
    </>
  );
}
