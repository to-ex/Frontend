import styled from "styled-components";

const Tab = ({ children, color, isActive, onClick }) => {
  return (
    <Button color={color} $isActive={isActive} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Tab;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme, color, $isActive }) =>
    $isActive
      ? theme.colors.RED04
      : color === "GRAY"
      ? theme.colors.GRAY02
      : theme.colors.BLACK};
  font-size: 20px;
  border: none;
  margin: 10px 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.RED04};
    font-size: 22px;
  }
`;
