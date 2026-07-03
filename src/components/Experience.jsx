import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Embedded Systems Developer',
      company: 'Adhyava.com',
      date: 'June 2026 - Present',
      details: [
        'Developed a Linux-based industrial software platform on Raspberry Pi.',
        'Implemented secure data synchronization and offline-first operation.',
        'Integrated GPS, USB Cameras, and hardware communication protocols (RS485/Modbus).',
      ]
    },
    {
      title: 'Android App Developer Intern',
      company: 'iRAMA.ai (IIT Roorkee)',
      date: 'Jan 2026 - Jun 2026',
      details: [
        'Developed Android applications using Kotlin following the MVVM architecture.',
        'Designed and implemented features for an AI-powered road hazard detection and reporting platform.',
        'Integrated REST APIs, GPS services, and background tasks for real-time data collection.',
        'Worked on interactive map-based interfaces for hazard visualization and tracking.',
        'Gained practical exposure to the full mobile development lifecycle and agile methodologies.'
      ]
    },
    {
      title: 'Android Security Intern',
      company: 'NIT Tiruchirappalli',
      date: 'Jan 2026 - June 2026',
      details: [
        'Performed Android application reverse engineering using JADX and APKTool.',
        'Analyzed APK structures, AndroidManifest files, permissions, and application architecture.',
        'Studied authentication flows, API communication, and application security mechanisms.',
        'Investigated application behavior to identify security vulnerabilities and understand Android internals.',
        'Worked with Android security concepts including decompilation, static analysis, and network communication.'
      ]
    },

    {
      title: 'Android Developer Intern',
      company: 'NTS Nihon Global',
      date: 'June 2025 - July 2025',
      details: [
        'Collaborated in an Agile development team to build a cross-platform mobile application using React Native and Firebase.',
        'Developed and integrated application features while ensuring clean, maintainable, and scalable code.',
        'Implemented secure authentication, notification modules, and core mobile functionalities.',
        'Participated in code reviews, contributing to code quality, best practices, and continuous improvement of the application.',
        'Worked closely with senior developers to understand modern mobile development workflows and Agile methodologies.'
      ]
    },
  ];

  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-title"><span className="chonky-underline-violet has-hover-anim">03.</span> Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`${styles.timelineContent} glass`}>
                <div className={styles.header}>
                  <h3>{exp.title} <span>@ {exp.company}</span></h3>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <ul className={styles.detailsList}>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
