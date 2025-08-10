import { useRef, useEffect } from "react";
import FadeContent from "../ui/fade-content";
import { projects } from "../../db/projects";
import ShinyText from "../ui/shuny-text";
import StarBorder from "../ui/star-border";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";
import {  FaChevronRight } from "react-icons/fa";

export const Projects = () => {
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleGlobalScroll = (e) => {
      if (scrollContainerRef.current && e.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleGlobalScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, []);

  const handleClick = (e, projectID) => {
    e.preventDefault();
    navigate(`/projects/${projectID}`);
  };

  return (
    <div className="mx-auto container py-6 px-3 md:px-5.5 min-h-full h-[600px] overflow-hidden">
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="relative">
          {/* Left Button faqat '/' route da ko'rinadi */}

          <div className="block sm:hidden ">
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollLeft += 1000;
                }
              }}
              className="absolute z-10 right-3 top-1/2 -translate-y-1/2 bg-[#547792] text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition bounce-left"
            >
              <FaChevronRight />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-3 scrollbar-hide h-[560px]"
          >
            {projects.map((item) => (
              <a
                href={`/projects/${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                key={item.id}
                className="group flex-shrink-0 w-[100%] md:w-[49%] h-full min-h-full bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] rounded-2xl p-2.5 overflow-scroll"
              >
                <div className="relative mb-2">
                  <img
                    src={`/projects/${item.image}`}
                    alt={item.titleName}
                    className="rounded-2xl w-full h-[300px] object-cover"
                  />
                  <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
                  <GoArrowUpRight
                    color="#547792"
                    className="absolute right-3 -translate-y-6.5 hidden group-hover:block transition-all duration-300 shadow-sm shadow-[#547792]"
                  />
                </div>

                <ShinyText
                  text={item.titleName}
                  disabled={false}
                  speed={3}
                  className="text-[24px] leading-5"
                />
                <ShinyText
                  text={item.description}
                  disabled={false}
                  speed={3}
                  className="
                    text-[15px] leading-[19px]
                    sm:text-[18px] sm:leading-6
                    md:text-[13px] md:leading-4
                    xl:text-[15px] xl:leading-[19px]"
                />

                <div className="flex-wrap py-1 xl:py-3 gap-3">
                  {item.stacks.map((stack, index) => (
                    <StarBorder
                      as="button"
                      key={index}
                      className="me-1.5"
                      color="cyan"
                      speed="4.5s"
                    >
                      <p className="text-[#547792] text-[12px] xl:text-[13px] px-1.5 xl:px-3 py-0.5 xl:py-1">
                        {stack}
                      </p>
                    </StarBorder>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
};
