import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <>
      <Card className="bg-[#af0571]/10 w-full p-10 min-h-65 mb-5">
        <CardHeader className="text-white text-[1.5rem]">
          <span>Contact Form</span>
          <div className="h-px flex-1 bg-white/20"></div>
          <p className="text-[.8rem]">Have a project or opportunity in mind?</p>
        </CardHeader>
        <CardContent className="text-white text-[1rem]">
          {/* <span className="animate-pulse"></span> */}
          <div className="flex justify-center">
            <div className="w-[30%] flex justify-center">
              <div className="w-full">
                {" "}
                <Input placeholder="Name" />
                <Input placeholder="Email" className="my-5" />
                <Textarea
                  placeholder="Message"
                  className="min-h-32 resize-none"
                />
                <Button variant="outline" className="w-full mt-5">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
