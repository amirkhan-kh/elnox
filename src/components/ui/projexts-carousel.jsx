import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ShinyText from "./shuny-text";
import "./carousel-projects.css";
import { IoEarth } from "react-icons/io5";
import ShareButton from "./share-button";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function CarouselProjects({
  items = { items: [], stacckIcon: [], review: "" },
  baseWidth,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const slides = items.items || [];
  const stacckIcon = items.stacckIcon || [];
  const review = items.review || "";

  const [responsiveWidth, setResponsiveWidth] = useState(() => {
    const width = window.innerWidth;
    if (width >= 1024) return 700;
    if (width >= 968) return 900;
    if (width >= 790) return 700;
    if (width >= 640) return 590;
    if (width >= 500) return 510
    if (width >= 400) return 390
    if (width >= 360) return 340
    if (width >= 310) return 300
    return 240;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setResponsiveWidth(700);
      else if (width >= 968) setResponsiveWidth(900);
      else if (width >= 790) setResponsiveWidth(700);
      else if (width >= 640) setResponsiveWidth(590);
      else if (width >= 500) setResponsiveWidth(510);
      else if (width >= 400) setResponsiveWidth(390);
      else if (width >= 360) setResponsiveWidth(340);
      else if (width >= 300) setResponsiveWidth(280);
      else setResponsiveWidth(240);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actualWidth = baseWidth || responsiveWidth;
  const containerPadding = 16;
  const itemWidth = actualWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...slides, slides[0]] : slides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === slides.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    slides.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(slides.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: `${actualWidth}px`,
        ...(round && { height: `${actualWidth}px`, borderRadius: "50%" }),
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between mb-2 w-full">
        {stacckIcon.length > 0 && (
          <div className="flex gap-x-3.5 sm:gap-x-1.5 mb-2">
            {stacckIcon.map((Icon, i) => (
              <Icon key={i} size={22} color="#547792" />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 w-full">
          <ShareButton />
          {review && (
            <div className="">
              <a
                href={review}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-blue-400 transition-all"
              >
                <span className="flex items-center gap-0.5 text-[12px] font-bold bg-[#547792] rounded-sm px-2.5 py-1">
                  Live
                  <IoEarth />
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      <motion.div
        className="carousel-trackp"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, {
            clamp: false,
          });

          return (
            <motion.div
              key={index}
              className={`carousel-itemp ${round ? "roundp" : ""}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div
                className={`carousel-item-headerp ${round ? "roundp" : ""}`}
              >
                <img
                  src={`/projects/${item.image}`}
                 className="w-full h-[500px] md:w-full md:h-[500px] responsive-img md:!hidden"
                  alt="Project"
                />
                <img
                  src={`/projects/${item.image}`}
                  className="hidden md:block w-full h-[400px] rounded-md"
                  alt="Project"
                />
              </div>
              <div className="carousel-item-contentp p-2">
                <div className="flex items-end justify-between">
                  <ShinyText
                    text={`${item.text}`}
                    disabled={false}
                    speed={3}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
