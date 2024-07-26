import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import TabBar from "./TabBar";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";

const Header = ({ isLogin, onLogout }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLogin) {
      onLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <BackGround>
      <Container>
        <LogoImg src={logo} alt="LogoImg" onClick={() => navigate("/")} />
        <MainTabBar>
          <TabBar
            tabs={[
              { id: 0, title: "비자", url: "/visa" },
              { id: 1, title: "어학", url: "/language" },
              { id: 2, title: "커뮤니티", url: "/community" },
              { id: 3, title: "캘린더", url: "/calendar" },
              {
                id: 4,
                title: "체크리스트",
                url: "/checklist",
              },
              {
                id: 5,
                title: "마이페이지",
                url: "/mypage",
              },
            ]}
          />
        </MainTabBar>
        <Tab color="GRAY" onClick={handleLogin}>
          {isLogin ? "로그아웃" : "로그인"}
        </Tab>
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
  position: fixed;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  margin: 12px 10%;
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
