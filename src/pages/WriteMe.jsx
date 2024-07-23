import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from "../styles/Theme";
import { ReactComponent as Trashimg } from "../assets/images/Trash.svg";
import { ReactComponent as EmptyHeart } from "../assets/images/EmptyHeart.svg";
import { ReactComponent as FullHeart } from "../assets/images/FullHeart.svg";
import { ReactComponent as Comment } from "../assets/images/ChatCircle.svg";
import { ReactComponent as Write } from "../assets/images/Write.svg";
import { ReactComponent as SendIcon } from "../assets/images/Send.svg";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../components/Header";

const Container = styled.div`
  width: 1920px;
  height: 980px;
  padding-top: 88px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-top: 90px;
  margin-bottom: 50px;
`;

const ContentBoxWrapper = styled.div`
  width: 1669px;
  height: 951px;
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 70px 110px;
  box-sizing: border-box;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 72px;
  height: 72px;
  margin-right: 17px;
`;

const Avatar2 = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 27px;
  margin-left: 41px;
`;

const Avatar3 = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 27px;
  margin-left: 41px;
  position: absolute;
  left: -1px;
  top: 15px;
`;

const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const PostDate = styled.div`
  color: #ADADAD;
  font-size: 20px;
  padding-top: 5px;
`;

const Middle = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  background-color: #f8f9fa;
  width: 1427px;
  height: 374px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 44px 51px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 3px;
  justify-content: space-between;
`;

const TagBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const TypeTag = styled.div`
  width: 147px;
  height: 44px;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  border-radius: 30px;
  font-size: 18px;
  text-align: center;
  margin-write: 15px;
  font-weight: 600;
`;

const CountryTag = styled.div`
  width: 147px;
  height: 44px;
  line-height: 44px;
  background-color: ${({ theme }) => theme.colors.RED04};
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  border-radius: 30px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

const TopIconBtnBox = styled.div`
  width: 103px;
  display: flex;
  gap: 16px;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Text = styled.p`
  width: 999px;
  height: 157px;
  font-size: 20px;
  line-height: 1.5;
  white-space: pre-wrap;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  text-align: left;
  box-sizing: border-box;
  padding: 25px 20px;
  margin-top: 30px;
  `;
  
const ImgBox = styled.div`
  text-align: right;
  margin-left: 39px;
  margin-top: 30px;
`;

const ContentImg = styled.img`
  width: 267px;
  height: 157px;
  border-radius: 12px;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 33px;
`;

const ReactionBox = styled.div`
  display: flex;
  align-items: center;
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

const Comments = styled.div`
  margin-top: 18px;
  margin-bottom: 40px;
`;

const CommentBox = styled.div`
  display: flex;
  margin-top: 18px;
  margin-bottom: 18px; 
`;

const CommentUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const CommentDetails = styled.div`
  display: flex;
  gap: 12px;
  line-height: 25px;
`;

const CommentInfo = styled.div`
  flex-direction: column;
`;

const CommentUserName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const CommentDate = styled.div`
  color: #ADADAD;
  font-size: 20px;
`;

const CommentText = styled.p`
  margin: 8px 0 0 0;
  font-size: 20px;
`;

const CommentInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
`;

const Input = styled.input`
  width: 1401px;
  height: 79px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  outline: none;
  font-size: 20px;
  padding-left: 120px;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY02};
    font-size: 20px;
    box-sizing: border-box;
    padding-left: 0px;
    font-weight: 600;
  }
`;

const ContentContain = styled.button`
  display: flex;
  border: none;
  background-color: #f8f9fa;
`;

const SendIconWrap = styled.div`
  position: absolute;
  right: 90px;
  top: 29px;
  cursor: pointer;
`;

const WriteMe = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const dummyData = {
    index: 0,
    title: "프랑스 교통카드",
    writer: "김퓨처",
    typetag: "질문있어요",
    countrytag: "🇫🇷 프랑스",
    text: `프랑스로 교환학생 준비 중인데 1년동안 무제한으로 이용할 수 있는 교통카드를 구매하는게 좋을까요??
