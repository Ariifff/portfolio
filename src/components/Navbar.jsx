import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} glass`}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logo}>
          <a href="#">Arif<span>.dev</span></a>
        </div>

        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.resumeBtn}>
          <a href="/arif_full.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Resume</a>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <a href={link.href} onClick={toggleMenu} className={styles.mobileNavLink}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
              >
                <a href="#" className="btn-outline" onClick={toggleMenu}>Resume</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
