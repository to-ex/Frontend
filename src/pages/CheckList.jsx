import styled from "styled-components";
import TodoList from "../components/TodoList";
import { ReactComponent as Blue } from "../assets/images/BlueCircle.svg";
import { ReactComponent as Yellow } from "../assets/images/YellowCircle.svg";
import { ReactComponent as Purple } from "../assets/images/PurpleCircle.svg";
import { ReactComponent as Green } from "../assets/images/GreenCircle.svg";

const initialData = [
  {
    createdDt: "2024-07-24T19:01:01.548447",
    updatedDt: "2024-07-24T19:01:01.548447",
    deletedDt: null,
    delYn: "N",
    scheduleId: 37,
    scheduleCategory: "TEST",
    content: "토플 시험",
    isDone: false,
    userId: 13,
    startDate: "2024-07-03",
    endDate: "2024-07-11",
    type: "CALENDAR",
  },
  {
    createdDt: "2024-07-24T19:02:26.656638",
    updatedDt: "2024-07-24T19:02:26.656638",
    deletedDt: null,
    delYn: "N",
    scheduleId: 39,
    scheduleCategory: "ETC",
    content: "하이",
    isDone: false,
    userId: 13,
    startDate: null,
    endDate: null,
    type: "CHECKLIST",
  },
  {
    createdDt: "2024-07-24T19:02:55.569951",
    updatedDt: "2024-07-24T19:02:55.569951",
    deletedDt: null,
    delYn: "N",
    scheduleId: 40,
    scheduleCategory: "VISA",
    content: "체크리스트체크",
    isDone: false,
    userId: 13,
    startDate: null,
    endDate: null,
    type: "CHECKLIST",
  },
  {
    createdDt: "2024-07-24T19:48:17.049502",
    updatedDt: "2024-07-24T19:48:17.049502",
    deletedDt: null,
    delYn: "N",
    scheduleId: 41,
    scheduleCategory: "VISA",
    content: "캘린더",
    isDone: false,
    userId: 13,
    startDate: "2024-07-07",
    endDate: "2024-07-07",
    type: "CALENDAR",
  },
  {
    createdDt: "2024-07-24T19:48:46.012314",
    updatedDt: "2024-07-24T19:48:46.012314",
    deletedDt: null,
    delYn: "N",
    scheduleId: 43,
    scheduleCategory: "VISA",
    content: "캘린더",
    isDone: false,
    userId: 13,
    startDate: "2024-07-21",
    endDate: "2024-07-22",
    type: "CALENDAR",
  },
  {
    createdDt: "2024-07-24T19:49:00.199618",
    updatedDt: "2024-07-24T19:49:00.199618",
    deletedDt: null,
    delYn: "N",
    scheduleId: 44,
    scheduleCategory: "ETC",
    content: "캘린더",
    isDone: false,
    userId: 13,
    startDate: "2024-07-30",
    endDate: "2024-07-30",
    type: "CALENDAR",
  },
];

const filteredData = initialData.filter((item) => item.type === "CHECKLIST");

const CheckList = () => {
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
