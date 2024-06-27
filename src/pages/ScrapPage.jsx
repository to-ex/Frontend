import styled from "styled-components";
import ContentBox from "../components/ContentBox";

const ScrapPage = () => {
  return (
    <Container>
      <MainTitle>스크랩</MainTitle>
      <ContentBox></ContentBox>
    </Container>
  );
};

export default ScrapPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  gap: 62px; // 여긴 추후 수정
`;

const MainTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
`;
