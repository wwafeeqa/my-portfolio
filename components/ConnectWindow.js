// components/ConnectWindow.js
import React, { useState } from 'react';
import { List, Modal } from '@react95/core';
import { Mail } from '@react95/icons';
import styles from './window.module.css';

const ConnectWindow = ({ onClose, position }) => {
  const initialText = `Let's Connect!

I'd love to hear from you! Here's where you can find me:

Email: wafeeqarashid@gmail.com  

LinkedIn: linkedin.com/in/wafeeqa-c

GitHub: github.com/wwafeeqa

Feel free to reach out for collaborations, opportunities, or just to say hi!

Looking forward to connecting with you.`;

  const [text, setText] = useState(initialText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Modal
      closeModal={onClose}
      style={{
        width: '700px',
        height: '450px',
        left: position.x,
        top: position.y,
        maxWidth: '90%',
        maxHeight: '80%',
        overflow: 'auto',
        zIndex: 1000,
      }}
      icon={<Mail variant="16x16_4" />}
      title="Let's Connect.txt"
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
      <textarea
        className={styles.windowTextarea}
        value={text}
        onChange={handleTextChange}
      />
    </Modal>
  );
};

export default ConnectWindow;
