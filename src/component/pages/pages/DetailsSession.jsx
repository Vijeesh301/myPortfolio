import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DetailsSession = () => {
  return (
    <>
      <div className="p-3 relative overflow-hidden">
        <div className="absolute top-0 left-50 w-72 h-72 bg-red-900/20 rounded-full"></div>
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
            <p>
              I build scalable web applications with modern frontend and backend
              technologies.
            </p>
          </div>
        </div>
        <Card className="bg-[#540351]/10 text-white w-full p-5 mt-2 min-h-75">
          <CardHeader className="text-[1.5rem]">
            <span>Experience</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="shipping"
                className="border-b border-neutral-800/70"
              >
                <AccordionTrigger>Frontend Developer | 2006</AccordionTrigger>
                <AccordionContent>
                  We offer standard (5-7 days), express (2-3 days), and
                  overnight shipping. Free shipping on international orders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="returns"
                className="border-b border-neutral-800/70"
              >
                <AccordionTrigger>Software Developer | 2000</AccordionTrigger>
                <AccordionContent>
                  Returns accepted within 30 days. Items must be unused and in
                  original packaging. Refunds processed within 5-7 business
                  days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger>
                  Frontend Developer - Freelance Project | 2222
                </AccordionTrigger>
                <AccordionContent>
                  Reach us via email, live chat, or phone. We respond within 24
                  hours during business days.
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
