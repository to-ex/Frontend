import React from "react";
import { styled } from "styled-components";
import CircleBtn from "../CircleBtn";
import { Visas } from "../../assets/Data/Visas";

const VisaCategory = () => {
  return (
    <>
      <Container>
        <TextArea>
          <MainText>비자 신청 방법</MainText>
          <SmallText>원하는 국가 클릭 후 지금 바로 확인해보세요!</SmallText>
        </TextArea>
        <BtnArea>
          {Visas.map((Visa) => (
            <CircleBtn
              key={Visa.index}
              flag={Visa.icon}
              country={Visa.country}
            />
          ))}
        </BtnArea>
      </Container>
    </>
  );
};

export default VisaCategory;

const Container = styled.div`
  width: 100%;
  background-color: #fffdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 106px 0 113px 0;
`;

const TextArea = styled.div`
  width: 1395px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 57px;
  align-items: flex-start;
`;

const MainText = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.BLACK};
`;

const SmallText = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.RED04};
`;

const BtnArea = styled.div`
  display: flex;
  gap: 80px;
`;
