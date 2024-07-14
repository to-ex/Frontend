import React from "react";
import { styled } from "styled-components";
import StepLine from "../../assets/images/StepLine.svg";
import VisaStepIcon01 from "../../assets/images/VisaStepIcon01.svg";
import VisaStepIcon02 from "../../assets/images/VisaStepIcon02.svg";
import ArrowUpRight from "../../assets/images/ArrowUpRight.svg";

const VisaStep = ({ country, url1, url2 }) => {
  return (
    <>
      <Container>
        <TitleArea>
          <MainTitle>한 눈에 보는 {country} 비자 신청!</MainTitle>
          <SmallTitle>
            비자 신청 어렵지 않게 단계별로 준비해보았어요!
          </SmallTitle>
        </TitleArea>
        <ContentBoxArea>
          <ContentBox>
            <BigText>입학허가서 준비</BigText>
            <SmallText>
              파견교로부터 받은 입학허가서를 {"\n"}준비해요!
            </SmallText>
            <BottomBox>
              <StepImg src={VisaStepIcon01} />
            </BottomBox>
          </ContentBox>

          <StepLineImg src={StepLine} />
          <ContentBox>
            <BigText>대사관 비자 신청 예약</BigText>
            <SmallText>
              아래 사이트에서 비자 인터뷰 일정을{"\n"}예약해요!
            </SmallText>
            <BottomBox>
              <Button>
                비자 신청 예약 사이트
                <ArrowUpRightImg src={ArrowUpRight} />
              </Button>
            </BottomBox>
          </ContentBox>

          <StepLineImg src={StepLine} />
          <ContentBox>
            <BigText>비자 서류 준비</BigText>
            <SmallText>비자 발급을 위한 서류를 준비해요!</SmallText>
            <BottomBox>
              <Button>
                구비 서류 체크리스트
                <ArrowUpRightImg src={ArrowUpRight} />
              </Button>
            </BottomBox>
          </ContentBox>

          <StepLineImg src={StepLine} />
          <ContentBox>
            <BigText>비자 신청 및 추후 수령</BigText>
            <SmallText>
              대사관에 방문하여 인터뷰를 진행하고,{"\n"}
              추후 발급 완료 시 방문 수령해요!
            </SmallText>
            <BottomBox>
              <StepImg src={VisaStepIcon02} />
            </BottomBox>
          </ContentBox>
        </ContentBoxArea>
      </Container>
    </>
  );
};

export default VisaStep;

const Container = styled.div`
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleArea = styled.div`
  width: 1395px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 57px;
  align-items: flex-start;
`;

const MainTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.BLACK};
`;

const SmallTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.RED04};
`;

const ContentBoxArea = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  width: 259px;
  height: 230px;
  padding: 30px 27px 18px 27px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY01};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const StepLineImg = styled.img``;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const SmallText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0 0 0;
  white-space: pre-line;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  margin-top: auto;
`;

const StepImg = styled.img`
  width: 120px;
  height: 123px;
  object-fit: contain;
`;

const Button = styled.button`
  width: 254px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  background-color: transparent;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.RED04};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 8px;
`;

const ArrowUpRightImg = styled.img`
  width: 24px;
  height: 24px;
`;
