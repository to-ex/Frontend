import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";

const TabBar = ({ tabs }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id} onClick={() => navigate(tab.url)}>
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
};

export default TabBar;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
