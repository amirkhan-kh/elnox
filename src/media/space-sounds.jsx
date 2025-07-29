"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../components/ui/animated-content";
import Lottie from "lottie-react";
import soundWaveAnimation from "../../public/video/Music Visualizer.json";

const soundPaths = [
  "/sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3",
  "/sounds/space-chords-loop-310493.mp3",
  "/sounds/space-vessel-background-noise-350616.mp3",
];

export default function SpaceSoundManager() {
  const audioRefs = useRef([]);
  const lottieRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * soundPaths.length)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);

  // 🔁 Random yangi index (oldingi bilan bir xil bo'lmasin)
  const getNewRandomIndex = (current, max) => {
    if (max <= 1) return 0;
    let newIndex = current;
    while (newIndex === current) {
      newIndex = Math.floor(Math.random() * max);
    }
    return newIndex;
  };

  // 🔊 Hozirgi audio'ni o'ynatish
  const playCurrent = () => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== currentIndex) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const current = audioRefs.current[currentIndex];
    if (current) {
      current.loop = true;
      current.volume = 0.3;
      current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay failed:", err);
          setIsPlaying(false);
        });
    }
  };

  // ⏸ Hammasini pauza qilish
  const pauseAll = () => {
    audioRefs.current.forEach((a) => {
      a?.pause();
      a.currentTime = 0;
    });
    setIsPlaying(false);
  };

  // ⏯ Toggle
  const togglePlayback = () => {
    isPlaying ? pauseAll() : playCurrent();
  };

  // 🔁 Router o'zgarishini aniqlash
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPath = window.location.pathname;
      if (currentPath !== pathname) {
        const nextIndex = getNewRandomIndex(currentIndex, soundPaths.length);
        setCurrentIndex(nextIndex);
        setPathname(currentPath);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [pathname, currentIndex]);

  // ▶️ Index o‘zgarsa, auto-play
  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => playCurrent(), 100);
    }
  }, [currentIndex]);

  // ▶️ Sahifa ochilganda auto-play
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlaying) playCurrent();
    }, 150);

    const clickHandler = () => {
      if (!isPlaying) {
        playCurrent();
      }
      window.removeEventListener("click", clickHandler);
    };
    window.addEventListener("click", clickHandler);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  // 🎞 Lottie boshqaruvi
  useEffect(() => {
    if (!lottieRef.current) return;
    if (isPlaying) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
     <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={0.1}
      threshold={0.2}
      delay={0.3}
    >

        <button onClick={togglePlayback}>
          <Lottie
            lottieRef={lottieRef}
            animationData={soundWaveAnimation}
            loop
            autoplay={false}
            style={{ width: 90, height: 20 }}
            />
        </button>

      {soundPaths.map((path, i) => (
        <audio
        key={i}
        ref={(el) => (audioRefs.current[i] = el)}
        src={path}
        preload="auto"
        />
      ))}
      </AnimatedContent>
      </>
  );
}
