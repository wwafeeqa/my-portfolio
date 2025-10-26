// components/ReadMeWindow.js
import React, { useState, useEffect } from 'react';
import { List, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';
import styles from './window.module.css';

const ReadMeWindow = ({ onClose, position }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [mounted, setMounted] = useState(false);
  const fullText = "Hi, I'm Wafeeqa!";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [mounted]);

  return (
    <div className={styles.modalWrapper}>
      <Modal
        closeModal={onClose}
        style={{
          width: '700px',
          height: '500px',
          left: position.x,
          top: position.y,
          maxWidth: '90%',
          maxHeight: '80%',
          overflow: 'auto',
          zIndex: 1000,
        }}
        icon={<Notepad variant="16x16_4" />}
        title="README.md"
        menu={[
          {
            name: 'Options',
            list: (
              <List width="200px">
                <List.Item onClick={onClose}>Close</List.Item>
              </List>
            ),
          },
        ]}
      >
        <div className={styles.readmeContent}>
          <div className={styles.profileSection}>
            <img
              src="/me.jpg"
              alt="Wafeeqa Chowdhury"
              className={styles.profilePicture}
            />
            <div className={styles.profileText}>
              <h2 className={styles.profileName}>
                {mounted && displayedText}
                {mounted && displayedText.length < fullText.length && (
                  <span className={styles.cursor}>|</span>
                )}
              </h2>
              <p className={styles.profileTitle}>
                Software Engineer based in{' '}
                <a
                  href="https://www.worldatlas.com/cities/toronto-canada.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Toronto
                </a>
              </p>
            </div>
          </div>

          <div className={styles.textContent}>
            <p>I'm currently:</p>
            <p className={styles.indent}>
              {'>'} studying computer science at{' '}
              <img src="/queens_university.png" alt="Queen's University" className={styles.companyLogo} />
              <a
                href="https://www.queensu.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Queen's University
              </a>
            </p>
            <p className={styles.indent}>
              {'>'} interning at{' '}
              <img src="/rbc.jpeg" alt="RBC" className={styles.companyLogo} />
              <a
                href="https://www.rbc.com/about-rbc.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                RBC
              </a>
              {' '}as a software engineer working on NodeJS applications used for Global IT Risk Reporting
            </p>
            <p className={styles.indent}>
              {'>'} heading to{' '}
              <img src="/uci.png" alt="UC Irvine" className={styles.companyLogo} />
              <a
                href="https://uci.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                UC Irvine
              </a>
              {' '}for exchange in January 2026
            </p>

            <p style={{ marginTop: '16px' }}>This website was built in Next.js with the React95 component library.</p>
            <p>Here, you can learn more about me.</p>

            <p style={{ marginTop: '16px' }}>Feel free to explore and reach out!</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReadMeWindow;
