"use client";
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
import { TitleText, TypingText } from "../components/CustomTexts";

const Feedback = () => (
  <motion.section
    className={`${styles.paddings} ${styles.innerWidth} relative`}
    variants={staggerContainer()}
  >
    <div className="feedback-gradient" />
    <div className="flex flex-col justify-center items-center gap-8 text-center">
      <TypingText title="FeedBack"></TypingText>
      <TitleText title={<>Breath taking</>}></TitleText>
    </div>

    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      className={`mt-[100px] ${styles.innerWidth} flex flex-col md:flex-row gap-8 `}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Metaverus
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Feedback;
