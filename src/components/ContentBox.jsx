import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../assets/images/Trash.svg";
import { ReactComponent as EmptyHeart } from "../assets/images/EmptyHeart.svg";
import { ReactComponent as FullHeart } from "../assets/images/FullHeart.svg";
import { ReactComponent as Comment } from "../assets/images/ChatCircle.svg";
import { ReactComponent as WriteIcon } from "../assets/images/Write.svg";
import { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ContentBox = ({ data = {}, onDelete }) => {
  const navigate = useNavigate();

  const {
    boardId,
    title,
    author,
    boardCategory,
    countryTag,
    text,
    imgUrl,
    isLiked,
    heartcount,
    comments,
    createdDt,
    ismine,
  } = data;
  const date = moment(createdDt).format("YYYY-MM-DD");
  const [heart, setHeart] = useState(isLiked);
  const [heartCount, setHeartCount] = useState(heartcount);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleHeart = () => {
    setHeart((prevHeart) => !prevHeart);
    setHeartCount((prevCount) => (heart ? prevCount - 1 : prevCount + 1));
  };

  const toggleModal = () => {
    setIsModalVisible((prevVisible) => !prevVisible);
  };

  const handlegopost = () => {
    ismine
      ? navigate(`/WriteMe/:${boardId}`)
      : navigate(`/WriteOthers/:${boardId}`);
  };

  const handlegowrite = () => {
    navigate("/post");
  };

  const handleDelete = () => {
    onDelete(boardId);
    toggleModal();
  };

  return (
    <Container onClick={handlegopost}>
      <Top>
        <TitleTagBox>
          <Title>
            <TitleText>{title}</TitleText>
            <Bar>| </Bar>
            <Author>{author}</Author>
          </Title>
          <TagBox>
            <BoardCategory>
              #
              {boardCategory === "QUESTION"
                ? " 질문 있어요"
                : boardCategory === "SHARE"
                ? " 공유해요"
                : " 떠들어요"}
            </BoardCategory>
            <CountryTag>
              #
              {countryTag === "SPAIN"
                ? " 스페인"
                : countryTag === "GERMANY"
                ? " 독일"
                : countryTag === "ENGLAND"
                ? " 영국"
                : countryTag === "FRANCE"
                ? " 프랑스"
                : " 이탈리아"}
            </CountryTag>
          </TagBox>
        </TitleTagBox>
        {ismine && (
          <TopIconBtnBox>
            <WriteBtn onClick={handlegowrite}>
              <WriteIcon />
            </WriteBtn>
            <DeleteBtn onClick={toggleModal}>
              <TrashIcon />
            </DeleteBtn>
          </TopIconBtnBox>
        )}
      </Top>
      <Middle>
        <Content>
          <Text>{text}</Text>
        </Content>
        <ImgBox>
          <ContentImg src={imgUrl} alt={title} />
        </ImgBox>
      </Middle>
      <Bottom>
        <ReactionBox>
          <HeartIcon onClick={toggleHeart}>
            {heart ? <FullHeart /> : <EmptyHeart />}
          </HeartIcon>
          <HeartCount>{heartCount}</HeartCount>
          <CommentIcon>
            <Comment />
          </CommentIcon>
          <CommentCount>{comments}</CommentCount>
        </ReactionBox>
        <Date>{date}</Date>
      </Bottom>
      {isModalVisible && (
        <Modal
          onConfirm={handleDelete}
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

const Author = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.GRAY03};
  margin: 3px 0 0 0;
`;

const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

const BoardCategory = styled.div`
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

const TopIconBtnBox = styled.div`
  display: flex;
  gap: 16px;
  margin: 40px 58px 0 0;
`;

const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-top: 3px;
  background-color: transparent;
  border: none;
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
  z-index: 10;
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
