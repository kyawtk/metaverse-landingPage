const NewFeatures = ({title, subtitle, imgUrl}) => (
  <div className="flex flex-col justify-start gap-4  text-left">
  <div className="rounded-xl flex justify-center items-center w-[70px] h-[70px] bg-[#323f5d]">
    <img src={imgUrl} alt="image" className="w-3/4 h-3/4 " />
  </div>
  <h3 className="text-left font-semibold flex-1 font-normal text-[18px] text-white text-[18px] sm:text-[24px]">{title}</h3>
  <p className="text-[#a5a5a5]">{subtitle}</p>
</div>
);

export default NewFeatures;
