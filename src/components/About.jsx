import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-title"><span className="chonky-underline-yellow has-hover-anim">01.</span> About Me</h2>

        <div className={styles.inner}>
          <div className={styles.text}>
            <p>
              Hi, I'm <strong>Mohd Arif Rainee</strong>, a final-year Computer Engineering student passionate about Android development, software engineering, and building applications that solve real-world problems. I enjoy creating modern, scalable mobile applications with clean user experiences while continuously exploring new technologies and development practices.
            </p>
            <p>
              Beyond Android development, I'm fascinated by the intersection of software and hardware. My curiosity has led me to work on projects involving <strong>Raspberry Pi, ESP32, Embedded Linux, Computer Vision, and Industrial Automation</strong>, giving me hands-on experience in building intelligent systems that connect mobile applications with real-world devices.
            </p>
            <p> I believe the best way to learn is by building. Whether it's developing an Android application, designing an embedded solution, or experimenting with AI-powered technologies, I enjoy turning ideas into practical, user-focused products.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className={styles.skillsList}>
              <li>Java & Kotlin</li>
              <li>Android Studio </li>
              <li> Jetpack Compose</li>
              <li>Firebase & SQLite</li>
              <li>Python</li>
              <li>Embedded Linux</li>
              <li>Raspberry Pi & ESP32</li>
            </ul>
          </div>

          <div className={styles.picContainer}>
            <div className={styles.wrapper}>
              <div className={styles.placeholderPic}>
                <img src={`${import.meta.env.BASE_URL}arif.jpeg`} alt="Profile" className={styles.profileImg} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
