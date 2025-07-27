import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJsSquare, FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript, SiRedux, SiChakraui, SiAstro, SiNextui, SiAntdesign, SiWebstorm} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


import "./carousel.css";
import ShinyText from "./shuny-text";

const DEFAULT_ITEMS = [
  {
    icon: <FaHtml5 size={120} color="#547792"/>,
    title: "HTML",
    description: "HTML is the backbone of all web pages. It structures content and defines semantic meaning for browsers. As the web evolves, HTML remains essential and stable."
  },
  {
    icon: <FaCss3Alt size={120} color="#547792"/>,
    title: "CSS",
    description: "CSS is used for styling HTML elements. It enables responsive layouts, animations, and theming. New features like container queries continue to push CSS forward."
  },
  {
    icon: <FaJsSquare size={120} color="#547792"/>,
    title: "JavaScript",
    description: "JavaScript brings interactivity to the web. It manipulates the DOM, handles events, and powers APIs. It also runs on the backend via Node.js. JS is foundational in modern web development."
  },
  {
    icon: <SiRedux size={120} color="#547792"/>,
    title: "Redux Toolkit",
    description: "Redux Toolkit simplifies state management in React apps. It provides efficient and scalable patterns for predictable data flow using actions and slices."
  },
  {
    icon: <FaReact size={120} color="#547792"/>,
    title: "React",
    description: "React is a UI library built on components and virtual DOM. It enables fast, scalable interfaces with powerful hooks and an active ecosystem. Maintained by Meta, its future is bright."
  },
  {
    icon: <FaAngular size={120} color="#547792"/>,
    title: "Angular",
    description: "Angular is a full-featured frontend framework powered by TypeScript. It offers robust tooling, dependency injection, and RxJS support. Backed by Google, it's ideal for enterprise applications."
  },
  {
    icon: <FaVuejs size={120} color="#547792"/>,
    title: "Vue.js",
    description: "Vue.js is a progressive JavaScript framework known for its simplicity and flexibility. With Composition API in Vue 3, it’s more powerful and modular than ever."
  },
  {
    icon: <SiChakraui size={120} color="#547792"/>,
    title: "Chakra UI",
    description: "Chakra UI provides accessible and themeable components for React. It boosts developer productivity by offering consistent design and responsive styles out of the box."
  },
  {
    icon: <BiLogoTailwindCss size={120} color="#547792"/>,
    title: "Tailwind CSS",
    description: "Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose styles using class utilities. It promotes speed, consistency, and flexibility."
  },
  {
    icon: <SiAstro size={120} color="#547792"/>,
    title: "Astro",
    description: "Astro is a static site builder with partial hydration. It only sends JavaScript when necessary, resulting in lightning-fast websites. It’s ideal for content-heavy pages."
  },
  {
    icon: <SiTypescript size={120} color="#547792"/>,
    title: "TypeScript",
    description: "TypeScript adds static typing to JavaScript. It helps catch bugs early, improve tooling, and scale large codebases. It's widely adopted in professional development."
  },
  {
    icon: <TbBrandNextjs size={120} color="#547792"/>,
    title: "Next.js",
    description: "Next.js is a React framework for full-stack apps. It offers SSR, SSG, and ISR out of the box. With built-in routing and API support, it’s a go-to choice for modern web apps."
  },
  {
    icon: <SiNextui size={120} color="#547792"/>,
    title: "NextUI",
    description: "NextUI is a modern React UI library designed for speed and accessibility. Built for Next.js and React apps, it enables sleek and performant interfaces with minimal effort."
  },
  {
    icon: <SiAntdesign size={120} color="#547792"/>,
    title: "Ant Design",
    description: "Ant Design is a robust design system and React component library. It’s optimized for enterprise apps with features like complex forms, tables, and theming."
  },
  {
    icon: <FaSass size={120} color="#547792"/>,
    title: "Sass",
    description: "Sass is a CSS preprocessor that adds features like variables, nesting, and mixins. It helps keep stylesheets clean, modular, and maintainable at scale."
  },
  {
    icon: <FaBootstrap size={120} color="#547792"/>,
    title: "Bootstrap",
    description: "Bootstrap is a popular CSS framework for rapid UI development. It includes a responsive grid system and prebuilt components. Still widely used for admin panels and landing pages."
  },
  {
    icon: <SiWebstorm size={120} color="#547792"/>,
    title: "WebSocket",
    description: "WebSocket enables full-duplex communication between client and server. Ideal for real-time apps like chats and live updates, it keeps data flowing instantly."
  }
];



const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
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
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
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
    items.length,
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
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
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
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
      }}
    >
      <motion.div
        className="carousel-track"
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
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "round" : ""}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`carousel-item-header ${round ? "round" : ""}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              <div className="carousel-item-content">
                <ShinyText text={`${item.title}`} disabled={false} speed={3} className=' text-2xl leading-20' />
                <ShinyText text={`${item.description}`} disabled={false} speed={3} className='custom-class' />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
       
      </div>
    </div>
  );
}
