import '@react95/core/GlobalStyle'
import '@react95/core/themes/win95.css'
import '@react95/icons/icons.css'
import { TaskBar, List, Modal, useModal, TitleBar } from '@react95/core'
import { Progman35, Progman11, HelpBook, Progman9 } from '@react95/icons'

const MODAL_IDS = {
  about: 'about',
  experience: 'experience',
  education: 'education',
  projects: 'projects',
}

const MODAL_WIDTH = '1000px'
const MODAL_HEIGHT = '800px'

const DEFAULT_CENTER_POSITION = {
  x: window.innerWidth / 2 - 500,
  y: window.innerHeight / 2 - 400,
}

function App() {
  const { add, remove, minimize, restore, focus } = useModal()

  const handleOpenModal = (id: string, title: string, icon: JSX.Element) => {
    add({
      id,
      title,
      icon,
      hasButton: true,
    })
    restore(id)
    focus(id)
  }

  const handleCloseModal = (id: string) => {
    minimize(id)
    remove(id)
  }

  const handleMinimizeModal = (id: string) => {
    minimize(id)
    focus('no-id')
  }

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          background: 'teal',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Desktop Icons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'flex-start',
          }}
        >
          <DesktopIcon
            icon={<Progman35 variant="32x32_4" />}
            label="About Me"
            onClick={() => handleOpenModal(MODAL_IDS.about, 'About Me', <Progman35 variant="32x32_4" />)}
          />
          <DesktopIcon
            icon={<Progman11 variant="32x32_4" />}
            label="Experience"
            onClick={() => handleOpenModal(MODAL_IDS.experience, 'Experience', <Progman11 variant="32x32_4" />)}
          />
          <DesktopIcon
            icon={<HelpBook variant="32x32_4" />}
            label="Education"
            onClick={() => handleOpenModal(MODAL_IDS.education, 'Education', <HelpBook variant="32x32_4" />)}
          />
          <DesktopIcon
            icon={<Progman9 variant="32x32_4" />}
            label="Projects"
            onClick={() => handleOpenModal(MODAL_IDS.projects, 'Projects', <Progman9 variant="32x32_4" />)}
          />
        </div>

        {/* Modals */}
        <Modal
          id={MODAL_IDS.about}
          icon={<Progman35 variant="32x32_4" />}
          title="About Me"
          titleBarOptions={[
            <Modal.Minimize key="minimize" onClick={() => handleMinimizeModal(MODAL_IDS.about)} />,
            <TitleBar.Close key="close" onClick={() => handleCloseModal(MODAL_IDS.about)} />,
          ]}
          width={MODAL_WIDTH}
          height={MODAL_HEIGHT}
          dragOptions={{ defaultPosition: DEFAULT_CENTER_POSITION }}
        >
          <div style={{ padding: '20px' }}>
            <h3>About Me</h3>
            <p>Hi! I'm a developer passionate about creating unique web experiences.</p>
            <p>Skills: React, TypeScript, Web Development</p>
          </div>
        </Modal>

        <Modal
          id={MODAL_IDS.experience}
          icon={<Progman11 variant="32x32_4" />}
          title="Experience"
          titleBarOptions={[
            <Modal.Minimize key="minimize" onClick={() => handleMinimizeModal(MODAL_IDS.experience)} />,
            <TitleBar.Close key="close" onClick={() => handleCloseModal(MODAL_IDS.experience)} />,
          ]}
          width={MODAL_WIDTH}
          height={MODAL_HEIGHT}
          dragOptions={{ defaultPosition: DEFAULT_CENTER_POSITION }}
        >
          <div style={{ padding: '20px' }}>
            <h3>Work Experience</h3>
            <p>💼 Job Title - Company (2020-Present)</p>
            <p>💼 Job Title - Company (2018-2020)</p>
          </div>
        </Modal>

        <Modal
          id={MODAL_IDS.education}
          icon={<HelpBook variant="32x32_4" />}
          title="Education"
          titleBarOptions={[
            <Modal.Minimize key="minimize" onClick={() => handleMinimizeModal(MODAL_IDS.education)} />,
            <TitleBar.Close key="close" onClick={() => handleCloseModal(MODAL_IDS.education)} />,
          ]}
          width={MODAL_WIDTH}
          height={MODAL_HEIGHT}
          dragOptions={{ defaultPosition: DEFAULT_CENTER_POSITION }}
        >
          <div style={{ padding: '20px' }}>
            <h3>Education</h3>
            <p>🎓 Bachelor's Degree - University Name (2014-2018)</p>
            <p>📚 Certifications and Courses</p>
          </div>
        </Modal>

        <Modal
          id={MODAL_IDS.projects}
          icon={<Progman9 variant="32x32_4" />}
          title="Projects"
          titleBarOptions={[
            <Modal.Minimize key="minimize" onClick={() => handleMinimizeModal(MODAL_IDS.projects)} />,
            <TitleBar.Close key="close" onClick={() => handleCloseModal(MODAL_IDS.projects)} />,
          ]}
          width={MODAL_WIDTH}
          height={MODAL_HEIGHT}
          dragOptions={{ defaultPosition: DEFAULT_CENTER_POSITION }}
        >
          <div style={{ padding: '20px' }}>
            <h3>My Projects</h3>
            <p>🚀 Project 1 - Description</p>
            <p>🚀 Project 2 - Description</p>
            <p>🚀 Project 3 - Description</p>
          </div>
        </Modal>
      </div>

      {/* Taskbar */}
      <TaskBar
        list={
          <List>
            <List.Item>Programs</List.Item>
            <List.Item>Documents</List.Item>
            <List.Divider />
            <List.Item>Shut Down...</List.Item>
          </List>
        }
      />
    </>
  )
}

// Desktop Icon Component
function DesktopIcon({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        width: '80px',
        textAlign: 'center',
      }}
    >
      {icon}
      <span
        style={{
          color: 'white',
          textShadow: '1px 1px 2px black',
          fontSize: '12px',
          marginTop: '4px',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default App
