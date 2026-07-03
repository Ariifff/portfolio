import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaAndroid, FaDatabase, FaLinux, FaNetworkWired, FaTools } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiRaspberrypi, SiEspressif } from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Android Development',
      icon: <FaAndroid />,
      skills: [
        'Java',
        'Kotlin',
        'React Native',
        'Android Studio',
        'XML',
        'Jetpack Compose',
        'MVVM',
        'Material Design',
        'REST APIs',
        'RecyclerView',
        'ViewBinding',
        'Navigation Component',
        'Room Database',
        'Firebase',

      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaDatabase />,
      skills: [
        'Firebase Authentication',
        'Firebase Realtime Database',
        'Firebase Storage',
        'SQLite',
        'MongoDB',
        'Retrofit',
        'JSON',
        'REST APIs'
      ]
    },
    {
      title: 'Programming Languages',
      icon: <FaJava />,
      skills: [
        'Java',
        'Kotlin',
        'Python',
        'C',
        'C++',
        'SQL'
      ]
    },
    {
      title: 'Embedded & IoT',
      icon: <SiEspressif />,
      skills: [
        'ESP32',
        'Raspberry Pi',
        'Jetson',
        'STM32',
        'GPIO',
        'UART',
        'SPI',
        'I2C',
        'RS485',
        'Modbus'
      ]
    },
    {
      title: 'Linux & Computer Vision',
      icon: <FaLinux />,
      skills: [
        'Ubuntu',
        'Raspberry Pi OS',
        'Shell',
        'Systemd',
        'OpenCV',
        'Embedded Linux'
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: <FaNetworkWired />,
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'Android Debug Bridge (ADB)',
        'Figma',
        'Canva',
        'VS Code'
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-title"><span className="chonky-underline-blue has-hover-anim">02.</span> Skills & Expertise</h2>

        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              className={`${styles.card} glass`}
              whileHover={{ y: -5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className={styles.cardBody}>
                {cat.skills.map((skill, i) => (
                  <span key={i} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
