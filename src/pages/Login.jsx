import styled from "styled-components";
import Logo from "../assets/images/Logo.svg";
import LoginButton from "../components/LoginButton";

const Login = () => {
  return (
    <BackGround>
      <Container>
        <LogoImg src={Logo} alt="LogoImg" />
        <Text>
          <b>로그인</b>이 <br />
          필요한 서비스에요!
        </Text>
        <LineBox>
          <Line />
          <p>로그인 / 회원가입</p>
          <Line />
        </LineBox>
        <LoginButton />
      </Container>
    </BackGround>
  );
};

export default Login;

const BackGround = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 144px;
`;

const Text = styled.p`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-top: 14px;
`;

const LineBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.GRAY02};
  margin: 15px 0 55px 0;
`;

const Line = styled.div`
  width: 177px;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY02};
  margin-top: 30px;
`;
