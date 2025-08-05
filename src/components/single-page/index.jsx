// src/pages/SinglePage.jsx
import { useNavigate, useParams } from "react-router-dom";
import FuzzyText from "../ui/not-found";
import { projects } from "../../db/projects";
import CarouselProjects from "../ui/projexts-carousel";
import ShinyText from "../ui/shuny-text";
import FadeContent from "../ui/fade-content";

export const SinglePage = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.3} enableHover={true}>
          404
        </FuzzyText>
      </div>
    );
  }

  // 👇 stacckIcon ni info arrayga qo‘shimcha property sifatida biriktiramiz
  const slides = {
    items: project.info,
    stacckIcon: project.stacckIcon,
    review: project.link,
  };

  return (
    <div className="mx-auto container py-6 px-3 md:px-5.5 min-h-full">
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] rounded-[12px] sm:rounded-2xl  overflow-hidden ">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <CarouselProjects
              items={slides}
              autoplay={true}
              autoplayDelay={2000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
          <p className="text-center text-[12px] font-bold mb-2">
            <ShinyText
              text="Hover over this to stop the carousel."
              disabled={false}
              speed={3}
            />
          </p>
        </div>
      </FadeContent>
    </div>
  );
};
