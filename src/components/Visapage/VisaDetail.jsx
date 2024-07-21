import React from "react";
import { styled } from "styled-components";
import ArrowUpRight from "../../assets/images/ArrowUpRight.svg";
import { Visas } from "../../assets/Data/Visas";
import { useNavigate } from "react-router-dom";
const VisaDetail = ({ selcetedCountry }) => {
  const navigate = useNavigate();

  const visaInfo = Visas.find((visa) => visa.country === selcetedCountry);
  if (!visaInfo) {
    return <p>선택된 국가에 대한 정보가 없습니다.</p>;
  }

  const handleGoCheckList = () => {
    navigate("/checkList");
  };

  const parseTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <Link key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </Link>
      ) : (
        part
      )
    );
  };

  const {
    reservationImg,
    suppliesImg,
    reservationText,
    suppliesText,
    country,
  } = visaInfo;

  return (
    <>
      <Container>
        <TitleButtonBox>
          <Title>To.ex가 알려주는 자세한 비자 신청 가이드!</Title>
          <Button onClick={handleGoCheckList}>
            비자 준비 체크리스트
            <ArrowUpRightImg src={ArrowUpRight} />
          </Button>
        </TitleButtonBox>
        <ContentBoxArea>
          <ContentBox>
            <Img src={suppliesImg} />
            <GrayBox>
              <ImojiBigTextBox>
                <Imoji>📝</Imoji>
                <BigText>{country} 교환학생, 비자 준비 필수 준비물</BigText>
              </ImojiBigTextBox>
              <SmallTextBox>
                <SmallText>{suppliesText}</SmallText>
              </SmallTextBox>
            </GrayBox>
          </ContentBox>
          <ContentBox>
            <Img src={reservationImg} />
            <BigGrayBox>
              <ImojiBigTextBox>
                <Imoji>📌</Imoji>
                <BigText>{country} 교환학생, 비자 신청 이렇게 하세요!</BigText>
              </ImojiBigTextBox>
              <SmallTextBox>
                <SmallText>{parseTextWithLinks(reservationText)}</SmallText>
              </SmallTextBox>
            </BigGrayBox>
          </ContentBox>
        </ContentBoxArea>
      </Container>
    </>
  );
};

export default VisaDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const TitleButtonBox = styled.div`
  width: 1426px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 290px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  background-color: transparent;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.RED04};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;

const ArrowUpRightImg = styled.img`
  width: 24px;
  height: 24px;
`;

const ContentBoxArea = styled.div`
  display: flex;
  gap: 47px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 163px;
`;

const ContentBox = styled.div`
  width: 1332px;
  height: auto;
  padding: 39px 46px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY01};
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 36px;
`;

const Img = styled.img`
  width: 349px;
  height: 235px;
  object-fit: cover;
  border-radius: 12px;
`;

const GrayBox = styled.div`
  width: 892px;
  height: auto;
  border-radius: 20px;
  background-color: #f8f9fa;
  padding: 32px 0 27px 47px;
`;

const BigGrayBox = styled.div`
  width: 892px;
  height: 590px;
  border-radius: 20px;
  background-color: #f8f9fa;
  padding: 32px 0 27px 47px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Imoji = styled.p`
  font-size: 32px;
  margin: 0;
`;

const BigText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.BLACK};
  margin: 0;
`;

const ImojiBigTextBox = styled.div`
  display: flex;
  gap: 20px;
`;

const SmallTextBox = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const SmallText = styled.p`
  width: 95%;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #232323;
  margin-left: 52px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.RED03};

  &:hover {
    color: ${({ theme }) => theme.colors.RED04};
  }
  &:visited {
  }
  color: ${({ theme }) => theme.colors.RED03};
`;
