"use client";
import { motion } from "framer-motion";
import styles from "../styles/index";
import {
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
  zoomIn,
} from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
const World = () => {
  return (
    <motion.section className={`${styles.paddings} ${styles.innerWidth}`} variants={staggerContainer}>
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <TypingText title="Be Anywhere on Earth"></TypingText>
        <TitleText
          title={
            <>
              Track friends around you and invite them to play in the virtual
              world
            </>
          }
        ></TitleText>
        <motion.div className="relative w-full " variants={zoomIn(0.2,0.5)} initial='hidden' whileInView='show'>
          <img
            src="/map.png"
            alt="world map"
            className="w-full h-full object-contain relative"
          />
          <div className={`${styles.imgGlow} absolute w-[40px] sm:w-[50px] sm:h-[50px] h-[40px] bottom-20 right-20  `}>
             <img src="/people-01.png" alt="person img" className="w-full h-full object-contain" />
          </div>
          <div className={` ${styles.imgGlow} absolute w-[40px] sm:w-[50px] sm:h-[50px] h-[40px] top-10 left-20  `}>
             <img src="/people-02.png" alt="person img" className="w-full h-full object-contain" />
          </div>
          <div className={`${styles.imgGlow} absolute w-[40px] sm:w-[50px] sm:h-[50px] h-[40px] top-[200px] left-[53px]  `}>
             <img src="/people-03.png" alt="person img" className="w-full h-full object-contain" />
          </div>
         
        </motion.div>
      </div>
    </motion.section>
  );
};

export default World;
