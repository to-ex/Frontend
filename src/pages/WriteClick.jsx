import React, { useState, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from "../styles/Theme";
import { ReactComponent as EmptyHeart } from "../assets/images/EmptyHeart.svg";
import { ReactComponent as FullHeart } from "../assets/images/FullHeart.svg";
import { ReactComponent as Comment } from "../assets/images/ChatCircle.svg";
import { ReactComponent as SendIcon } from "../assets/images/Send.svg";
import { ReactComponent as ProfileIcon } from "../assets/images/Profile.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Header from "../components/Header";

const Container = styled.div`
  width: 1920px;
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
  margin-bottom: 90px;
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
  gap: 12px;
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
  max-height: 150px;  
  overflow-y: auto;  
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

const WriteClick = () => {
  const navigate = useNavigate();
  const { boardId } = useParams(); 
  const [post, setPost] = useState(null);
  const [heart, setHeart] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  const boardCategoryMap = {
    'SHARE': '공유해요',
    'QUESTION': '질문 있어요',
    'TALK': '떠들어요'
  };

  const countryTagMap = {
    'SPAIN': '🇪🇸 스페인',
    'GERMANY': '🇩🇪 독일',
    'ENGLAND': '🇬🇧 영국',
    'FRANCE': '🇫🇷 프랑스',
    'ITALY': '🇮🇹 이탈리아'
  };

  const mapDataToKorean = useCallback((postData) => {
    return {
      ...postData,
      boardCategory: boardCategoryMap[postData.boardCategory] || postData.boardCategory,
      countryTag: countryTagMap[postData.countryTag] || postData.countryTag,
    };
  }, []);

  const fetchPost = async () => {
    try {
      const token = 'eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjMsImVtYWlsIjoid2pkZ21sZHVzMjhAbmF2ZXIuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6IndqZGdtbGR1czI4QG5hdmVyLmNvbSIsImV4cCI6MTcyMjAyNDU4M30.e1GOXBjaQG6jwK665B-7nXZrd58-mphYGDucMFhbDXLoXzM1Jwp6Ya51XKvhgUXea-G7M23gj_rfVx_Fv5ZM5A';
      const response = await axios.get(`http://43.200.144.133:8080/api/v1/board/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let postData = response.data.data;
      postData = mapDataToKorean(postData);
      setPost(postData);
      setHeart(postData.isLiked);
      setHeartCount(postData.likes);
      setComments(postData.commentList.content);
      setCommentCount(postData.comments);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [boardId, mapDataToKorean, comments]);

  const submitComment = async (commentContent) => {
    try {
      const token = 'eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjMsImVtYWlsIjoid2pkZ21sZHVzMjhAbmF2ZXIuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6IndqZGdtbGR1czI4QG5hdmVyLmNvbSIsImV4cCI6MTcyMjAyNDU4M30.e1GOXBjaQG6jwK665B-7nXZrd58-mphYGDucMFhbDXLoXzM1Jwp6Ya51XKvhgUXea-G7M23gj_rfVx_Fv5ZM5A';
      const response = await axios.post(`http://43.200.144.133:8080/api/v1/comment/${boardId}`, 
        { content: commentContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Comment submitted successfully:', response.data);
        const newCommentData = response.data.data;
  
        // 새로운 댓글 데이터를 현재 댓글 리스트에 추가하여 상태 업데이트
        setComments((prevComments) => [...prevComments, newCommentData]);
        setCommentCount((prevCount) => prevCount + 1);
        fetchPost();
      } else {
        console.error('Failed to submit comment:', response.status);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  
  const toggleHeart = async () => {
    try {
      const token = 'eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjMsImVtYWlsIjoid2pkZ21sZHVzMjhAbmF2ZXIuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6IndqZGdtbGR1czI4QG5hdmVyLmNvbSIsImV4cCI6MTcyMjAyNDU4M30.e1GOXBjaQG6jwK665B-7nXZrd58-mphYGDucMFhbDXLoXzM1Jwp6Ya51XKvhgUXea-G7M23gj_rfVx_Fv5ZM5A';
   const url = `http://43.200.144.133:8080/api/v1/like/${boardId}`;
        
      const response = await axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        setHeart((prevHeart) => !prevHeart);
        setHeartCount((prevCount) => (heart ? prevCount - 1 : prevCount + 1));
      } else {
        console.error('Failed to toggle heart:', response.status);
      }
    } catch (error) {
      console.error('Error toggling heart:', error);
    }
  };
   
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      submitComment(newComment).then(() => {
        setNewComment('');
      });
    } else {
      alert('댓글을 입력해주세요!');
    }
  };
    
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Container>
        <MainTitle>{post.boardCategory}</MainTitle>
        <ContentBox
          post={post}
          toggleHeart={toggleHeart}
          heart={heart}
          heartCount={heartCount}
          newComment={newComment}
          handleCommentChange={handleCommentChange}
          handleCommentSubmit={handleCommentSubmit}
          comments={comments}
          commentCount={commentCount}
        />
      </Container>
    </ThemeProvider>
  );
};

const ContentBox = ({
  post,
  toggleHeart,
  heart,
  heartCount,
  newComment,
  handleCommentChange,
  handleCommentSubmit,
  comments,
  commentCount,
  navigate, 
}) => {
  const {
    authorProfileImgUrl,
    title,
    author,
    boardCategory,
    countryTag,
    imgUrlList,
    content,
  } = post;

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };
  
  return (
    <ContentBoxWrapper>
      <Top>
        <UserInfo>
          <Avatar src={authorProfileImgUrl || ProfileIcon} alt="User Avatar" />
          <PostUserInfo>
            <PostUserName>{author}</PostUserName>
            <PostDate>{formatDateTime(post.createdDt)}</PostDate>
          </PostUserInfo>
        </UserInfo>
      </Top>
      <Middle>
        <Content>
          <PostHeader>
          <PostTitle>{title}</PostTitle>
          </PostHeader>
          <TagBox>
            <TypeTag># {boardCategory}</TypeTag>
            <CountryTag># {countryTag}</CountryTag>
          </TagBox>
          <ContentContain>
            <Text>{content}</Text>
            <ImgBox>
              <ContentImg src={imgUrlList} alt="Post Image" />
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
          <CommentCount>{commentCount}</CommentCount>
        </ReactionBox>
      </Bottom>
      <Comments>
        {comments.map(comment => (
          <CommentBox key={comment.commentId}>
            <CommentUserInfo>
              <Avatar2 src={comment.profileImgUrl || ProfileIcon} alt="User Avatar" />
              <CommentInfo>
                <CommentDetails>
                  <CommentUserName>{comment.commenterName}</CommentUserName>
                  <CommentDate>{formatDateTime(comment.createdDt)}</CommentDate>
                </CommentDetails>
                <CommentText>{comment.content}</CommentText>
              </CommentInfo>
            </CommentUserInfo>
          </CommentBox>
        ))}
      </Comments>
      <CommentInput>
        <Avatar3 src={post.authorProfileImgUrl || ProfileIcon} alt="User Avatar" />
        <Input
          placeholder="댓글을 입력해주세요!" 
          value={newComment}
          onChange={handleCommentChange}
        />
        <SendIconWrap onClick={handleCommentSubmit}>
          <SendIcon />
        </SendIconWrap>
      </CommentInput>
    </ContentBoxWrapper>
  );
};

export default WriteClick;