import ProfileCard from "../ui/profile-card";
import FadeContent from "../ui/fade-content";
import SplitText from "../ui/split-text";
import ShinyText from "../ui/shuny-text";
import StarBorder from "../ui/star-border";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
export const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="mx-auto container py-6 px-3 md:px-5.5 items-stretch">
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col md:flex-row w-full  items-stretch gap-4 md:gap-4">
          <div className="flex-1">
            <ProfileCard
              name="Amirkhon Kh."
              title="Frontend Developer"
              handle="elnox2211"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/public/ChatGPT_Image_8_июн._2025_г.__18_34_42-removebg-preview.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                window.location.href = "tel:+998901802201";
              }}
              className="h-full"
            />
          </div>

          <div className="flex-2 bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] px-5 py-12 rounded-[28px]">
            <SplitText
              text="Hi there! "
              className="text-[16px] "
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-col justify-between h-[97%]">
              <p className="flex flex-col justify-between gap-[17px]">
                <ShinyText
                  text="I'm Amirkhon, a passionate frontend developer."
                  disabled={false}
                  speed={3}
                  className=""
                />
                <ShinyText
                  text="I’m a frontend developer with real-world experience and a passion for building creative, perfect, and user-friendly interfaces."
                  disabled={false}
                  speed={3}
                  className="text-[18px]"
                />
                <ShinyText
                  text="Graduated from Najot Ta’lim in 2024, currently studying at ISFT University and working as a freelancer."
                  disabled={false}
                  speed={3}
                  className="text-[18px]"
                />
                <ShinyText
                  text="This portfolio was built using the Astro web framework to showcase my skills and love for modern web development"
                  disabled={false}
                  speed={3}
                  className="text-[18px]"
                />
              </p>

              <div className="flex">
                <StarBorder
                  as="button"
                  className=""
                  color="cyan"
                  speed="4.5s"
                >
                  <a className=" py-1.5 px-3.5" href="https://github.com/amirkhan-kh">
                    <FaGithub />
                  </a>
                </StarBorder>
                <StarBorder
                  as="button"
                  className="mx-3"
                  color="cyan"
                  speed="4.5s"
                >
                  <a className=" py-1.5 px-3.5" href="https://t.me/elnox2211">
                    <RiTelegram2Fill />
                  </a>
                </StarBorder>
                 <StarBorder
                  as="button"
                  className=""
                  color="cyan"
                  speed="4.5s"
                >

                <a className=" py-1.5 px-3.5"  href="https://www.linkedin.com/in/amirxon-xodisaliyev-550849301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};
