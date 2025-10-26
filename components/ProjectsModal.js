import React from 'react';
import { List, Modal, Button } from '@react95/core';
import { Folder, Wmsui321001, Defrag } from '@react95/icons';

const ProjectsModal = ({
  onClose,
  selectProject,
  currentProject,
  position,
}) => {
  const renderContent = () => {
    switch (currentProject) {
      case 'Hackathons':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
              padding: '0 10px',
            }}
          >
            <List width="100%">
              <List.Item
                onClick={() => window.open('https://github.com/Saahil-Gupta/Lights-Camera-Auction', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Lights, Camera, Auction</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  A minimalist, real-time silent auction website with 3D objects and live updates
                </div>
              </List.Item>
              <List.Item
                onClick={() => window.open('https://github.com/ChloeHouvardas/trojo', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Trojo</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Bringing you the perspective of a cyber security professional in your pocket
                </div>
              </List.Item>
            </List>
          </div>
        );
      case 'Personal':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
              padding: '0 10px',
            }}
          >
            <List width="100%">
              <List.Item
                onClick={() => window.open('https://wwafeeqa.github.io/pomodoro-timer-app/', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Pomodoro Timer</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Boosting productivity with hard-earned breaks
                </div>
              </List.Item>
              <List.Item>
                <strong>Co-Habit</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Choresharing app to avoid passive-aggressive messages from the roommate group chat
                </div>
              </List.Item>
              <List.Item>
                <strong>tail0r</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  LLM tool to auto-tailor your resume based on job descriptions
                </div>
              </List.Item>
            </List>
          </div>
        );
      case 'QWEB':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
              padding: '0 10px',
            }}
          >
            <List width="100%">
              <List.Item
                onClick={() => window.open('https://qweb.dev', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>qweb.dev</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Leading the refresh of QWeb's website with a team of 3 developers
                </div>
              </List.Item>
              <List.Item
                onClick={() => window.open('https://github.com/queens-web-development-club', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Client Website Deployment</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Handling deployment and hosting for 5+ client websites
                </div>
              </List.Item>
              <List.Item
                onClick={() => window.open('https://github.com/queens-web-development-club/education25', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Education Tutorials</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Contributing to code for weekly tutorials on MongoDB, JavaScript and React
                </div>
              </List.Item>
            </List>
          </div>
        );
      case 'QSC':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
              padding: '0 10px',
            }}
          >
            <List width="100%">
              <List.Item
                onClick={() => window.open('https://cacheinyourcloset.com/', '_blank')?.focus()}
                style={{ cursor: 'pointer' }}
              >
                <strong>Cache Pricing Intelligence</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Python web scraping API querying 4 resale marketplaces to help users instantly value their wardrobe
                </div>
              </List.Item>
              <List.Item>
                <strong>Trucking Data ETL Pipeline</strong>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                  Flask REST API querying 2.2M trucking records, reducing supply chain M&A due diligence from hours to 30-second queries
                </div>
              </List.Item>
            </List>
          </div>
        );
      default:
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginTop: '10px',
              padding: '0 20px',
            }}
          >
            <div onClick={() => selectProject('Hackathons')} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Folder variant="32x32_4"/>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                Hackathons
              </p>
            </div>
            <div onClick={() => selectProject('Personal')} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Folder variant="32x32_4"/>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                Personal<br />Projects
              </p>
            </div>
            <div onClick={() => selectProject('QWEB')} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Folder variant="32x32_4"/>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                Queens<br />Web Dev
              </p>
            </div>
            <div onClick={() => selectProject('QSC')} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Folder variant="32x32_4"/>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                Queens<br />Startup<br />Consulting
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <Modal
      closeModal={onClose}
      style={{
        width: currentProject ? '600px' : '400px',
        height: '350px',
        left: position.x,
        top: position.y,
        maxWidth: '90%',
        maxHeight: '80%',
        overflow: 'auto',
        zIndex: 1000,
      }}
      icon={<Folder variant="16x16_4" />}
      title="MyProjects"
      menu={[
        {
          name: 'Options',
          list: (
            <List width="200px">
              <List.Item onClick={onClose}>Close</List.Item>
              {currentProject && <List.Item onClick={() => selectProject(null)}>Back</List.Item>}
            </List>
          ),
        }
      ]}
    >
      {renderContent()}
      {currentProject && (
        <Button
          style={{ position: 'absolute', bottom: '10px', right: '10px' }}
          onClick={() => selectProject(null)}
        >
          Back
        </Button>
      )}
    </Modal>
  );
};

export default ProjectsModal;
