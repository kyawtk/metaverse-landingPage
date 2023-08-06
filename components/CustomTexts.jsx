"use client";
import { motion } from "framer-motion";
import styles from "../styles/index";
import {
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
  textContainer,
  textVariant2,
} from "../utils/motion";

export const TypingText = ({ title }) => (
  <motion.p variants={textContainer} initial="hidden" whileInView="show" className="text-white">
    {title.split("").map((letter, i) => {
      return (
        <motion.span key={i} variants={textVariant2}>
          {" "}
          {letter == ' ' ? '\u00A0' : letter}
        </motion.span>
      );
    })}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => {
  return (
    <motion.h2 variants={textVariant2} initial='hidden' whileInView='show' className={`mt-[8px] font-bold text-[40px] md:text-[64px] text-white ${textStyles}`}>
{title}
    </motion.h2>
  )
};
