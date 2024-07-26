import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { ReactComponent as Blue } from "../assets/images/BlueCircle.svg";
import { ReactComponent as Yellow } from "../assets/images/YellowCircle.svg";
import { ReactComponent as Purple } from "../assets/images/PurpleCircle.svg";
import { ReactComponent as Green } from "../assets/images/GreenCircle.svg";
import { AxiosCheckListGet } from "../api/AxiosCheckList";

const CheckList = () => {
  const [events, setEvents] = useState([]);
  const fetchData = async () => {
    try {
      const response = await AxiosCheckListGet();
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = events.filter((item) => item.type === "CHECKLIST");

  return (
    <Background>
      <YellowCircle />
      <BlueCircle />
      <GreenCircle />
      <PurpleCircle />
      <TextBox>
        <BlackText>교환학생 준비 A to Z</BlackText>
        <RedText>체크리스트를 사용해 보다 더 편리하게 준비해보세요!</RedText>
      </TextBox>
      <TodoList data={filteredData} />
    </Background>
  );
};

export default CheckList;

const Background = styled.div`
  width: 100%;
  height: 1103px;
  display: flex;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const BlueCircle = styled(Blue)`
  position: absolute;
  z-index: -10;
  top: 10%;
  left: 60%;
`;
const GreenCircle = styled(Green)`
  position: absolute;
  bottom: 0%;
  left: 20%;
  z-index: -10;
`;
const YellowCircle = styled(Yellow)`
  position: absolute;
  top: 10%;
  left: 0%;
  z-index: -10;
`;
const PurpleCircle = styled(Purple)`
  position: absolute;
  bottom: 10%;
  right: 0%;
  z-index: -10;
`;

const TextBox = styled.div`
  width: 1379px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 6px;
  margin-top: 169px;
`;

const BlackText = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.BLACK};
  margin: 0;
`;
const RedText = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.RED04};
  margin: 0;
`;
