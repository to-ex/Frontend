import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import Category from "../assets/images/category.svg";
import TabBar from "./TabBar";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";

const Header = () => {
  const navigate = useNavigate();

  return (
    <BackGround>
      <Container>
        <LogoImg src={logo} alt="LogoImg" onClick={() => navigate("/")} />
        <MainTabBar>
          <TabBar
            tabs={[
              {
                id: 0,
                title: "학사",
                url: "/",
              },
              {
                id: 1,
                title: "어학",
                url: "/",
              },
              {
                id: 2,
                title: "커뮤니티",
                url: "/",
              },
              {
                id: 3,
                title: "캘린더",
                url: "/",
              },
              {
                id: 4,
                title: "체크리스트",
                url: "/",
              },
            ]}
          />
        </MainTabBar>
        <SideTabBar>
          <Tab color="GRAY" onClick={() => navigate("/")}>
            회원가입
          </Tab>
          <Tab color="GRAY" onClick={() => navigate("/")}>
            로그인
          </Tab>
          <CategoryImg
            src={Category}
            alt="CategoryImg"
            onClick={() => navigate("/")}
          />
        </SideTabBar>
      </Container>
    </BackGround>
  );
};

export default Header;
const BackGround = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  width: 100%;
  margin: 12px 192px;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 144px;
`;

const MainTabBar = styled.div`
  color: ${({ theme }) => theme.colors.RED02};
  display: flex;
  margin-left: 120px;
`;

const SideTabBar = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryImg = styled.img`
  width: 36px;
`;
