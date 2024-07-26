import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ReactComponent as CalendarIcon } from "../assets/images/CalendarIcon.svg";
import { ReactComponent as Send } from "../assets/images/Send.svg";
import ScheduleCategoryDropDown from "./ScheduleCategoryDropDown";
import { AxiosCheckListPost } from "../api/AxiosCheckList";
import SelectCalendar from "./SelectCalendar";
import moment from "moment";
import "moment/locale/ko";

const AddModal = ({ $modalIsOpen, closeModal, CategoryTypes, onPost }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [category, setCategory] = useState("ETC");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const isDone = false;

  const formatStartDate =
    startDate && moment(startDate).locale("ko").format("M월 D일 (ddd)");
  const formatEndDate =
    endDate && moment(endDate).locale("ko").format("M월 D일 (ddd)");

  useEffect(() => {
    if ($modalIsOpen) {
      setDropdownIsOpen(false);
      setCalendarIsOpen(false);
    } else {
      setCategory("ETC");
      setStartDate("");
      setEndDate("");
      setTitle("");
    }
  }, [$modalIsOpen]);

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

  const handlePostCheckItem = async () => {
    try {
      const newEvent = {
        content: title,
        scheduleCategory: category,
        startDate: startDate,
        endDate: endDate,
        isDone: isDone,
      };
      onPost(newEvent);
      await AxiosCheckListPost(newEvent);
      closeModal();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

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
              placeholder="일정을 입력해주세요!"
              onChange={(e) => setTitle(e.target.value)}
            />
            <ModalTopBtnBox>
              <ModalTopBtn onClick={handlePostCheckItem}>
                <Send />
              </ModalTopBtn>
            </ModalTopBtnBox>
          </ModalTopBox>
          <ModalBottomBtnBox>
            <ModalBottomBtn onClick={handleSelectCalendar}>
              <CalendarIcon />
              <ModalText>
                {formatStartDate === ""
                  ? "날짜 설정하기 👀"
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
            category === "VISA" ? "비자" : category === "TEST" ? "어학" : "기타"
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

export default AddModal;

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
