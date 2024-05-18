import React from "react";
import Confetti from "../components/Confetti";
import styled from "styled-components";

const LoginSuccess = () => {
  return (
    <>
      <Confetti />
      <TextBox>
        <Text>
          <RedText>김퓨처</RedText>
          님,
          <br />
          환영합니다!
        </Text>
      </TextBox>
    </>
  );
};

export default LoginSuccess;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 72px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.BLACK};
  margin: 0;
  text-align: center;
`;

const RedText = styled.span`
  font-size: 72px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.RED04};
  margin: 0;
`;
