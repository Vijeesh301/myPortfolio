import ScrollControl from "@/controlls/ScrollCrontrol";
import Home from "./pages/Home";
import DrawerTop from "../DrawerTop";
import { ImMenu4 } from "react-icons/im";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

document.title = "Vijeesh | Fullstack Developer";
const HomePage = () => {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(false);
  return (
    <>
      <div
        className={`min-h-screen bg-linear-to-br ${theme ? "from-[#f36ad0] via-[#be5079] to-[#e00b61]" : "from-[#080006] via-[#160008] to-[#3b0018]"}`}
      >
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
        <Home theme={theme} />
        <ScrollControl />
        <DrawerTop
          open={open}
          setOpen={setOpen}
          setTheme={setTheme}
          theme={theme}
        />
        {/* <Tooltip>
          <TooltipTrigger asChild>
            <div className="fixed bottom-[5%] left-4 z-50">
              <TbLayoutNavbarExpandFilled
                className="text-[2rem] text-white/20 cursor-pointer hover:text-white"
                onClick={() => setOpen(true)}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-white">
            Menu
          </TooltipContent>
        </Tooltip> */}
        <div className="fixed bottom-[3.5%] left-4 z-50">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white [&>svg:last-child]:hidden">
                  <ImMenu4 className="text-white/30 text-[2rem] cursor-pointer hover:text-white" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-white">
                  <ul className="grid w-50 gap-1 p-2">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/Vijeeshv301/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-white/30 hover:text-white text-[1.5rem] cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Vijeesh301"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubSquare className="text-white/30 hover:text-white text-[1.5rem] cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:vijeesh301@gmail.com">
                        <SiGmail className="text-white/30 hover:text-white text-[1.4rem] cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      {theme ? (
                        <CiDark
                          className="text-white/30 hover:text-white text-[1.5rem] cursor-pointer"
                          onClick={() => setTheme(!theme)}
                        />
                      ) : (
                        <MdDarkMode
                          className="text-white/30 hover:text-white text-[1.5rem] cursor-pointer"
                          onClick={() => setTheme(!theme)}
                        />
                      )}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
};

export default HomePage;
