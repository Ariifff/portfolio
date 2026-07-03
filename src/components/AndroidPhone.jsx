import React from 'react';
import { motion } from 'framer-motion';
import styles from './AndroidPhone.module.css';

const AndroidPhone = ({ image, noRotation = false }) => {
  const animateProps = noRotation 
    ? { y: [-15, 15, -15], rotateY: 0, rotateX: 0, rotateZ: 0 } 
    : { y: [-15, 15, -15], rotateY: [0, 360], rotateX: 15, rotateZ: -5 };

  const transitionProps = noRotation
    ? { y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
    : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 12, repeat: Infinity, ease: "linear" } };

  return (
    <div className={styles.phoneWrapper}>
      <div className={styles.scene}>
        <motion.div
          className={styles.phone}
          animate={animateProps}
          transition={transitionProps}
        >
          <div className={`${styles.face} ${styles.front}`}>
            <div className={styles.cameraPunch}></div>
            <div className={`${styles.screen} ${image ? styles.screenWithImage : ''}`}>
              {image ? (
                <img src={image} alt="App Screen" className={styles.screenImage} />
              ) : (
                <>
                  <div className={styles.mockHeader}></div>
                  <div className={styles.mockCard}></div>
                  <div className={styles.mockCard}></div>
                  <div className={styles.mockCard}></div>
                </>
              )}
            </div>
          </div>
          <div className={`${styles.face} ${styles.back}`}>
            <div className={styles.cameraModule}>
              <div className={styles.lens}></div>
              <div className={styles.lens}></div>
            </div>
            <div className={styles.logo}>G</div>
          </div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.right}`}>
             <div className={styles.powerButton}></div>
             <div className={styles.volumeButton}></div>
          </div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AndroidPhone;
