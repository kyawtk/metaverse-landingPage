"use client";

import { motion } from "framer-motion";
import styles from "../styles/index";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 mb-[100px] `}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col justify-center items-center z-10 relative">
        <motion.h1
          className={`${styles.heroHeading}`}
          variants={textVariant(1.1)}
        >
          Awesome{" "}
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex felx-row items-center justify-center "
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
      
        className="relative -mt-[50px] md:-mt-[100px] w-full h-[300px]  "
      >
        <img
          src="/cover.png"
          alt="cover"
          className=" rounded-tl-[40px] w-full sm:h-[500px] h-[350px] object-cover z-10"
        />
        <a href="#explore">
          <div className="-mt-[50px] sm:-mt-[75px] flex justify-end w-full  ">
            <img
              src="/stamp.png"
              alt="stamp img link"
              className="w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] object-contain mr-5 sm:mr-10"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
