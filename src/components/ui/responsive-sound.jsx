import { useEffect, useState } from "react";
import StarBorder from "./star-border";
import SpaceSoundManager from "../../media/space-sounds";

export const ResponsiveSoundManager = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 👇 Ekran o'lchamiga qarab holatni aniqlash
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check(); // load paytida
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? (
    <StarBorder
      as="button"
      className="block sm:hidden"
      color="cyan"
      speed="4.5s"
    >
      <div className="py-1">
        <SpaceSoundManager />
      </div>
    </StarBorder>
  ) : (
    <div className="hidden sm:block">
      <SpaceSoundManager />
    </div>
  );
};