가격은 1년에 342유로 + 신청비 8유로로 350유로이고, 1년치 충전한다고 가정했을 때 약  750유로 정도 하더라고요..
교환학생 다녀오신 분들 추천 좀 해주세요!!`,
    contentimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG3CZvGW--EbIiMVsaKDkwlGuy4zIvjP20A&s",
    ishearted: true,
    heartcount: 3,
    commentcount: 9,
    date: "2024.05.07",
    ismine: true,
    comments: [
      { id: 1, user: '김퓨처', date: '2시간전', text: '어쩌구 저쩌구 댓글... 어쩌구 저쩌구....' },
      { id: 2, user: '김퓨처', date: '3일전', text: '어쩌구 저쩌구 댓글....' }
    ]
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = 'eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEsImVtYWlsIjoicF96b0BuYXZlci5jb20iLCJ0eXBlIjoiQWNjZXNzIiwic3ViIjoicF96b0BuYXZlci5jb20iLCJleHAiOjE3MjE2OTM3NzJ9.ZyEMm1scyNkxFVcPrJMnIfpGHkPJuJn5SCefH-oTjaDU4SdYEYT0O8QHILYmlpoS5fRonCJ3lbxo4Et6vHcXUA';
        const response = await axios.get('http://43.200.144.133:8080/api/v1/board/mypost', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: 1,
            size: 4,
          },
        });
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const [heart, setHeart] = useState(dummyData.ishearted);
  const [heartCount, setHeartCount] = useState(dummyData.heartcount);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleHeart = () => {
    setHeart((prevHeart) => !prevHeart);
    setHeartCount((prevCount) => (heart ? prevCount - 1 : prevCount + 1));
  };

  const toggleModal = () => {
    setIsModalVisible((prevVisible) => !prevVisible);
  };

  const handlegopost = () => {
    navigate("/post");
  };

  const handleDelete = () => {
    toggleModal();
  };

  return (
    <ThemeProvider theme={Theme}>
       <Header />
      <Container>
        <MainTitle>공유해요</MainTitle>
        <ContentBox
          dummyData={dummyData}
          onDelete={handleDelete}
          toggleHeart={toggleHeart}
          heart={heart}
          heartCount={heartCount}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          handlegopost={handlegopost}
        />
      </Container>
    </ThemeProvider>
  );
};

const ContentBox = ({
  dummyData,
  onDelete,
  toggleHeart,
  heart,
  heartCount,
  isModalVisible,
  toggleModal,
  handlegopost
}) => {
  const {
    title,
    writer,
    typetag,
    countrytag,
    text,
    contentimg,
    commentcount,
    date,
    ismine,
    comments
  } = dummyData;

  return (
    <ContentBoxWrapper>
      <Top>
        <UserInfo>
          <Avatar src="https://via.placeholder.com/50" alt="User Avatar" />
          <PostUserInfo>
            <PostUserName>{writer}</PostUserName>
            <PostDate>{date}</PostDate>
          </PostUserInfo>
        </UserInfo>
      </Top>
      <Middle>
        <Content>
          <PostHeader>
            <PostTitle>{title}</PostTitle>
            {ismine && (
            <TopIconBtnBox>
              <WriteBtn onClick={handlegopost}>
                <Write />
              </WriteBtn>
              <DeleteBtn onClick={toggleModal}>
                <Trashimg />
              </DeleteBtn>
            </TopIconBtnBox>
          )}
          </PostHeader>
          <TagBox>
            <TypeTag># {typetag}</TypeTag>
            <CountryTag># {countrytag}</CountryTag>
          </TagBox>
          <ContentContain>
          <Text>{text}</Text>
          <ImgBox>
            <ContentImg src={contentimg} alt={title} />
          </ImgBox>
          </ContentContain>
        </Content>
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
          <CommentCount>{commentcount}</CommentCount>
        </ReactionBox>
      </Bottom>

      <Comments>
        {comments.map(comment => (
          <CommentBox key={comment.id}>
            <CommentUserInfo>
              <Avatar2 src="https://via.placeholder.com/50" alt="User Avatar" />
              <CommentInfo>
              <CommentDetails>
                <CommentUserName>{comment.user}</CommentUserName>
                <CommentDate>{comment.date}</CommentDate>
              </CommentDetails>
              <CommentText>{comment.text}</CommentText>
              </CommentInfo>
            </CommentUserInfo>
          </CommentBox>
        ))}
      </Comments>
      <CommentInput>
        <Avatar3 src="https://via.placeholder.com/50" alt="User Avatar" />
        <Input src="https://via.placeholder.com/50" alt="User Avatar" placeholder="댓글을 입력해주세요!" />
        <SendIconWrap>
          <SendIcon />
        </SendIconWrap>
      </CommentInput>
      {isModalVisible && (
        <Modal
          onConfirm={onDelete}
          onCancel={toggleModal}
          msg="삭제하시겠습니까?"
          text1="아니요"
          text2="네"
        />
      )}
    </ContentBoxWrapper>
  );
};

export default WriteMe;