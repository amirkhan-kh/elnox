import {
  animation,
  database,
  design,
  featureStacks,
  frontendStacks,
  languages,
  mobile,
  skills,
  statManagement,
  styling,
  tools,
} from "../../db/skills";
import Carousel from "../ui/carousel";
import CountUp from "../ui/count-up";
import FadeContent from "../ui/fade-content";
import { SiAltiumdesigner, SiFrontendmentor } from "react-icons/si";
import ShinyText from "../ui/shuny-text";
import AnimatedRange from "../ui/animation-range";
import { MdOutlineAnimation } from "react-icons/md";
import { FaDatabase, FaWindowRestore } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import "./skils.css";
import StarBorder from "../ui/star-border";
export const Skills = () => {
  return (
    <div className="mx-auto container py-6 px-0 md:px-5.5 ">
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col sm:flex-row justify-between items-stretch">
          {/* Left: Carousel */}
          <div className="w-full sm:w-[300px] flex-shrink-0">
            <Carousel
              autoplay={true}
              autoplayDelay={3500}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>

          {/* Right: Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 p-4 flex-1 self-stretch">
            {skills.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg"
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

        <div className="px-4 py-10">
          <h3 className="text-[#547792] mt-2 text-center text-2xl">
            Explore by Category
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <SiFrontendmentor
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Frontend "
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {frontendStacks.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <SiAltiumdesigner
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Design "
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {design.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <MdOutlineAnimation
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Animation"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {animation.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <FaWindowRestore
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Stat Management"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {statManagement.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <IoBook
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Languages"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {languages.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <BsTools
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Tools"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {tools.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <IoMdColorPalette
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Styling"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {styling.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem">
              <div className="flex items-end-safe gap-4 mb-7">
                <FaDatabase
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Database"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {database.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
            </div>

            <div className="flex flex-col  bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg gridItem ">
              <div className="flex items-end-safe gap-4 mb-7">
                <CiMobile3
                  size={40}
                  color="#547792"
                  className="border border-[#547792] p-2.5 rounded-[10px]"
                />
                <ShinyText
                  text=" Mobile Development"
                  disabled={false}
                  speed={3}
                  className=" text-[20px]"
                />
              </div>
              {mobile.map((item, i) => (
                <div key={i} className="mb-2 gridCard">
                  <div className="flex items-center justify-between leading-2">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={20} color="#547792" />
                      <p className="text-[#547792]">{item.title}</p>
                    </div>
                    <div className="flex items-end">
                      <CountUp
                        from={0}
                        to={item.valueExperience}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[#547792] "
                      />
                      <span className="text-[#547792] text-[10px] leading-1">
                        %
                      </span>
                    </div>
                  </div>
                  <AnimatedRange value={item.valueExperience} />
                </div>
              ))}
              <p className="text-[#547792] text-[12px] leading-1">
                I started learning mobile development.
              </p>
            </div>
          </div>

          <div className="py-6 bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] p-4 rounded-lg">
            <ShinyText
              text="I also started learning Backend to become a full-stack developer."
              disabled={false}
              speed={3}
              className=" text-[20px] mb-5"
            />

            <div>
              {featureStacks.map((item, i) => (
                
                <StarBorder
                as="button"
                className=""
                color="cyan"
                speed="4.5s"
                key={i}
                >
                  <div className="flex items-center gap-4.5 px-3 py-2">

                  <item.icon size={20} color="#547792" />
                  <p className="text-[#547792]">{item.title}</p>
                  </div>
                </StarBorder>
              ))}
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};
