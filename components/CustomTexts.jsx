'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variant={textContainer}
    className={`${textStyles} font-normal text-[14px] text-secondary-white`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}>
    {title}
  </motion.h2>
);
