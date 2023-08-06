const StartSteps = ({ number, text }) => (
  <div className="flex flex-row items-center justify-center">
    <div className="rounded-xl flex justify-center items-center w-[70px] h-[70px] bg-[#323f5d]">
      <p className="text-white font-semibold">{String(number.toString()).padStart(2, "0")}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] ">{text}</p>
  </div>
);

export default StartSteps;
