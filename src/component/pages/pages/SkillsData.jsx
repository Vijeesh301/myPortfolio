import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FlipCards from "@/controlls/FlipCards";

const SkillsData = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-2 lg:grid-cols-4">
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
          children="Git, Docker, AWS, Postman, Maven, Linux"
        />
      </div>
      {/* <div className="group h-80 w-64 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"> */}
      {/* Front */}
      {/* <div className="absolute inset-0 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white [backface-visibility:hidden]">
              <div className="text-center">
                <h2 className="text-2xl font-bold">React</h2>
                <p className="text-gray-400">Frontend</p>
              </div>
            </div>

            {/* Back */}
      {/* <div className="absolute inset-0 rounded-xl bg-red-600 text-white flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]"> */}
      {/* <div className="text-center p-4">
                <h2 className="text-xl font-bold">Skills</h2>
                <p>React</p>
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
              </div>
            </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <Card className="text-white min-h-40 rounded bg-[#ffc5f0]/10 p-4">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="text-white min-h-40 rounded bg-[#ffc5ce]/10 p-4">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="text-white min-h-40 rounded bg-[#f9c3ff]/10 p-4">
          <CardHeader>
            <CardTitle>Database</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="text-white min-h-40 rounded bg-blue-200/10 p-4">
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card> */}
      {/* </div> */}
    </>
  );
};

export default SkillsData;
