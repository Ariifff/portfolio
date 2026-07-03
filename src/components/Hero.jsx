import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './Hero.module.css';
import AndroidPhone from './AndroidPhone';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Optional GSAP animation Example, though we are mostly using framer-motion below
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className={`${styles.hero} section`}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={itemVariants}>
            Hi, my name is
          </motion.p>
          <motion.h1 className={styles.name} variants={itemVariants}>
            Mohd Arif Rainee.
          </motion.h1>
          <motion.h2 className={styles.subtitle} variants={itemVariants} ref={textRef}>
            I build things for the <span className="chonky-underline-violet has-hover-anim">physical world</span>
          </motion.h2>
          <motion.p className={styles.description} variants={itemVariants}>
            I'm a Computer Engineering student passionate about Android Development, Software Engineering, and Embedded Systems. I build scalable mobile applications and intelligent software solutions that bridge the gap between software and hardware.
          </motion.p>
          <motion.div className={styles.cta} variants={itemVariants}>
            <a href="#projects" className="btn-primary">Check out my work!</a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.mobileMockup}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <AndroidPhone />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
