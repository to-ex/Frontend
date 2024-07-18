import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ReactComponent as CalendarIcon } from "../assets/images/CalendarIcon.svg";
import { ReactComponent as Trash } from "../assets/images/Trash.svg";
import { ReactComponent as Send } from "../assets/images/Send.svg";
import ScheduleCategoryDropDown from "./ScheduleCategoryDropDown";

const CustomModal = ({
  $modalIsOpen,
  closeModal,
  selectedEvent,
  formatStartDate,
  formatEndDate,
  CategoryTypes,
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  useEffect(() => {
    if ($modalIsOpen) {
      setDropdownIsOpen(false);
    }
  }, [$modalIsOpen]);

  return (
    <>
      <Modal
        isOpen={$modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Modal"
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
        {selectedEvent && (
          <>
            <ModalLeftBox>
              <ModalTopBox>
                <ModalTitle defaultValue={selectedEvent.content}></ModalTitle>
                <ModalTopBtnBox>
                  <ModalTopBtn>
                    <Trash />
                  </ModalTopBtn>
                  <ModalTopBtn onClick={closeModal}>
                    <Send />
                  </ModalTopBtn>
                </ModalTopBtnBox>
              </ModalTopBox>
              <ModalBottomBtnBox>
                <ModalBottomBtn>
                  <CalendarIcon />
                  <ModalText>
                    {formatStartDate !== formatEndDate
                      ? formatStartDate + " - " + formatEndDate
                      : formatStartDate}
                  </ModalText>
                </ModalBottomBtn>
              </ModalBottomBtnBox>
            </ModalLeftBox>
          </>
        )}
      </Modal>
      {$modalIsOpen && (
        <ScheduleCategoryDropDown
          isOpen={dropdownIsOpen}
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
`;

const ModalBottomBtnBox = styled.div`
  width: 100%;
  display: flex;
  gap: 36px;
`;

const ModalBottomBtn = styled.button`
  width: auto;
  height: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: 100px;
`;

const ModalText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 2px 0 0 13px;
`;
