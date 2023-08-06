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
import InsightCard from "../components/InsightCard";
const Insights = () => (
  <motion.section
    className={`${styles.paddings} ${styles.innerWidth}`}
    variants={staggerContainer()}
  >
    <div className="flex flex-col justify-center items-center gap-8 text-center">
      <TypingText title="Insights"></TypingText>
      <TitleText title={<>Insights about Metaverse</>}></TitleText>
    </div>

    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      className={`mt-[100px] ${styles.innerWidth} flex flex-col gap-9 justify-center items-center`}
    >
      {insights.map((insight, i) => {
        return <InsightCard number={i} key={insight.title} {...insight}></InsightCard>;
      })}
    </motion.div>
  </motion.section>
);

export default Insights;
