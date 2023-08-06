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
import { startingFeatures } from "../constants";
import { TitleText, TypingText } from "../components/CustomTexts";
import { useState } from "react";
import StartSteps from "../components/StartSteps";
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-20`}>
    <div className="gradient-007 z-0" />
     <div className="gradient-01 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
        variants={planetVariants("left")}
      >
        <img
          src="/get-started.png"
          alt="planet image"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className=" flex-1 flex justify-center flex-col"
      >
        <TypingText title={"| How this metaverse works"}></TypingText>
        <TitleText title={<>Get started with your healthy eyes.</>}></TitleText>
        <div className="mt-[30px] flex flex-col max-w-[370px] gap-6">
          {startingFeatures.map((f, i) => {
            return <StartSteps key={i} text={f} number={i + 1}></StartSteps>;
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
