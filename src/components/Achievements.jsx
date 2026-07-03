import React from 'react';
import { motion } from 'framer-motion';
import styles from './Achievements.module.css';

const Achievements = () => {
  const list = [
    { title: 'Qualified for ISRO CanSat Competition' },
    { title: 'Completed Social Summer of Code Season 3' },
    { title: 'Worked on multiple industrial embedded projects' },
    { title: 'Built Android, Linux, Embedded and AI-based applications' },
    { title: 'Joint Coordinator at AMURoboClub' },
    { title: 'Volunteer for Technical Events and Robotics Workshops' }
  ];

  return (
    <section id="achievements" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-title"><span className="chonky-underline-magenta has-hover-anim">05.</span> Achievements & Leadership</h2>
        
        <div className={styles.list}>
          {list.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${styles.item} glass`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.icon}>🏆</div>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
