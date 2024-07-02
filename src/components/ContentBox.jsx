import styled from "styled-components";
import Trashimg from "../assets/images/Trash.svg";
import EmptyHeart from "../assets/images/EmptyHeart.svg";
import FullHeart from "../assets/images/FullHeart.svg";
import Comment from "../assets/images/ChatCircle.svg";
import { useState } from "react";
import Modal from "../components/Modal";

const ContentBox = ({ dummyData, onDelete }) => {
  const {
    index,
    title,
    writer,
    typetag,
    countrytag,
    text,
    contentimg,
    ishearted,
    heartcount,
    commentcount,
    date,
    ismine,
  } = dummyData;

  const [heart, setHeart] = useState(ishearted);
  const [heartCount, setHeartCount] = useState(heartcount);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleHeart = () => {
    setHeart((prevHeart) => !prevHeart);
    setHeartCount((prevCount) => (heart ? prevCount - 1 : prevCount + 1));
  };

  const toggleModal = () => {
    setIsModalVisible((prevVisible) => !prevVisible);
  };

  return (
    <Container>
      <Top>
        <TitleTagBox>
          <Title>
            <TitleText>{title}</TitleText>
            <Bar>| </Bar>
            <Writer>{writer}</Writer>
          </Title>
          <TagBox>
            <TypeTag>#{typetag}</TypeTag>
            <CountryTag>#{countrytag}</CountryTag>
          </TagBox>
        </TitleTagBox>
        <DeleteBtn onClick={toggleModal}>
          <img src={Trashimg} alt="Trash Icon" />
        </DeleteBtn>
      </Top>
      <Middle>
        <Content>
          <Text>{text}</Text>
        </Content>
        <ImgBox>
          <ContentImg src={contentimg} alt={title} />
        </ImgBox>
      </Middle>
      <Bottom>
        <ReactionBox>
          <HeartIcon onClick={toggleHeart}>
            <img src={heart ? FullHeart : EmptyHeart} alt="Heart Icon" />
          </HeartIcon>
          <HeartCount>{heartCount}</HeartCount>
          <CommentIcon>
            <img src={Comment} alt="Comment Icon" />
          </CommentIcon>
          <CommentCount>{commentcount}</CommentCount>
        </ReactionBox>
        <Date>{date}</Date>
      </Bottom>
      {isModalVisible && (
        <Modal
          onConfirm={() => {
            onDelete(index);
            toggleModal();
          }}
          onCancel={toggleModal}
          msg="삭제하시겠습니까?"
          text1="아니요"
          text2="네"
        />
      )}
    </Container>
  );
};

export default ContentBox;

const Container = styled.div`
  width: 1496px;
  height: 410px;
  box-shadow: 0 0 10px #ebebeb;
  border-radius: 12px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleTagBox = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  margin: 38px 0 0 48px;
`;

const Title = styled.div`
  display: flex;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0 9px 0 0;
`;

const Bar = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.GRAY02};
  margin: 0 5px 0 0;
`;

const Writer = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.GRAY03};
  margin: 3px 0 0 0;
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
  cursor: pointer;
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
`;

const Content = styled.div`
  width: 1029px;
  height: 103px;
  background-color: #f8f9fa;
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
  white-space: pre-wrap;
`;

const ImgBox = styled.div`
  margin-right: 48px;
`;

const ContentImg = styled.img`
  width: 267px;
  height: 155px;
  border-radius: 12px;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  margin: 19px 0 0 52px;
  padding: 0;
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
