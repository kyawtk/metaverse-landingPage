"use client";
import { motion } from "framer-motion";
import styles from "../styles/index";
import {
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
} from "../utils/motion";
import ExploreCard from "../components/ExploreCard";
import { exploreWorlds } from "../constants";
import { TitleText, TypingText } from "../components/CustomTexts";
import { useState } from "react";
const Explore = () => {
  const [active, setActive] = useState("world-2");
  
  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <TypingText title={"The World"} s>
          {" "}
        </TypingText>
        <TitleText
          textStyles="text-center"
          title={
            <>
              Choose the world you want <br className="md:block hidden" />
              to explore
            </>
          }
        />
        <div className="flex flex-col lg:flex-row mt-[50px] min-h-[70vh] gap-5">
          {exploreWorlds.map((w, i) => {
            return (
              <ExploreCard
                key={w.id}
                {...w}
                active={active}
                index={i}
                handleClick={setActive}
              ></ExploreCard>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
