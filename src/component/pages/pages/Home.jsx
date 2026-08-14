import { Button } from "@/components/ui/button";
import DetailsSession from "./DetailsSession";
import AboutMe from "./AboutMe";
import SkillsData from "./SkillsData";
import useMediaQuery from "@/controlls/useMediaQuery";
import myPhoto from "@/assets/portfolio.png";
import myPhotoM from "@/assets/portfolioM.png";
import ContactForm from "./ContactForm";
import Lenis from "lenis";

const Home = ({ theme, regionData }) => {
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    wheelMultiplier: 0.8,
  });

  const scrollToAboutMe = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      lenis.scrollTo(aboutSection, {
        duration: 3,
      });
    }
  };

  const scrollToDetails = () => {
    const detailSection = document.getElementById("details");
    if (detailSection) {
      lenis.scrollTo(detailSection, {
        duration: 3,
      });
    }
  };

  const scrollToSkills = () => {
    const skillSection = document.getElementById("skills");
    if (skillSection) {
      lenis.scrollTo(skillSection, {
        duration: 3,
      });
    }
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      lenis.scrollTo(contactSection, {
        duration: 3,
      });
    }
  };

  const isMobile = useMediaQuery("(max-width: 770px)");

  const buttonClass = `${isMobile ? "text-white" : "hover:text-white"} text-white/20 bg-[#e04922]/20 hover:bg-[#e04922]/40}`;

  return (
    <>
      <div className="p-3">
        <div className="rounded-2xl h-[calc(100vh-30px)] bg-black/40 backdrop-blur-xl borde shadow-[0_0_25px_rgba(236,72,153,0.25)]">
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 w-full max-w-md px-2">
                  <Button className={buttonClass} onClick={scrollToAboutMe}>
                    About me
                  </Button>
                  <Button className={buttonClass} onClick={scrollToDetails}>
                    Experience
                  </Button>
                  <Button className={buttonClass} onClick={scrollToSkills}>
                    Skills
                  </Button>
                  <Button className={buttonClass} onClick={scrollToContactForm}>
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={!theme ? myPhoto : myPhotoM}
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div id="about" className="mt-5">
          <AboutMe />
        </div>
        <div className="my-15" id="details">
          <DetailsSession regionData={regionData} />
        </div>
        <div className="mt-5" id="skills">
          <SkillsData regionData={regionData} />
        </div>
        <div className="mt-5" id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Home;
