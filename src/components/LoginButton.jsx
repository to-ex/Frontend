import styled from "styled-components";
import kakaoLogo from "../assets/images/KakaoLogo.svg";
import naverLogo from "../assets/images/NaverLogo.svg";
import googleLogo from "../assets/images/GoogleLogo.svg";

const LoginButton = () => {
  const Companies = [
    {
      id: 0,
      title: "kakao",
      btnColor: "#FFE812",
      textColor: "#000",
      text: "카카오로 시작하기",
      img: kakaoLogo,
      imgSize: "25px",
    },
    {
      id: 1,
      title: "naver",
      btnColor: "#03C75A",
      textColor: "#FFF",
      text: "네이버로 시작하기",
      img: naverLogo,
      imgSize: "20px",
    },
    {
      id: 2,
      title: "google",
      btnColor: "#FFF",
      textColor: "#000",
      text: "구글로 시작하기",
      img: googleLogo,
      imgSize: "35px",
    },
  ];

  return (
    <>
      {Companies.map((company) => (
        <Button
          key={company.id}
          $btncolor={company.btnColor}
          $textcolor={company.textColor}
        >
          <LogoImg
            src={company.img}
            alt={company.title}
            $imgsize={company.imgSize}
          />
          {company.text}
        </Button>
      ))}
    </>
  );
};

export default LoginButton;

const Button = styled.button`
  width: 457px;
  height: 70px;
  border: ${({ $btncolor, theme }) =>
    $btncolor === "#FFF" ? `1px solid ${theme.colors.GRAY02}` : "none"};
  background-color: ${({ $btncolor }) => $btncolor};
  border-radius: 50px;
  color: ${({ $textcolor }) => $textcolor};
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 23px;
`;

const LogoImg = styled.img`
  width: ${({ $imgsize }) => $imgsize};
`;
