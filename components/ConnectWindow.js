// components/ConnectWindow.js
import React, { useState } from 'react';
import { List, Modal } from '@react95/core';
import { Mail, Inetcpl1313, Cachevu100, Msacm3210, Notepad, Msnsign100, Progman19, Winhlp324001 } from '@react95/icons';
import styles from './window.module.css';

const ConnectWindow = ({ onClose, position }) => {
  const [copied, setCopied] = useState(false);

  const contacts = [
    {
      icon: <Mail variant="32x32_4" />,
      label: 'Email',
      value: 'wafeeqarashid@gmail.com',
      copyable: true,
    },
    {
      icon: <Inetcpl1313 variant="32x32_4" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/wafeeqa-c',
      link: 'https://linkedin.com/in/wafeeqa-c',
    },
    {
      icon: <Cachevu100 variant="32x32_4" />,
      label: 'GitHub',
      value: 'github.com/wwafeeqa',
      link: 'https://github.com/wwafeeqa',
    },
    {
      icon: <Msacm3210 variant="32x32_4" />,
      label: 'Last.fm',
      value: 'last.fm/user/wafeeqa',
      link: 'https://www.last.fm/user/wafeeqa',
    },
    {
      icon: <Progman19 variant="32x32_4" />,
      label: 'Letterboxd',
      value: 'letterboxd.com/wafeeqa',
      link: 'https://letterboxd.com/wafeeqa/',
    },
    {
      icon: <Winhlp324001 variant="32x32_4" />,
      label: 'Goodreads',
      value: 'goodreads.com/wafeeqa',
      link: 'https://www.goodreads.com/user/show/194779761-wafeeqa',
    },
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('wafeeqarashid@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      closeModal={onClose}
      style={{
        width: '500px',
        height: '550px',
        left: position.x,
        top: position.y,
        maxWidth: '90%',
        maxHeight: '80%',
        overflow: 'auto',
        zIndex: 1000,
      }}
      icon={<Msnsign100 variant="32x32_4" />}
      title="Let's Connect"
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
      <div
        style={{
          padding: '32px',
          backgroundColor: '#1e1e1e',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '24px', color: '#ffffff' }}>
            Let's Connect!
          </h2>
          <p style={{ margin: 0, fontSize: '14px', color: '#a0a0a0' }}>
            I'd love to hear from you! Click any icon below to get in touch.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {contacts.map((contact, index) => {
            const CardWrapper = contact.link ? 'a' : 'div';
            const cardProps = contact.link
              ? {
                  href: contact.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px',
                  backgroundColor: '#252525',
                  border: '1px solid #3a3a3a',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 200ms ease',
                  cursor: contact.link ? 'pointer' : 'default',
                  position: 'relative',
                }}
                className={contact.link ? styles.contactCard : ''}
              >
                <div style={{ minWidth: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {contact.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#a0a0a0', fontWeight: 500, marginBottom: '4px' }}>
                    {contact.label}
                  </div>
                  <div style={{ fontSize: '16px', color: '#d4d4d4' }}>
                    {contact.value}
                  </div>
                </div>
                {contact.copyable && (
                  <div
                    onClick={handleCopyEmail}
                    style={{
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 200ms ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Notepad variant="32x32_4" />
                    {copied && (
                      <span style={{ fontSize: '12px', color: '#4a9eff', marginLeft: '8px' }}>
                        Copied!
                      </span>
                    )}
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWindow;
