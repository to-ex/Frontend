// 커뮤니티 페이지 배경 애니메이션 컴포넌트
import React from 'react';
import styled, { keyframes } from 'styled-components';

const move1 = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(200px, -200px); }
  50% { transform: translate(-200px, 200px); }
  75% { transform: translate(200px, 200px); }
  100% { transform: translate(0, 0); }
`;

const move2 = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-300px, 100px); }
  50% { transform: translate(300px, -100px); }
  75% { transform: translate(-300px, -300px); }
  100% { transform: translate(0, 0); }
`;

const move3 = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, 300px); }
  50% { transform: translate(-100px, -300px); }
  75% { transform: translate(300px, -300px); }
  100% { transform: translate(0, 0); }
`;

const move4 = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-200px, -200px); }
  50% { transform: translate(200px, 200px); }
  75% { transform: translate(-200px, 200px); }
  100% { transform: translate(0, 0); }
`;

const Circle1 = styled.div`
  width: 536px;
  height: 536px;
  background: radial-gradient(circle, rgba(255, 214, 1, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 20%;
  animation: ${move1} 15s infinite alternate;
`;

const Circle2 = styled.div`
  width: 622px;
  height: 622px;
  background: radial-gradient(circle, rgba(204, 1, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 60%;
  animation: ${move2} 20s infinite alternate;
`;

const Circle3 = styled.div`
  width: 434px;
  height: 434px;
  background: radial-gradient(circle, rgba(1, 225, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 40%;
  animation: ${move3} 18s infinite alternate;
`;

const Circle4 = styled.div`
  width: 488px;
  height: 488px;
  background: radial-gradient(circle, rgba(1, 255, 57, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 70%;
  left: 10%;
  animation: ${move4} 22s infinite alternate;
`;

const BackgroundAnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  overflow: hidden;
  z-index: 1;
`;

const BackgroundAnimation = () => (
  <BackgroundAnimationWrapper>
    <Circle1 />
    <Circle2 />
    <Circle3 />
    <Circle4 />
  </BackgroundAnimationWrapper>
);

export default BackgroundAnimation;
