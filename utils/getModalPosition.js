// utils/getModalPosition.js
const getModalPosition = (modalType, width, height) => {
  // Provide default values for SSR
  const safeWidth = width || 1024;
  const safeHeight = height || 768;

  const modalWidth = 300;
  const modalHeight = 200;

  const positions = {
    ReadMe: {
      x: Math.max((safeWidth - modalWidth) / 2, 10), // Centered horizontally
      y: 50, // Fixed vertical position
    },
    Music: {
      x: 50, // Fixed horizontal position
      y: 100, // Fixed vertical position
    },
    Synth: {
      x: safeWidth - modalWidth - 300, // Fixed to the right
      y: 70,
    },
    Map: {
      x: safeWidth - modalWidth - 1100,
      y: 170
    },
    Projects: {
      x: Math.max((safeWidth - 500) / 2, 10), // Centered horizontally (accounting for max width of 600px)
      y: 80, // Near top of screen
    },
    Connect: {
      x: Math.max((safeWidth - modalWidth) / 2 + 100, 10),
      y: 120
    }
  };

  // Adjust for mobile view if necessary
  if (safeWidth < 600) {
    return {
      x: Math.max((safeWidth - modalWidth) / 2, 10),
      y: 50 + (positions[modalType]?.y || 0),
    };
  }

  return positions[modalType] || {
    x: Math.max((safeWidth - modalWidth) / 2, 10),
    y: Math.max((safeHeight - modalHeight) / 2, 10),
  };
};

export default getModalPosition;
