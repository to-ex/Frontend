import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ReactComponent as CalendarIcon } from "../assets/images/CalendarIcon.svg";
import { ReactComponent as Trash } from "../assets/images/Trash.svg";
import { ReactComponent as Send } from "../assets/images/Send.svg";
import ScheduleCategoryDropDown from "./ScheduleCategoryDropDown";
import { AxiosCalendarDelete, AxiosCalendarUpdate } from "../api/AxiosCalendar";
import SelectCalendar from "./SelectCalendar";
import moment from "moment";
import "moment/locale/ko";
const CustomModal = ({
  $modalIsOpen,
  closeModal,
  selectedEvent,

  onDelete,
  onUpdate,
  setSelectedEvent,
}) => {
  const CategoryTypes = [
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

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [category, setCategory] = useState(
    selectedEvent ? selectedEvent.scheduleCategory : ""
  );
  const [startDate, setStartDate] = useState(
    selectedEvent ? selectedEvent.startDate : ""
  );
  const [endDate, setEndDate] = useState(
    selectedEvent ? selectedEvent.endDate : ""
  );
  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.content : ""
  );
  const [isDone, setIsDone] = useState(
    selectedEvent ? selectedEvent.isDone : false
  );

  const formatStartDate =
    selectedEvent && moment(startDate).locale("ko").format("M월 D일 (ddd)");
  const formatEndDate =
    selectedEvent && moment(endDate).locale("ko").format("M월 D일 (ddd)");

  useEffect(() => {
    if ($modalIsOpen && selectedEvent) {
      setDropdownIsOpen(false);
      setCalendarIsOpen(false);
      setTitle(selectedEvent.content || "");
      setStartDate(selectedEvent.startDate || "");
      setEndDate(selectedEvent.endDate || "");
      setCategory(selectedEvent.scheduleCategory || "");
      setIsDone(selectedEvent.isDone || false);
    } else {
      setSelectedEvent(null);
    }
  }, [$modalIsOpen, selectedEvent, setSelectedEvent]);

  const handleSelectCalendar = () => {
    setCalendarIsOpen(!calendarIsOpen);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleCategoryChange = (selectedCategory) => {
    selectedCategory =
      selectedCategory === "비자"
        ? "VISA"
        : selectedCategory === "어학"
        ? "TEST"
        : "ETC";
    console.log(selectedCategory);
    setCategory(selectedCategory);
  };

  const handleDeleteSchedule = async () => {
    if (!selectedEvent) {
      console.error("No selected event to delete");
      return;
    }

    try {
      await AxiosCalendarDelete(selectedEvent.scheduleId);
      onDelete(selectedEvent.scheduleId);
      closeModal();
      alert("삭제 되었습니다!");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUpdateSchedule = async () => {
    if (!selectedEvent) {
      console.error("No selected event to update");
      return;
    }

    try {
      const updatedEvent = {
        ...selectedEvent,
        content: title,
        scheduleCategory: category,
        startDate: startDate,
        endDate: endDate,
        isDone: isDone,
      };

      await AxiosCalendarUpdate(selectedEvent.scheduleId, updatedEvent);
      onUpdate(updatedEvent);
      closeModal();
      alert("수정 되었습니다!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (!selectedEvent) return null;

  return (
    <>
      <Modal
        isOpen={$modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(54, 55, 58, 0.7)",
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "437px",
            height: "68px",
            padding: "25px 37px 26px 28px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <ModalLeftBox>
          <ModalTopBox>
            <ModalTitle
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ModalTopBtnBox>
              <ModalTopBtn onClick={handleDeleteSchedule}>
                <Trash />
              </ModalTopBtn>
              <ModalTopBtn onClick={handleUpdateSchedule}>
                <Send />
              </ModalTopBtn>
            </ModalTopBtnBox>
          </ModalTopBox>
          <ModalBottomBtnBox>
            <ModalBottomBtn onClick={handleSelectCalendar}>
              <CalendarIcon />
              <ModalText>
                {formatStartDate === "Invalid date"
                  ? "날짜를 설정하지 않았어요!"
                  : formatStartDate !== formatEndDate
                  ? `${formatStartDate} - ${formatEndDate}`
                  : formatStartDate}
              </ModalText>
            </ModalBottomBtn>
          </ModalBottomBtnBox>
        </ModalLeftBox>
      </Modal>
      {$modalIsOpen && (
        <ScheduleCategoryDropDown
          isOpen={dropdownIsOpen}
          onCategoryChange={handleCategoryChange}
          list={CategoryTypes}
          selected={
            selectedEvent.scheduleCategory === "VISA"
              ? "비자"
              : selectedEvent.scheduleCategory === "TEST"
              ? "어학"
              : "기타"
          }
        />
      )}
      {$modalIsOpen && calendarIsOpen && (
        <SelectCalendar
          calendarIsOpen={calendarIsOpen}
          onDateChange={handleDateChange}
        />
      )}
    </>
  );
};

export default CustomModal;

const ModalLeftBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ModalTopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ModalTitle = styled.input`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
  border: none;
  outline: none;
`;
const ModalTopBtnBox = styled.div`
  display: flex;
  gap: 16px;
`;
const ModalTopBtn = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  z-index: 100000 !important;
`;
const ModalBottomBtnBox = styled.div`
  width: 100%;
  display: flex;
  gap: 36px;
`;
const ModalBottomBtn = styled.button`
  width: 300px;
  height: 27px;
  background-color: transparent;
  border: none;
  display: flex;
  margin: 15px 0 0 100px;
`;
const ModalText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 0 0 13px;
`;
