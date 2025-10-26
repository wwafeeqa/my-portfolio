// utils/getOpenModals.js
export const getOpenModals = ({
    showReadMe,
    showMusic,
    showSynth,
    showMap,
    showProjects,
    showConnect,
  }) => {
    const modals = [];
    if (showReadMe) modals.push('ReadMe');
    if (showMusic) modals.push('Music');
    if (showSynth) modals.push('Synth');
    if (showMap) modals.push('Map');
    if (showProjects) modals.push('Projects');
    if (showConnect) modals.push('Connect');
    return modals;
  };
  export default getOpenModals;
  