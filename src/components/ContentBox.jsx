import styled from "styled-components";
import Trashimg from "../assets/images/Trash.svg";
import EmptyHeart from "../assets/images/EmptyHeart.svg";
import FullHeart from "../assets/images/FullHeart.svg";
import Dummyimg from "../assets/images/dummy/Scrap01.svg";
import Comment from "../assets/images/ChatCircle.svg";
import { useState } from "react";

const ContentBox = () => {
  const [heart, setHeart] = useState(EmptyHeart);
  const [heartCount, setHeartCount] = useState(3);

  const toggleHeart = () => {
    setHeart((prevHeart) => {
      if (prevHeart === EmptyHeart) {
        setHeartCount(heartCount + 1);
        return FullHeart;
      } else {
        setHeartCount(heartCount - 1);
        return EmptyHeart;
      }
    });
  };

  return (
    <Container>
      <Top>
        <Title>
          <TitleText>스페인 교환학생 후기</TitleText>
          <TagBox>
            <TypeTag>#공유해요</TypeTag>
            <CountryTag>#스페인</CountryTag>
          </TagBox>
        </Title>
        <DeleteBtn>
          <img src={Trashimg} alt="Trash Icon" />
        </DeleteBtn>
      </Top>
      <Middle>
        <Content>
          <Text>
            스페인의 경우 1월말에서 2,3월까지는 꽤 쌀쌀해서 경량 패딩에 목도리를
            하고 안에는 목폴라를 껴입었던 것 같습니다.
            <br />
            그에 반해 여름에는 매우 덥고 햇빛이 정말 강합니다. 저의 경우 얼굴에
            일광화상까지 입었는데 썬크림을 잘 챙겨 바르셔야 합니다.
            <br /> 스페인의 집에는 대부분 에어컨이 없어서 집이 정말 더웠는데
            손선풍기로 경우 버텼던 것 같습니다. 탁상용 선풍기를 챙겨 가시는 걸
            강력 추천드립니다
          </Text>
        </Content>
        <ImgBox>
          <img src={Dummyimg} alt="Dummyimg" />
        </ImgBox>
      </Middle>
      <Bottom>
        <ReactionBox>
          <HeartIcon onClick={toggleHeart}>
            <img src={heart} alt="Heart Icon" />
          </HeartIcon>
          <HeartCount>{heartCount}</HeartCount>
          <CommentIcon>
            <img src={Comment} alt="Comment Icon" />
          </CommentIcon>
          <CommentCount>8</CommentCount>
        </ReactionBox>
        <Date>2024.05.07</Date>
      </Bottom>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 1496px;
  height: 404px;
  box-shadow: 0 0 10px #ebebeb;
  border-radius: 12px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  margin: 38px 0 0 48px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

const TypeTag = styled.div`
  width: 126px;
  height: 42px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.RED04};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
`;

const CountryTag = styled.div`
  width: 126px;
  height: 42px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.RED04};
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 54px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
`;

const Content = styled.div`
  width: 1029px;
  height: 103px;
  border: 1px solid #ffd0d8;
  border-radius: 12px;
  padding: 25px 22px;
  margin-left: 52px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ImgBox = styled.div`
  border-radius: 12px;
  margin-right: 48px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 52px;
  margin-top: 19px;
`;

const HeartIcon = styled.button`
  width: 26px;
  height: 26px;
  margin-bottom: 3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HeartCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
  margin-left: 10px;
`;

const CommentIcon = styled.div`
  width: 26px;
  height: 26px;
  margin-left: 15px;
`;

const CommentCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
  margin-left: 6px;
`;

const Date = styled.p`
  color: #adadad;
  font-size: 20px;
  font-weight: 500;
  margin-right: 57px;
`;
