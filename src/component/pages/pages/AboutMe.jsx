import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TextType from "@/controlls/TextType";

const AboutMe = () => {
  return (
    <>
      <Card className="bg-[#540351]/10 w-full p-15 h-75">
        <CardHeader className="text-white text-[1.5rem]">
          About Me
          <div className="mt-2 w-full bg-white/20"></div>
        </CardHeader>
        <CardContent className="text-white text-[1rem]">
          <TextType
            text={[
              "I'm a Full Stack Developer with 5+ years of experience building scalable, high-performance web applications. My expertise lies in React.js, TypeScript, JavaScript, and modern frontend development, complemented by 1.5 years of experience developing backend services using Java and Spring Boot. I have built enterprise applications across healthcare, fintech, education, logistics, and HRMS domains focusing on clean architecture, responsive UI, REST API integration, performance optimization, and reusable component design. I enjoy solving complex problems, collaborating with cross-functional teams, and delivering reliable, user-centric software solutions.",
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default AboutMe;
