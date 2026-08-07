import ScrollControl from "@/controlls/ScrollCrontrol";
import Home from "./pages/Home";
import DrawerTop from "../DrawerTop";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

document.title = "Vijeesh | Fullstack Developer";
const HomePage = () => {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(false);
  return (
    <>
      {/* <> */}
      {/* <div className="min-h-screen bg-linear-to-br from-[#080006] via-[#160008] to-[#3b0018]"> */}
      {/* <div className=`{""min-h-screen bg-linear-to-br from-[#f36ad0] via-[#be5079] to-[#e00b61]"}> */}
      <div
        className={`min-h-screen bg-linear-to-br ${theme ? "from-[#f36ad0] via-[#be5079] to-[#e00b61]" : "from-[#080006] via-[#160008] to-[#3b0018]"}`}
      >
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
        <Home />
        <ScrollControl />
        <DrawerTop
          open={open}
          setOpen={setOpen}
          setTheme={setTheme}
          theme={theme}
        />
        <div className="fixed bottom-[5%] left-4 z-50">
          <IoSettingsOutline
            className="text-[2rem] text-white/20 cursor-pointer hover:text-white"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
