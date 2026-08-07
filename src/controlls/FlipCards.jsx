import { useState } from "react";

const FlipCards = ({ title, children }) => {
  const [isFlipOpen, setIsFlipOpen] = useState(false);

  return (
    <>
      <div
        className="group h-70 w-full [perspective:1000px]"
        onClick={() => setIsFlipOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipOpen((prev) => !prev);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Flip card: ${title}`}
      >
        <div
          className={`relative h-full w-full rounded-xl transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${isFlipOpen ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute inset-0 rounded-xl bg-zinc-900/20 border border-white/3 flex items-center justify-center [backface-visibility:hidden]">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
          </div>
          <div className="absolute inset-0 rounded-xl bg-[#f277b6]/10 text-white flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCards;
