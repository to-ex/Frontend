import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ReactComponent as BigStepLine } from "../assets/images/BigStepLine.svg";
import { ReactComponent as YellowTab } from "../assets/images/YellowTab.svg";
import { ReactComponent as BlueTab } from "../assets/images/BlueTab.svg";
import { ReactComponent as BlankListIcon } from "../assets/images/BlankListIcon.svg";
import { AxiosCheckListDone } from "../api/AxiosCheckList";
import CustomModal from "./CustomModal";
import AddModal from "./AddModal";

function TodoList({ data, callback }) {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(null);

  useEffect(() => {
    setTodos(data);
    callback(data);
  }, [data, callback]);

  const handleToggle = async (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.scheduleId === id) {
        const updatedTodo = { ...todo, isDone: !todo.isDone };
        AxiosCheckListDone(id)
          .then((response) => {
            console.log("Status updated:", response.data);
          })
          .catch((error) => {
            console.error("Failed to update status:", error);
          });
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUpdateTodo(null);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const handleDelete = (deletedEventId) => {
    setTodos(todos.filter((event) => event.scheduleId !== deletedEventId));
  };

  const handleUpdate = (updatedEvent) => {
    setTodos(
      todos.map((event) =>
        event.scheduleId === updatedEvent.scheduleId ? updatedEvent : event
      )
    );
  };

  const onPost = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoContainer>
        <ListContainer>
          <Tab color="#fffbdd">
            <YellowTab />
            To Do
          </Tab>
          <ListBox>
            <ItemBox>
              {todos
                .filter((todo) => !todo.isDone)
                .map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                ))}
            </ItemBox>
            <AddButton onClick={() => setAddModalIsOpen(true)}>
              To Do 추가하기 +
            </AddButton>
          </ListBox>
        </ListContainer>
        <BigStepLine />
        <ListContainer>
          <Tab color="#E6F5FF">
            <BlueTab />
            Done
          </Tab>
          <ListBox>
            {todos.filter((todo) => todo.isDone).length === 0 ? (
              <BlankListContainer>
                <BlankListIcon />
                <BlankText>
                  아직 완료된 일정이 없어요💧
                  <br />
                  To Do 일정을 추가해보세요!
                </BlankText>
              </BlankListContainer>
            ) : (
              <ItemBox>
                {todos
                  .filter((todo) => todo.isDone)
                  .map((todo, index) => (
                    <TodoItem
                      key={index}
                      todo={todo}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                      onUpdate={handleUpdate}
                    />
                  ))}
              </ItemBox>
            )}
          </ListBox>
        </ListContainer>
      </TodoContainer>
      <CustomModal
        $modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedEvent={updateTodo}
        setSelectedEvent={setUpdateTodo}
      />
      <AddModal
        $modalIsOpen={addModalIsOpen}
        closeModal={closeAddModal}
        onPost={onPost}
      />
    </>
  );
}

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 59px;
  gap: 34px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  width: 186px;
  height: 30px;
  border-radius: 30px 30px 0 0;
  background-color: ${(props) => props.color};
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 16px 22px;
  margin-left: 30px;
`;

const ListBox = styled.div`
  width: 384px;
  height: 468px;
  background-color: white;
  padding: 63px 57px 71px 52px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.GRAY01};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AddButton = styled.button`
  width: 384px;
  height: 61px;
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  color: ${({ theme }) => theme.colors.GRAY01};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.RED04};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;

const BlankListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const BlankText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY02};
  white-space: pre-wrap;
`;
