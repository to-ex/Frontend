import React from "react";
import { styled } from "styled-components";
import ArrowUpRight from "../../assets/images/ArrowUpRight.svg";
import VisaSpain01 from "../../assets/images/VisaSpain01.svg";

const VisaDetail = () => {
  return (
    <>
      <Container>
        <TitleButtonBox>
          <Title>To.ex가 알려주는 자세한 비자 신청 가이드 !</Title>
          <Button>
            비자 준비 체크리스트
            <ArrowUpRightImg src={ArrowUpRight} />
          </Button>
        </TitleButtonBox>
        <ContentBoxArea>
          <ContentBox>
            <Img src={VisaSpain01} />
            <GrayBox>
              <ImojiBigTextBox>
                <Imoji>📌</Imoji>
                <BigText>스페인 교환학생, 비자 신청 이렇게 하세요!</BigText>
              </ImojiBigTextBox>
              <SmallText>
                1. 서류 준비가 전혀 안 되어 있어도 대사관 예약부터!{"\n"}
                2. 금융 관련 서류(자금 증명서)는 인터뷰 날 5일 이내의 것만 유효
                {"\n"}
                3. 재정 보증서와 재학 증명서는 공증사무소에서 공증 → 아포스티유
                순서로!{"\n"}
                4. 스페인 거주지 증명서는 취소 가능한 호텔로!
              </SmallText>
            </GrayBox>
          </ContentBox>
          <ContentBox>
            <Img src={VisaSpain01} />
            <GrayBox>
              <ImojiBigTextBox>
                <Imoji>📝</Imoji>
                <BigText>스페인 교환학생, 비자 준비 필수 준비물</BigText>
              </ImojiBigTextBox>
              <SmallTextBox>
                <SmallText>
                  비자 신청서, 사진, 여권, 스페인 거주지 증명서, 입학 허가서
                  원본,
                  {"\n"}
                  여행자보험증서, 자금증명서 등 비자 준비 필수 준비물은 꼭
                  준비해주세요!
                </SmallText>
              </SmallTextBox>
            </GrayBox>
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
`;

const ContentBox = styled.div`
  width: 1332px;
  height: 234px;
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
  object-fit: contain;
`;

const GrayBox = styled.div`
  width: 892px;
  height: 176px;
  border-radius: 20px;
  background-color: #f8f9fa;
  padding: 32px 0 27px 47px;
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
  width: 680px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallText = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #232323;
  white-space: pre-line;
  margin-left: 52px;
`;
