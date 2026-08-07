import { Button } from "@/components/ui/button";
import DetailsSession from "./DetailsSession";
import AboutMe from "./AboutMe";
import SkillsData from "./SkillsData";

const Home = () => {
  const scrollToAboutMe = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="p-3">
        <div className="p-2 rounded-2xl h-[calc(100vh-30px)] bg-black/40 backdrop-blur-xl borde shadow-[0_0_25px_rgba(236,72,153,0.25)]">
          <div className="grid h-full gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-white">
                  <p className="tracking-[.8rem] text-center text-[2rem]">
                    VIJEESH VIJAYAN
                  </p>
                  <p className="tracking-[.9rem] text-center">
                    FULLSTACK DEVELOPER
                  </p>
                  <p className="tracking-[.08rem] text-center">
                    Java | Spring Boot | React | TypeScript | JavaSrpit
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md">
                  <Button
                    className="bg-[#e04922]/20 hover:text-white hover:bg-[#e04922]/40 w-full"
                    onClick={scrollToAboutMe}
                  >
                    About me
                  </Button>
                  <Button
                    className="bg-[#e04922]/20 hover:text-white hover:bg-[#e04922]/40 w-full"
                    onClick={scrollToDetails}
                  >
                    Experience
                  </Button>
                  <Button
                    className="bg-[#e04922]/20 hover:text-white hover:bg-[#e04922]/40 w-full"
                    onClick={scrollToSkills}
                  >
                    Skills
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[1.5rem] text-white">
                <p>photo</p>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="mt-5">
          <AboutMe />
        </div>
        <div className="mt-5" id="details">
          <DetailsSession />
        </div>
        <div className="mt-5" id="skills">
          <SkillsData />
        </div>
      </div>
    </>
  );
};

export default Home;
