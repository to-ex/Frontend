import React from "react";
import styled from "styled-components";
import { ReactComponent as BlankBoxIcon } from "../assets/images/BlankBox.svg";
import { ReactComponent as CheckBoxIcon } from "../assets/images/CheckBox.svg";

function TodoItem({ todo, onToggle }) {
  return (
    <ItemContainer>
      <CustomCheckbox
        $isDone={todo.isDone}
        onClick={() => onToggle(todo.scheduleId)}
      >
        {todo.isDone ? <CheckBoxIcon /> : <BlankBoxIcon />}
      </CustomCheckbox>
      <TodoText onClick={() => alert(`Details of: ${todo.content}`)}>
        {todo.content}
      </TodoText>
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
