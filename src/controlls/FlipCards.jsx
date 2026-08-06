const FlipCards = ({ title, children }) => {
  return (
    <>
      <div className="group h-70 w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
