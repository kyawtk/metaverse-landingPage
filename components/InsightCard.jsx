'use client';
import { motion } from "framer-motion";
import styles from "../styles/index";
import { insights } from "../constants";
import {
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
  zoomIn,
} from "../utils/motion";
const InsightCard = ({number,imgUrl , title , subtitle}) => (
  <motion.div variants={fadeIn('up','tween', number*0.5, 0.5)} className="flex flex-row gap-[30px] items-center justify-center">
    <div className=" w-[100px] sm:w-[150px]  h-[100px] sm:h-[150px]">
      <img src={imgUrl} alt="insight img" className="w-full h-full rounded-3xl object-cover" />
    </div>
    <div className="flex-1 sm:max-w-[500px] flex flex-col justify-center items-start ">
      <h3 className="text-white font-semibold text-[20px] sm:text-[30px]">{title}</h3>
      <p className="text-[#9c9c9c] font-normal">{subtitle}</p>
    </div>
    <div className="hidden lg:flex rounded-full w-[50px] h-[50px] border  items-center justify-center ">
      <img src="/arrow.svg" alt="arrow link" className="w-1/2 h-1/2 object-contain"/>
    </div>
  </motion.div>
);

export default InsightCard;
