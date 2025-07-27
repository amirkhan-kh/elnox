import { skills } from "../../db/skills";
import Carousel from "../ui/carousel";
import FadeContent from "../ui/fade-content";
import ShinyText from "../ui/shuny-text";

export const Skills = () => {
  return (
    <div className="mx-auto container py-6 px-1 md:px-5.5">
     <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
        <div className="flex flex-col sm:flex-row justify-evenly">
          <div className="">
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3500}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 p-4">
            {skills.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg "
                >
                  <Icon size={60} color="#547792" />
                  <span className="text-[#547792] mt-2 text-center text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeContent>
    </div>
  );
};
