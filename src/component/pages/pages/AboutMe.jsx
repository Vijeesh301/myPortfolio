import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInView } from "@/controlls/TextType";
import { useTypewriter } from "@/controlls/useTypeWriter";

const AboutMe = () => {
  const [ref, inView] = useInView(0.3);
  const text = useTypewriter(
    [
      "I'm a Full Stack Developer with 5+ years of experience building scalable, high-performance web applications. My expertise lies in React.js, TypeScript, JavaScript, and modern frontend development, complemented by 1.5 years of experience developing backend services using Java and Spring Boot. I have built enterprise applications across healthcare, fintech, education, logistics, and HRMS domains focusing on clean architecture, responsive UI, REST API integration, performance optimization, and reusable component design. I enjoy solving complex problems, collaborating with cross-functional teams, and delivering reliable, user-centric software solutions.",
    ],
    inView,
  );

  return (
    <>
      <Card ref={ref} className="bg-[#540351]/10 w-full p-15 min-h-75">
        <CardHeader className="text-white text-[1.5rem]">
          About Me
          <div className="mt-2 w-full bg-white/20"></div>
        </CardHeader>
        <CardContent className="text-white text-[1rem]">
          <p>
            {text}
            <span className="animate-pulse">&nbsp; |</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutMe;
