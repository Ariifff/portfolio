import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://github.com/Ariifff" aria-label="GitHub"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/arif-rainee" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href="https://www.instagram.com/arrey_arif/" aria-label="Instagram"><FiInstagram /></a>
        <a href="mailto:arifrainee1@gmail.com" aria-label="Email"><FiMail /></a>
      </div>
      <div className={styles.credit}>
        <p>Designed & Built by Mohd Arif Rainee</p>
      </div>
    </footer>
  );
};

export default Footer;
