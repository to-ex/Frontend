import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BlankBoxIcon } from "../assets/images/BlankBox.svg";
import { ReactComponent as CheckBoxIcon } from "../assets/images/CheckBox.svg";
import CustomModal from "./CustomModal";

function TodoItem({ todo, onToggle }) {
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleItemClick = () => {
    setModalIsOpen(true);
    setSelectedEvent(todo);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <ItemContainer>
      <CustomCheckbox
        $isDone={todo.isDone}
        onClick={() => onToggle(todo.scheduleId)}
      >
        {todo.isDone ? <CheckBoxIcon /> : <BlankBoxIcon />}
      </CustomCheckbox>
      <TodoText onClick={handleItemClick}>{todo.content}</TodoText>
      <CustomModal
        $modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        CategoryTypes={Tabs}
        // onDelete={handleDeleteEvent}
        // onUpdate={handleUpdateEvent} // Pass this prop to handle updates
      />
    </ItemContainer>
  );
}

export default TodoItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
  color: #232323;

  &:hover {
    text-decoration: underline;
  }
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
