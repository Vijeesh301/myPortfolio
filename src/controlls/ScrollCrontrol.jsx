import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollControl = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollTop}
      className="
        fixed
        right-6
        bottom-6
        h-12
        w-12
        rounded-full
        bg-[#e04922]/30
        backdrop-blur-md
        border
        border-white/10
        hover:bg-[#e04922]/60
        shadow-[0_0_20px_rgba(224,73,34,0.4)]
      "
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollControl;
