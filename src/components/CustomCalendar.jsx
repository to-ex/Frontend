import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as NextIcon } from "../assets/images/NextMonth.svg";
import { ReactComponent as PrevIcon } from "../assets/images/PrevMonth.svg";
import moment from "moment";
import {
  StyledCalendarWrapper,
  // StyledScheduleLine,
} from "../styles/StyledCalrendar";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CustomCalendar = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  console.log(selectedEvent);

  const Tabs = [
    {
      index: 0,
      name: "전체",
      scheduleCategory: "ALL",
      oncolor: "#FFAEBD",
      offcolor: "rgba(255, 174, 189, 0.7)",
      url: "/calendar",
    },
    {
      index: 1,
      name: "비자",
      scheduleCategory: "VISA",
      oncolor: "#D2AEFF",
      offcolor: "rgba(210, 174, 255, 0.3)",
      url: "/calendar",
    },
    {
      index: 2,
      name: "어학",
      scheduleCategory: "TEST",
      oncolor: "#FFCA63",
      offcolor: "rgba(255, 202, 99, 0.3)",
      url: "/calendar",
    },
    {
      index: 3,
      name: "기타",
      scheduleCategory: "ETC",
      oncolor: "#63E3FF",
      offcolor: "rgba(99, 227, 255, 0.3)",
      url: "/calendar",
    },
  ];

  // 임시 데이터
  const data = [
    {
      scheduleId: 8,
      scheduleCategory: "VISA",
      content: "비자 인터뷰 예약",
      isDone: false,
      userId: 3486609159,
      startDate: "2024-07-01",
      endDate: "2024-07-15",
      type: "CALENDAR",
    },
    {
      scheduleId: 9,
      scheduleCategory: "TEST",
      content: "어학 시험 준비",
      isDone: true,
      userId: 3486609159,
      startDate: "2024-07-01",
      endDate: "2024-07-15",
      type: "CALENDAR",
    },
    {
      scheduleId: 10,
      scheduleCategory: "VISA",
      content: "Update Schedule",
      isDone: true,
      userId: 3486609159,
      startDate: null,
      endDate: null,
      type: "CHECKLIST",
    },
    {
      scheduleId: 11,
      scheduleCategory: "VISA",
      content: "Update Schedule",
      isDone: true,
      userId: 3486609159,
      startDate: null,
      endDate: null,
      type: "CHECKLIST",
    },
  ];

  useEffect(() => {
    // 데이터를 받아와서 상태로 설정
    setEvents(data);
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab.scheduleCategory);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
    console.log("눌리긴 함");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  // 선택된 탭에 따라 필터링된 데이터를 반환
  const getFilteredEvents = () => {
    if (selectedTab === "ALL") {
      return events.filter((event) => event.type === "CALENDAR");
    }
    return events.filter(
      (event) =>
        event.type === "CALENDAR" && event.scheduleCategory === selectedTab
    );
  };

  const filteredEvents = getFilteredEvents();

  const getEventsForDate = (date) => {
    return filteredEvents.filter((event) =>
      moment(date).isBetween(
        moment(event.startDate),
        moment(event.startDate),
        null,
        "[]"
      )
    );
  };

  return (
    <StyledCalendarWrapper>
      <TabBar>
        {Tabs.map((tab) => (
          <Tab
            key={tab.index}
            color={
              selectedTab === tab.scheduleCategory ? tab.oncolor : tab.offcolor
            }
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
          </Tab>
        ))}
      </TabBar>
      <Container></Container>
      <Calendar
        formatMonthYear={(locale, date) =>
          date.toLocaleString("ko", { month: "numeric" })
        }
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        prevLabel={<PrevIcon />}
        nextLabel={<NextIcon />}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        calendarType="gregory" // 일요일부터 시작
        minDetail="month"
        maxDetail="month"
        tileContent={({ date, view }) => {
          let html = [];
          const dayEvents = getEventsForDate(date);
          dayEvents.forEach((event, index) => {
            html.push(
              <StyledScheduleLine
                key={event.scheduleId}
                color={
                  event.scheduleCategory === "VISA"
                    ? "#D2AEFF"
                    : event.scheduleCategory === "TEST"
                    ? "#FFCA63"
                    : "#63E3FF"
                }
                style={{ top: `${(index + 1) * 45}px` }} // 이벤트 간격 조정 및 높이 설정
                onClick={() => handleEventClick(event)}
              >
                {event.content}
              </StyledScheduleLine>
            );
          });
          return <>{html}</>;
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "504px",
            height: "121px",
            // padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {selectedEvent && (
          <>
            <ModalTitle value={selectedEvent.content}></ModalTitle>
            <p>Category: {selectedEvent.scheduleCategory}</p>
            <p>
              Date: {selectedEvent.startDate} - {selectedEvent.endDate}
            </p>
            <button onClick={closeModal}>Close</button>
          </>
        )}
      </Modal>
    </StyledCalendarWrapper>
  );
};

export default CustomCalendar;
const ModalTitle = styled.input`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
  border: none;
`;

const TabBar = styled.div`
  position: absolute;
  top: 167px; /* 네비게이션 바로 아래에 위치하도록 조정 */
  width: 100%;
  z-index: 1;
  display: flex;
  gap: 23px;
  justify-content: center;
`;

const Tab = styled.button`
  width: 99px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const Container = styled.div`
  width: 100%;
  height: 1230px;
  background-color: transparent;
  border-radius: 60px 60px 0 0;
  margin-top: 270px;
  position: absolute;
  top: 10px;
  box-shadow: 0 -4px 10px 0 rgba(00, 00, 00, 0.1);
`;

const StyledScheduleLine = styled.div`
  background-color: ${(props) => props.color};
  width: 196px;
  height: 39px;
  border-radius: 50px;
  position: absolute;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
