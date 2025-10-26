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
              <List.Item>Project 1 - Coming Soon</List.Item>
              <List.Item>Project 2 - Coming Soon</List.Item>
              <List.Item>Project 3 - Coming Soon</List.Item>
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
              <List.Item>Project 1 - Coming Soon</List.Item>
              <List.Item>Project 2 - Coming Soon</List.Item>
              <List.Item>Project 3 - Coming Soon</List.Item>
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
              <List.Item>Project 1 - Coming Soon</List.Item>
              <List.Item>Project 2 - Coming Soon</List.Item>
              <List.Item>Project 3 - Coming Soon</List.Item>
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
              <List.Item>Project 1 - Coming Soon</List.Item>
              <List.Item>Project 2 - Coming Soon</List.Item>
              <List.Item>Project 3 - Coming Soon</List.Item>
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
        width: '400px',
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
