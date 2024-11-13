"use client";
import { motion } from "framer-motion";

export const MotionVideo = motion.video;
export const MotionText = motion.div;

export const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
};

export const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const textVariants2 = {
  hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };
 
 export const textVariants3 ={
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


