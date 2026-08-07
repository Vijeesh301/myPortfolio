import React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/controlls/useMediaQuery";

const DrawerTop = ({ open, setOpen, setTheme, theme }) => {
  const isMobile = useMediaQuery("(max-width: 770px)");

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen} direction="top">
        <DrawerContent className="bg-[#4b1c40]/50 min-h-[15vh] flex justify-center border-none p-2">
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:grid-cols-4">
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FaLinkedin className="text-[2rem] text-red-400" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-white">
                    LinkedIn
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FaGithubSquare className="text-[2rem] text-red-400" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-white">
                    Github
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SiGmail className="text-[2.1rem] text-red-400" />
                  </TooltipTrigger>
                  <TooltipContent
                    side={isMobile ? "bottom" : "top"}
                    className="text-white"
                  >
                    Gmail
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {theme ? (
                      <CiDark
                        className="text-[2.1rem] text-red-400"
                        onClick={() => setTheme(!theme)}
                      />
                    ) : (
                      <MdDarkMode
                        className="text-[2.1rem] text-red-400"
                        onClick={() => setTheme(!theme)}
                      />
                    )}
                  </TooltipTrigger>
                  <TooltipContent
                    side={isMobile ? "bottom" : "top"}
                    className="text-white"
                  >
                    Theme
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerTop;
