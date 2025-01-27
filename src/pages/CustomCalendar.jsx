import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as NextIcon } from "../assets/images/NextMonth.svg";
import { ReactComponent as PrevIcon } from "../assets/images/PrevMonth.svg";
import moment from "moment";
import {
  StyledCalendarWrapper,
  StyledScheduleLine,
} from "../styles/StyledCalrendar";
import CustomModal from "../components/CustomModal";
import { AxiosCalendarGet } from "../api/AxiosCalendar";

const CustomCalendar = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  console.log(modalIsOpen);
  const Tabs = [
    {
      index: 0,
      name: "전체",
      scheduleCategory: "ALL",
      oncolor: "#FFAEBD",
      offcolor: "rgba(255, 174, 189, 0.7)",
    },
    {
      index: 1,
      name: "비자",
      scheduleCategory: "VISA",
      oncolor: "#D2AEFF",
      offcolor: "rgba(210, 174, 255, 0.3)",
    },
    {
      index: 2,
      name: "어학",
      scheduleCategory: "TEST",
      oncolor: "#FFCA63",
      offcolor: "rgba(255, 202, 99, 0.3)",
    },
    {
      index: 3,
      name: "기타",
      scheduleCategory: "ETC",
      oncolor: "#63E3FF",
      offcolor: "rgba(99, 227, 255, 0.3)",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await AxiosCalendarGet();
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab.scheduleCategory);
  };

  const handleEventClick = (event) => {
    console.log("모달");
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (deletedEventId) => {
    setEvents(events.filter((event) => event.scheduleId !== deletedEventId));
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.scheduleId === updatedEvent.scheduleId ? updatedEvent : event
      )
    );
  };

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
        moment(event.endDate),
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
        calendarType="gregory"
        minDetail="month"
        maxDetail="month"
        tileContent={({ date, view }) => {
          let html = [];
          const dayEvents = getEventsForDate(date);
          dayEvents.forEach((event, index) => {
            const momentDate = moment(
              date,
              "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (한국 표준시)"
            ).format("YYYY-MM-DD");

            const isStartDate = event.startDate === momentDate;
            const isEndDate = event.endDate === momentDate;
            const isEqualDate = event.endDate === event.startDate;

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
                style={{ top: `${(index + 1) * 45}px` }}
                $isStartDate={isStartDate}
                $isEndDate={isEndDate}
                $isEqualDate={isEqualDate}
                onClick={() => handleEventClick(event)}
              >
                {event.startDate === momentDate ? event.content : null}
              </StyledScheduleLine>
            );
          });
          return <>{html}</>;
        }}
      />
      <CustomModal
        $modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        CategoryTypes={Tabs}
        onDelete={handleDeleteEvent}
        onUpdate={handleUpdateEvent}
      />
    </StyledCalendarWrapper>
  );
};

export default CustomCalendar;

const TabBar = styled.div`
  position: absolute;
  top: 167px;
  width: 100%;
  z-index: 1;
  display: flex;
  gap: 23px;
  justify-content: center;
  margin-top: 30px;
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
  margin-top: 360px;
  position: absolute;
  top: 10px;
  box-shadow: 0 -4px 10px 0 rgba(00, 00, 00, 0.1);
`;
