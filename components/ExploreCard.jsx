"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, navVariants } from "../utils/motion";

const ExploreCard = ({ index, handleClick, id, title, imgUrl, active }) => {
  return (
    <motion.div
    onClick={()=>{handleClick(id)}}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active == id ? `lg:flex-[3.5] flex-[10]` : "flex-[2] lg:flex-[1]"
      } flex items-center justify-center min-w-[79px] h-[700px] transition-[flex] duration-75 ease-out-flex cursor-pointer `}
     
    >
      <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-lg"></img>

      {active !== id ? (
        <h2 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
          {title}
        </h2>
      ): (
        <div className="absolute bottom-0 p-8 bg-[rgba(0,0,0,0.5)] w-full rounded-lg">
          <div className="glassmorphism  rounded-xl w-[60px] h-[60px] flex justify-center items-center mb-5">
            <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="font-normal text-[16px] leading-5 text-white uppercase">Enter the metaverse</p>
          <h2 className="mt-[24px] text-white font-semibold sm:text-[32px] text-[24px] ">{title}</h2>
        </div>
      )}
     
    </motion.div>
  );
};

export default ExploreCard;
