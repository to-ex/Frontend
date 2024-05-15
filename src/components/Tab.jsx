import styled from "styled-components";

const Tab = ({ children, color }) => {
  return <Button color={color}>{children}</Button>;
};

export default Tab;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme, color }) =>
    color === "GRAY" ? theme.colors.GRAY02 : theme.colors.BLACK};
  font-size: 20px;
  border: none;
  margin: 10px 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.RED04};
  }
`;
