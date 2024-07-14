import React from "react";
import { styled } from "styled-components";

const CircleBtn = ({ flag, country }) => {
  return (
    <>
      <Circle>
        <Flag>{flag}</Flag>
        <Country>{country}</Country>
      </Circle>
    </>
  );
};

export default CircleBtn;

const Circle = styled.button`
  width: 215px;
  height: 215px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY01};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 0 0 10px #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.GRAY02};
  &:active {
    border: solid 1px ${({ theme }) => theme.colors.RED03};
    background-color: #fff4f6;
    color: ${({ theme }) => theme.colors.RED04};
    box-shadow: 0;
  }
`;

const Flag = styled.p`
  font-size: 35px;
  line-height: 0;
`;

const Country = styled.p`
  font-size: 24px;
  margin-top: 10px;
  font-weight: 600;
  line-height: 0;
`;
