// components/ReadMeWindow.js
import React, { useState } from 'react';
import { List, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';

const ReadMeWindow = ({ onClose, position }) => {
  const initialText = `Hi, I'm Wafeeqa!

I'm a software engineer based in Toronto.

I'm currently:
> studying computer science at Queen's University
> interning at RBC as a software engineer working on NodeJS applications used for Global IT Risk Reporting

This website was built in Next.js with the React95 component library.
Here, you can find some apps I've built.

Feel free to explore and reach out!`;

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
      icon={<Notepad variant="16x16_4" />}
      title="README.txt"
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
        style={{
          width: '100%',
          height: '100%',
          resize: 'none',
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
          fontSize: '16px',
          lineHeight: '1.6',
          padding: '16px',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          outline: 'none'
        }}
        value={text}
        onChange={handleTextChange}
      />
    </Modal>
  );
};

export default ReadMeWindow;
