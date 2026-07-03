import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import AndroidPhone from './AndroidPhone';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'VendorLink — Vendor Discovery & Marketplace Platform',
      description: 'VendorLink is a native Android marketplace application that connects users with nearby vendors, enabling seamless product discovery, service requests, and order management through an intuitive mobile experience. Developed using Kotlin with the MVVM architecture, the application integrates a Node.js and Express backend with MongoDB through REST APIs, supporting secure JWT authentication, real-time messaging, user profiles, location-based vendor discovery, and order tracking while demonstrating scalable full-stack mobile application development.',
      tech: ['Kotlin', 'MongoDB', 'Restful APIs', 'JWT Authentication', 'Jetpack Compose', 'Node.js', 'WebSockets'],
      github: 'https://github.com/adiba-anwar01/vendorlink/tree/mobile',
      image: '/vendorlink.jpeg'
    },
    {
      title: 'Flavora : Food Ordering Application',
      description: 'Flavora is a full-stack Android food ordering platform developed using Kotlin and Firebase, featuring dedicated Customer and Admin applications. Customers can browse menus, place orders, track deliveries, and manage their profiles, while administrators can manage menu items, process orders, and monitor restaurant operations in real time. Built with Firebase Authentication, Realtime Database, Firebase Storage, Glide, and Material Design, the project demonstrates scalable architecture, seamless cloud synchronization, and an intuitive user experience.',
      tech: ['Kotlin', 'Android Studio', 'Firebase', 'Glide', 'Room Database', 'XML'],
      github: 'https://github.com/Ariifff/Flavora',
      image: '/flavora.jpeg'
    },
    {
      title: 'Lazzat : Smart Recipe Discovery App',
      description: 'Lazzat is an Android recipe discovery application that helps users prepare meals using ingredients already available in their pantry. Developed with Kotlin and the MVVM architecture, it integrates recipe APIs to provide personalized recommendations, detailed cooking instructions, and YouTube tutorial support. The app also includes pantry management, favorite recipes, and local data storage, showcasing modern Android development practices through Retrofit, Room Database, Coroutines, and a clean, user-friendly interface.',
      tech: ['Kotlin', 'MVVM', 'Retrofit', 'Coroutines', 'ViewBinding', 'Jetpack Compose'],
      github: 'https://github.com/Ariifff/Lazzat',
      image: '/lazzat.jpeg'
    },
    {
      title: 'PayVoice : Smart Payment Notification Assistant',
      description: "PayVoice is an intelligent Android app that audibly announces your UPI payment notifications. It supports multiple UPI platforms and speaks out the transaction amount using your preferred language and voice type (Male/Female). Designed with privacy and performance in mind, it runs quietly in the background while keeping all your data local.",
      tech: ['Kotlin', 'Android Studio', 'Room Database', 'Text-to-Speech (TTS)', 'SMS/Notification parsing'],
      github: 'https://github.com/Ariifff/PayVoice',
      image: '/payvoice.jpeg'
    }
  ];

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-title"><span className="chonky-underline-magenta has-hover-anim">04.</span> Featured Projects</h2>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.projectContent}>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={`${styles.projectDescription} glass`}>
                  <p>{project.description}</p>
                </div>

                <ul className={styles.projectTechList}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={styles.projectLinks}>
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer"><FiGithub /></a>
                </div>
              </div>

              <div className={styles.projectImage}>
                <div className={styles.imageWrapper}>
                  <AndroidPhone image={project.image} noRotation={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
