import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={`${styles.contactSection} container`}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        <p className={styles.overline}>06. What's Next?</p>
        <h2 className={styles.title}><span className="chonky-underline-yellow has-hover-anim">Get In Touch</span></h2>
        <p className={styles.desc}>
          I'm currently looking for new opportunities in Software Engineering, Embedded Systems, and AI. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:arifrainee1@gmail.com" className="btn-primary">
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
