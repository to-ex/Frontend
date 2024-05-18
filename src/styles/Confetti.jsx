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
      particleCount: 70, // 조각 개수 설정
      spread: 100, // 퍼짐 정도 설정
      startVelocity: 60, // 초기 속도 설정
      ticks: 100, // 애니메이션 지속 시간 설정
      origin: { x: 0.5, y: 0.7 }, // 발사 위치 설정
      shapes: ["circle", "circle", "circle"], // 이미지 배열을 shapes로 설정
      gravity: 2, // 중력 설정
    };
  };

  return (
    <Fireworks
      autorun={{ speed: 0.5, duration: 3 }}
      style={canvasStyles}
      decorateOptions={decorateOptions} // 함수 실행을 위해 괄호를 추가
    />
  );
};

export default Confetti;
