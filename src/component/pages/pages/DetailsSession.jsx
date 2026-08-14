import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const DetailsSession = ({ regionData }) => {
  const spanClass =
    "text-xs px-2 py-1 rounded-full border border-white/15 text-white/60";
  return (
    <>
      <div className="p-3 relative overflow-hidden">
        <div className="absolute top-0 left-60 w-72 h-72 bg-red-900/15 rounded-full"></div>
        <div className="grid h-full gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div className="text-white flex justify-center">
            <div className="relative p-3 bg-black/10 backdrop-blur-[5px] w-60">
              <div className="text-white text-center">
                <p className="text-[5rem]">5+</p>
                <p className="text-[1.3rem]">years of experience</p>
              </div>
            </div>
          </div>
          <div className="text-white h-50 flex justify-center items-center p-5">
            <div>
              <p>
                I build scalable web applications with modern frontend and
                backend technologies.
              </p>
              {regionData?.country_name !== "India" && (
                <>
                  <div className="text-white text-[1.5rem] my-5">
                    <span>Resume</span>
                    <div className="h-px flex-1 bg-white/20"></div>
                  </div>
                  <div className="text-white gap-5 flex">
                    <a
                      href="https://drive.google.com/file/d/1MK0ynY7FX5mp1CvGqK7w2hd2Gw8_JdJN/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#16b36b]/20 w-50 hover:bg-[#16b36b]/50">
                        View & Download
                      </Button>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Card className="bg-[#540351]/10 text-white w-full p-5 mt-15 min-h-50">
          <CardHeader className="text-[1.5rem]">
            <span>Experience</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="freelance"
                className="border-b border-white/15"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2">
                    <span className="text-white text-base font-medium">
                      Frontend Developer
                    </span>
                    <span className="text-white/50 text-sm">
                      Freelance Project · 07/2025 - 02/2026
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm">
                    <li>
                      Built a responsive client-facing web app end-to-end using
                      React, Shadecn and Tailwind
                    </li>
                    <li>
                      Implemented client-side encryption and decryption to
                      secure sensitive data before it left the browser
                    </li>
                    <li>
                      Integrated REST APIs and handled state management across
                      the app
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className={spanClass}>React</span>
                    <span className={spanClass}>Tailwind CSS</span>
                    <span className={spanClass}>REST API</span>
                    <span className={spanClass}>Javascript</span>
                    <span className={spanClass}>Shadcn</span>
                    <span className={spanClass}>Web Crypto API</span>
                  </div>
                  <div className="text-[1rem] flex flex-1 flex-col items-start text-left gap-0.5 pr-2 mt-3">
                    <span className="text-white text-base font-medium">
                      Projects:
                    </span>
                    <ul className="text-[13px] list-disc list-inside space-y-1.5 text-white/70 text-sm">
                      <li>
                        <span className="font-bold">Hospital ERP System:</span>{" "}
                        Healthcare platform managing patient appointments,
                        doctor diagnostics, prescriptions, and hospital
                        administration workflows.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="frontend-dev"
                className="border-b border-white/15"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2">
                    <span className="text-white text-base font-medium">
                      Frontend Developer
                    </span>
                    <span className="text-white/50 text-sm">
                      Cordova Educational Solutions · 07/2024 - 07/2025
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm">
                    <li>
                      Developed and maintained core UI features used by
                      thousands of users
                    </li>
                    <li>
                      Improved page load performance by optimizing bundle size
                      and lazy loading
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className={spanClass}>React</span>
                    <span className={spanClass}>TypeScript</span>
                    <span className={spanClass}>Javascript</span>
                    <span className={spanClass}>Ant Design</span>
                    <span className={spanClass}>MUI</span>
                  </div>
                  <div className="text-[1rem] flex flex-1 flex-col items-start text-left gap-0.5 pr-2 mt-3">
                    <span className="text-white text-base font-medium">
                      Projects:
                    </span>
                    <ul className="text-[13px] list-disc list-inside space-y-1.5 text-white/70 text-sm">
                      <li>
                        <span className="font-bold">
                          HR Management System (HRMS):
                        </span>{" "}
                        Employee lifecycle management system including
                        recruitment, onboarding, payroll, leave management, and
                        task allocation.
                      </li>
                      <li>
                        <span className="font-bold">
                          Logistics Management Platform:
                        </span>{" "}
                        Transport and logistics operations system supporting
                        workflow automation and operational tracking
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="software-dev">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-1 flex-col items-start text-left gap-0.5 pr-2">
                    <span className="text-white text-base font-medium">
                      Software Developer
                    </span>
                    <span className="text-white/50 text-sm">
                      GJ Global IT Ventures · 03/2022 - 07/2024
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm">
                    <li>
                      Developed and maintained core UI features used by
                      thousands of users
                    </li>
                    <li>
                      Improved page load performance by optimizing bundle size
                      and lazy loading
                    </li>
                    <li>
                      Built backend services using Java and Spring Boot for
                      internal tools
                    </li>
                    <li>
                      Worked across the full stack, connecting React frontends
                      to Spring Boot APIs
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className={spanClass}>React</span>
                    <span className={spanClass}>Javascript</span>
                    <span className={spanClass}>Typescript</span>
                    <span className={spanClass}>TypeORM</span>
                    <span className={spanClass}>GraphQL</span>
                    <span className={spanClass}>Tailwind CSS</span>
                    <span className={spanClass}>REST API</span>
                    <span className={spanClass}>Java</span>
                    <span className={spanClass}>Spring Boot</span>
                  </div>
                  <div className="text-[1rem] flex flex-1 flex-col items-start text-left gap-0.5 pr-2 mt-3">
                    <span className="text-white text-base font-medium">
                      Projects:
                    </span>
                    <ul className="text-[13px] list-disc list-inside space-y-1.5 text-white/70 text-sm">
                      <li>
                        <span className="font-bold">Fintech Platform:</span>{" "}
                        Digital payment platform supporting micro-ATM services,
                        mobile recharge, and utility bill payments.
                      </li>
                      <li>
                        <span className="font-bold">
                          Education Management System (EMS):
                        </span>{" "}
                        School management platform handling attendance,
                        examinations, student records, fee management, and staff
                        administration.
                      </li>
                      <li>
                        <span className="font-bold">
                          Campus Management System (CMS):
                        </span>{" "}
                        College ERP platform supporting department-level student
                        management, attendance tracking, examinations, and
                        administration.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DetailsSession;
