import ScrollControl from "@/controlls/ScrollCrontrol";
import Home from "./pages/Home";

document.title = "Vijeesh | Fullstack Developer";
const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#080006] via-[#160008] to-[#3b0018]">
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
        <Home />
        <ScrollControl />
      </div>
    </>
  );
};

export default HomePage;
