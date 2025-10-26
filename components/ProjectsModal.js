import React from 'react';
import { List, Modal, Button } from '@react95/core';
import { Folder } from '@react95/icons';
import styles from './window.module.css';

// Project data structure
const projectsData = {
  Hackathons: [
    {
      name: 'Lights, Camera, Auction',
      description: 'A minimalist, real-time silent auction website with 3D objects and live updates',
      link: 'https://github.com/Saahil-Gupta/Lights-Camera-Auction',
    },
    {
      name: 'Trojo',
      description: 'Bringing you the perspective of a cyber security professional in your pocket',
      link: 'https://github.com/ChloeHouvardas/trojo',
    },
  ],
  Personal: [
    {
      name: 'Pomodoro Timer',
      description: 'Boosting productivity with hard-earned breaks',
      link: 'https://wwafeeqa.github.io/pomodoro-timer-app/',
    },
    {
      name: 'Co-Habit',
      description: 'Choresharing app to avoid passive-aggressive messages from the roommate group chat',
    },
    {
      name: 'tail0r',
      description: 'LLM tool to auto-tailor your resume based on job descriptions',
    },
  ],
  QWEB: [
    {
      name: 'qweb.dev',
      description: "Leading the refresh of QWeb's website with a team of 3 developers",
      link: 'https://qweb.dev',
    },
    {
      name: 'Client Website Deployment',
      description: 'Handling deployment and hosting for 5+ client websites',
      link: 'https://github.com/queens-web-development-club',
    },
    {
      name: 'Education Tutorials',
      description: 'Contributing to code for weekly tutorials on MongoDB, JavaScript and React',
      link: 'https://github.com/queens-web-development-club/education25',
    },
  ],
  QSC: [
    {
      name: 'Cache Pricing Intelligence',
      description: 'Python web scraping API querying 4 resale marketplaces to help users instantly value their wardrobe',
      links: [
        'https://cacheinyourcloset.com/',
        'https://www.linkedin.com/posts/queens-startup-consulting_recently-queens-startup-consulting-worked-activity-7356501481497243648-rT-O/',
      ],
    },
    {
      name: 'Trucking Data ETL Pipeline',
      description: 'Flask REST API querying 2.2M trucking records, reducing supply chain M&A due diligence from hours to 30-second queries',
    },
  ],
};

// Folder configuration
const folders = [
  { id: 'Hackathons', label: 'Hackathons' },
  { id: 'Personal', label: 'Personal\nProjects' },
  { id: 'QWEB', label: 'Queens\nWeb Dev' },
  { id: 'QSC', label: 'Queens\nStartup\nConsulting' },
];

const ProjectsModal = ({
  onClose,
  selectProject,
  currentProject,
  position,
}) => {
  // Render a single project item
  const renderProjectItem = (project, index) => {
    const hasLinks = project.link || project.links;

    const itemStyle = {
      padding: '12px',
      ...(hasLinks && { cursor: 'pointer' }),
    };

    const handleClick = () => {
      if (project.links) {
        // Open multiple links - must be synchronous to avoid popup blockers
        const [firstLink, ...otherLinks] = project.links;
        window.open(firstLink, '_blank');
        otherLinks.forEach(link => {
          window.open(link, '_blank');
        });
      } else if (project.link) {
        // Open single link
        window.open(project.link, '_blank')?.focus();
      }
    };

    return (
      <List.Item key={index} onClick={hasLinks ? handleClick : undefined} style={itemStyle}>
        <div>
          <strong style={{ marginLeft: '8px' }}>{project.name}</strong>
          <div style={{ fontSize: '11px', color: '#888', marginTop: '8px', lineHeight: '1.5', marginLeft: '8px' }}>
            {project.description}
          </div>
        </div>
      </List.Item>
    );
  };

  // Render project list for a category
  const renderProjectList = (category) => (
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
        {projectsData[category].map((project, index) => renderProjectItem(project, index))}
      </List>
    </div>
  );

  // Render folder grid
  const renderFolderGrid = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginTop: '10px',
        padding: '0 20px',
      }}
    >
      {folders.map((folder) => (
        <div
          key={folder.id}
          onClick={() => selectProject(folder.id)}
          className={styles.projectFolder}
        >
          <Folder variant="32x32_4" />
          <p style={{ margin: '4px 0', fontSize: '12px', whiteSpace: 'pre-line' }}>
            {folder.label}
          </p>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    if (currentProject && projectsData[currentProject]) {
      return renderProjectList(currentProject);
    }
    return renderFolderGrid();
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
