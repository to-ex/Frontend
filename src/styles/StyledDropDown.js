import styled from "styled-components";

export const StyledSelectedLabel = styled.button`
  z-index: 10000 !important;
  width: 80px;
  height: 25px;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  position: fixed;
  margin-top: 1px;
  top: calc(50% + 10px);
  left: calc(50% - 223px);
  span {
    margin-top: 5px;
  }
`;

export const StyledSelectBox = styled.div`
  z-index: 10000 !important;
  width: 109px;
  height: auto;
  border-radius: 20px;
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #c3c3c3;
  box-shadow: 0px 3px 12px 0 rgba(00, 00, 00, 0.25);
  padding: 0;
  top: calc(50% + 47px);
  left: calc(50% - 240px);
  position: fixed;
`;

export const StyledOptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 20px;
`;

export const StyledOptionItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  width: calc(100% - 15px);
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  border-radius: ${(props) =>
    props.$index === 1
      ? "20px 20px 0 0"
      : props.$index === 3
      ? "0 0 20px 20px"
      : "0"};
  background-color: ${(props) => (props.$isSelected ? "#FFF5F7" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#FF244A" : "#000")};
  &:hover {
    background-color: #fff5f7;
    color: #ff244a;
  }
`;

export const StyledColorRound = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  margin-right: 12px;
`;
