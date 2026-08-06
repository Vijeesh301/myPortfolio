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
          <div className="text-white h-50 flex justify-center items-center">
            <p>
              I build scalable web applications with modern frontend and backend
              technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSession;
