import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const Confetti = () => {
  const canvasStyles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  };

  const decorateOptions = () => {
    return {
      particleCount: 70,
      spread: 100,
      startVelocity: 60,
      ticks: 100,
      origin: { x: 0.5, y: 0.7 },
      shapes: ["circle", "circle", "circle"],
      gravity: 2,
    };
  };

  return (
    <Fireworks
      autorun={{ speed: 0.5, duration: 3 }}
      style={canvasStyles}
      decorateOptions={decorateOptions}
    />
  );
};

export default Confetti;
