import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Tab from "./Tab";

const TabBar = ({ tabs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          isActive={location.pathname === tab.url}
          onClick={() => navigate(tab.url)}
        >
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
