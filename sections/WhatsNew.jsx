"use client";
import { motion } from "framer-motion";
import styles from "../styles/index";
import {
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
  planetVariants,
} from "../utils/motion";
import ExploreCard from "../components/ExploreCard";
import { newFeatures } from "../constants";
import { TitleText, TypingText } from "../components/CustomTexts";
import { useState } from "react";
import StartSteps from "../components/StartSteps";
import NewFeatures from "../components/NewFeatures";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-20`}>
     <div className="gradient-03 z-0"></div>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  lg:flex-row-reverse flex-col gap-8`}
    >
      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
        variants={planetVariants("left")}
      >
        <img
          src="/whats-new.png"
          alt="planet image"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className=" flex-1 flex justify-center flex-col"
      >
        <TypingText title={"| New Things Come First"}></TypingText>
        <TitleText title={<>Whats new about Metaverse.</>}></TitleText>
        <div className="mt-[30px] flex flex-row max-w-[370px] gap-6">
          {newFeatures.map((f, i) => {
            return <NewFeatures key={i} {...f}></NewFeatures>;
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
