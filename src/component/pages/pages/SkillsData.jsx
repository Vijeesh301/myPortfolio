import FlipCards from "@/controlls/FlipCards";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkillsData = ({ regionData }) => {
  return (
    <>
      <div className="text-white text-[1.5rem] px-10">
        <span>Skills</span>
        <div className="h-px flex-1 bg-white/20"></div>
      </div>
      <div className="my-5 grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4">
        <FlipCards
          title="Frontend"
          children="React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, shadcn/ui, Redux, React Query, Tanstack Query, Formik, Tanstack Table, React Router, Vite, Webpack, MUI, Ant Design, Bootstrap"
        />
        <FlipCards
          title="Backend"
          children="Java, Spring Boot, Spring Security, REST APIs, Hibernate / JPA, Microservices, JWT Authentication"
        />
        <FlipCards title="Database" children="PostgreSQL, MySQL, MongoDB" />
        <FlipCards
          title="Tools"
          children="Git, Docker, AWS Basics, Postman, CI/CD, Jira, Figma, Photoshop, Indesign, Illustrator"
        />
      </div>
      <Card className="text-white p-7 bg-[#b45c42]/10">
        <CardHeader className="text-[1.5rem]">
          <span>Certifications</span>
          <div className="h-px flex-1 bg-white/20"></div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2">
            <span className="text-white text-base font-medium">
              Fullstack Developer - MERN
            </span>
            <span className="text-white/50 text-sm">
              ICT Academy of Kerala - 10/2021 - 03/2022
            </span>
          </div>
          <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2 mt-4">
            <span className="text-white text-base font-medium">
              Web Designing
            </span>
            <span className="text-white/50 text-sm">
              Norka Roots, Govt. of Kerala - 08/2012 - 11/2012
            </span>
          </div>
        </CardContent>
        <CardHeader className="text-[1.5rem]">
          <span>Languages</span>
          <div className="h-px flex-1 bg-white/20"></div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2">
            <span className="text-white text-base font-medium">
              {regionData?.country_name === "India"
                ? "English - B2 | Malayalam | Tamil"
                : "German - B2 | English - B2"}
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillsData;
