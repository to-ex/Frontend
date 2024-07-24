// 필요한 import 구문들 추가
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from "../styles/Theme";
import { ReactComponent as SearchIcon } from '../assets/images/Search2.svg';
import { ReactComponent as CharacterIcon } from '../assets/images/Character.svg';
import { ReactComponent as TitleIcon } from '../assets/images/Title.svg';
import { ReactComponent as FilterIcon } from '../assets/images/Filter.svg';
import { ReactComponent as TextBoxIcon } from '../assets/images/TextBox.svg';
import { ReactComponent as HashIcon } from '../assets/images/Hash.svg';
import { ReactComponent as WriteGoIcon } from '../assets/images/WriteGo.svg';
import EmptyHeart from "../assets/images/EmptyHeart.svg";
import FullHeart from "../assets/images/FullHeart.svg";
import CommentIcon from "../assets/images/ChatCircle.svg";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Paging from "../components/Paging";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";

const AppWrapper = styled.div`
  width: 1920px;
  height: 980px;
  padding-top: 88px;
`;

const SearchBar = styled.div`
  margin-bottom: 50px;
  margin-top: 55px;
  margin-left: -55px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.RED04};
  width: 915px;
  height: ${({ $isOpen }) => ($isOpen ? '572px' : '78px')};
  border-radius:${({ $isOpen }) => ($isOpen ? '40px' : '50px')};
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
  position: absolute;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const TitleIconWrap = styled.div`
  width: 502px;
  margin: 0 auto;
  padding-top: 120px;
`;

const CharacterIconWrap = styled.div`
  position: absolute;
  left: 7px;
  top: 4px;
`;

const SearchIconWrap = styled.div`
  position: absolute;
  right: 48px;
  top: 23px;
  cursor: pointer;
`;

const FilterIconWrap = styled.div`
  position: absolute;
  right: -72px;
  top: 17px;
  cursor: pointer;
`;

const SearchInput = styled.input`
border: none;
  outline: none;
  width: 500px;
  height: 30px;
  margin-left: 77px;
  padding: 0px;
  position: absolute;
  top: 27px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.RED02};
    font-size: 20px;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 915px;
  margin: 0 auto;
  margin-bottom: 285px;
`;

const WriteWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 824px;
  left: 803px;
  position: fixed;
  cursor: pointer;
  z-index: 9;
`;

const HashtagList = styled.div`
  width: 913px;
  height: 472px;
  position: absolute;
  top: 78px;
  left: 0;
  background-color: ${props => props.theme.colors.WHITE};
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const HashtagItem = styled.div`
  display: flex;
  width: 810px;
  box-sizing: border-box;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px solid #EAEAEA;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 18px;

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    margin-top: 20px;
  }
`;

const HashTagContain = styled.div`
  display: flex;
  gap: 20px;
`;

const SelectedHashtags = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 42px;
  gap: 12px;
  font-size: 18px;
  position: absolute;
  top: 80px;
  left: 0;
`;

const HashtagButton1 = styled.button`
  background-color: ${({ theme }) => theme.colors.RED04};
  color:  ${({ theme }) => theme.colors.WHITE};
  border: none;
  width: 128px;
  height: 44px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
`;

const HashtagButton2 = styled.button`
  color: ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  width: 128px;
  height: 44px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
`;

const PostList = styled.div`
  background-color: ${props => props.theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    background-color: ${({ theme }) => theme.colors.WHITE};
  }
`;


const Post = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  position: relative;
  margin-bottom: 40px;
`;

const PostBackground = styled(TextBoxIcon)`
  width: 100%;
  height: auto;
  display: block;

`;

const PostContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 60px;
`;

const PostAvatar = styled.div`
  width: 69px;
  height: 69px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 20px;
  background-image: url('https://via.placeholder.com/50');
  background-size: cover;
  background-position: center;
`;

const PostInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.BLACK};
`;

const AuthorSpan = styled.span`
  color: ${props => props.theme.colors.GRAY03};
  font-weight: normal;
  font-size: 27px;
`;

const PostActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 13px;
`;

const PostActionButton1 = styled.button`
  color: ${props => props.theme.colors.RED04};
  border: 1px solid ${props => props.theme.colors.RED04};
  background-color: ${props => props.theme.colors.WHITE};
  width: 128px;
  height: 44px;
  cursor: pointer;
  border-radius: 50px;
  font-size: 18px;
`;

const PostActionButton2 = styled.button`
  background-color: ${props => props.theme.colors.RED04};
  border: none;
  color: ${props => props.theme.colors.WHITE};
  width: 128px;
  height: 44px;
  cursor: pointer;
  border-radius: 50px;
  font-size: 18px;
  margin-left: 10px;
`;

const PostContent = styled.div`
  display: flex;
  position: absolute;
  top: 180px;
  left: 70px;
`;

const PostBox = styled.div`
  width: 1075px;
  height: 155px;
  background-color: #F8F9FA;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-right: 45px;
`;

const PostText = styled.p`
  font-size: 20px;
`;

const PostImage = styled.div`
  width: 267px;
  height: 155px;
  background-color: #ddd;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 310px;
  box-sizing: border-box;
  padding: 0px 45px;
`;

const ReactionBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeartIcon = styled.button`
  width: 26px;
  height: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CommentIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Likes = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
`;

const CommentCount = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 6px;
`;

const CreatedDt = styled.p`
  color: #adadad;
  font-size: 20px;
  font-weight: 500;
`;

const NumberOfPosts = styled.p`
  width: 97px;
  height: 28px;
  line-height: 28px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.RED03};
  border-radius: 50px;
  background-color: #FFF4F6;
  text-align: center;
  margin-top: -10px;
  margin-left: 62px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  z-index: 20;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 465px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.WHITE};
  width: 990px;
  height: 324px;
  box-sizing: border-box;
  border-radius: 20px;
  z-index: 30;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

const FilterOption = styled.div`
  box-sizing: border-box;
  text-align: center;
  line-height: 81px;
  font-size: 22px;
  font-weight: 600;
  height: 81px;
  border-bottom: 1px solid #EAEAEA;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #FFF4F6;
    color: ${({ theme }) => theme.colors.RED04};
  }

  &:last-child:hover {
    border-radius: 0 0 20px 20px;
  }

  &:first-child:hover {
    border-radius: 20px 20px 0 0;
  }
`;

const PagingWrapper = styled.div`
  margin-top: 22px; 
  margin-bottom: 90px; 
`;

const fetchPosts = async (searchTerm, boardCategory, countryTag, page, size) => {
  try {
    const response = await axios.get('http://43.200.144.133:8080/api/v1/board', {
      params: {
        keyword: searchTerm,
        boardCategory: boardCategory,
        countryTag: countryTag,
        page: page,
        size: size,
      },
    });
    if (response.status === 200) {
      return response.data.data.content;
    } else {
      console.error('Error fetching posts:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


const Community = () => {
  const [boardCategory, setBoardCategory] = useState('');
  const [countryTag, setCountryTag] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 4; 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [hashtags, setHashtags] = useState([
    { tag: '🇪🇸 스페인', count: 0 },
    { tag: '🇩🇪 독일', count: 0 },
    { tag: '🇬🇧 영국', count: 0 },
    { tag: '🇫🇷 프랑스', count: 0 },
    { tag: '🇮🇹 이탈리아', count: 0 },
  ]);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await fetchPosts(searchTerm, boardCategory, countryTag, currentPage, contentPerPage);
      setPosts(fetchedPosts);

      const keywordCounts = {
        '스페인': 0,
        '독일': 0,
        '영국': 0,
        '프랑스': 0,
        '이탈리아': 0,
      };

      fetchedPosts.forEach(post => {
        if (post.countrytag === 'SPAIN') keywordCounts['스페인']++;
        if (post.countrytag === 'GERMANY') keywordCounts['독일']++;
        if (post.countrytag === 'ENGLAND') keywordCounts['영국']++;
        if (post.countrytag === 'FRANCE') keywordCounts['프랑스']++;
        if (post.countrytag === 'ITALY') keywordCounts['이탈리아']++;
      });

      setHashtags(hashtags.map(tag => ({
        ...tag,
        count: keywordCounts[tag.tag.split(' ')[1]] || 0,
      })));
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [searchTerm, boardCategory, countryTag, currentPage]);

  const handleBoardCategoryChange = (category) => {
    setBoardCategory(category);
  };

  const handleCountryTagChange = (tag) => {
    setCountryTag(tag);
  };

  const categoryMap = {
    SHARE: '공유해요',
    QUESTION: '질문 있어요',
    TALK: '떠들어요',
  };

  const countryMap = {
    SPAIN: '🇪🇸 스페인',
    GERMANY: '🇩🇪 독일',
    ENGLAND: '🇬🇧 영국',
    FRANCE: '🇫🇷 프랑스',
    ITALY: '🇮🇹 이탈리아',
  };

  const getCategoryInKorean = (category) => categoryMap[category] || category;
  const getCountryInKorean = (country) => countryMap[country] || country;

  const toggleHeart = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  const handleHashtagClick = (tag) => {
    if (!selectedHashtags.some(selectedTag => selectedTag.value === tag)) {
      setSelectedHashtags([...selectedHashtags, { value: tag, type: 'hashtag' }]);
    }
  };

  const removeHashtag = (tag) => {
    setSelectedHashtags(selectedHashtags.filter((t) => t.value !== tag));
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
    setIsFilterOpen(false);
  };

  const openFilterModal = (event) => {
    event.stopPropagation();
    setIsFilterOpen(true);
    setIsOpen(false);
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false);
  };

  const handleFilterClick = (filter) => {
    if (!selectedHashtags.some(tag => tag.value === filter)) {
      setSelectedHashtags([...selectedHashtags, { value: filter, type: 'filter' }]);
    }
    closeFilterModal();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastPost = currentPage * contentPerPage;
  const indexOfFirstPost = indexOfLastPost - contentPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const count = posts.length;

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => { //검색 아이콘을 클릭했을 때 호출
    e.stopPropagation(); // 이벤트 전파 방지
    setIsOpen(false); // 해시태그 리스트를 닫음
    loadPosts(); // 검색을 수행, 호출하여 게시글 가져옴
  };
  

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <AppWrapper>
        <WriteWrapper>
          <Link to="/postwrite">
            <WriteGoIcon src="../assets/images/WriteGo.svg" alt="작성하기 아이콘" />
          </Link>
        </WriteWrapper>
        <TitleIconWrap>
          <TitleIcon src="../assets/images/Title.svg" alt="타이틀 배너" />
        </TitleIconWrap>
        <BackgroundAnimation />
        <SearchBarWrapper>
          <SearchBar $isOpen={isOpen} onClick={toggleSearchBar}>
            <CharacterIconWrap>
              <CharacterIcon src="../assets/images/Character.svg" alt="캐릭터 이모티콘" />
            </CharacterIconWrap>
            <SearchInput
              type="text"
              placeholder="교환학생 준비, 투엑스에게 물어보세요!"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIconWrap onClick={handleSearch}>
              <SearchIcon />
            </SearchIconWrap>
            <FilterIconWrap onClick={openFilterModal}>
              <FilterIcon />
            </FilterIconWrap>
            <HashtagList $show={isOpen}>
              {hashtags.map((tag, index) => (
                <HashtagItem key={index} onClick={() => handleHashtagClick(tag.tag)}>
                  <HashTagContain>
                    <HashIcon />
                    {tag.tag}
                  </HashTagContain>
                  <NumberOfPosts>
                    게시글 {tag.count}개
                  </NumberOfPosts>
                </HashtagItem>
              ))}
            </HashtagList>
          </SearchBar>
          <SelectedHashtags>
            {selectedHashtags.map((tag, index) => (
              tag.type === 'filter' ? (
                <HashtagButton2 key={index} onClick={() => removeHashtag(tag.value)}>
                  # {tag.value}
                </HashtagButton2>
              ) : (
                <HashtagButton1 key={index} onClick={() => removeHashtag(tag.value)}>
                  # {tag.value}
                </HashtagButton1>
              )
            ))}
          </SelectedHashtags>
        </SearchBarWrapper>
        <PostList>
          {currentPosts.map((post) => (
            <Post key={post.id}>
              <PostBackground />
              <PostContentWrapper>
                <PostHeader>
                  <PostAvatar>{post.authorProfileImgUrl}</PostAvatar>
                  <PostInfo>
                    <PostTitle>
                      {post.title} <AuthorSpan>| {post.author}</AuthorSpan>
                    </PostTitle>
                    <PostActions>
                      <PostActionButton1># {getCategoryInKorean(post.boardCategory)}</PostActionButton1>
                      <PostActionButton2># {getCountryInKorean(post.countrytag)}</PostActionButton2>
                    </PostActions>
                  </PostInfo>
                </PostHeader>
                <PostContent>
                  <PostBox>
                    <PostText>{post.comments}</PostText>
                  </PostBox>
                  <PostImage>{post.imgUrl}</PostImage>
                </PostContent>
                <PostFooter>
                  <ReactionBox>
                    <HeartIcon onClick={() => toggleHeart(post.id)}>
                      <img src={post.isLiked ? FullHeart : EmptyHeart} alt="Heart Icon" />
                    </HeartIcon>
                    <Likes>{post.likes}</Likes>
                    <CommentIconBox>
                      <img src={CommentIcon} alt="Comment Icon" />
                      <CommentCount>{post.commentcount}</CommentCount>
                    </CommentIconBox>
                  </ReactionBox>
                  <CreatedDt>{post.createdDt}</CreatedDt>
                </PostFooter>
              </PostContentWrapper>
            </Post>
          ))}
          <PagingWrapper>
            <Paging
              page={currentPage}
              count={count}
              setPage={setPage}
              contentPerPage={contentPerPage}
            />
          </PagingWrapper>
        </PostList>
        <ModalOverlay $show={isFilterOpen} onClick={closeFilterModal} />
        <ModalContent $show={isFilterOpen}>
          <FilterOption onClick={() => handleFilterClick('전체')}># 전체</FilterOption>
          <FilterOption onClick={() => handleFilterClick('떠들어요')}># 떠들어요</FilterOption>
          <FilterOption onClick={() => handleFilterClick('질문 있어요')}># 질문 있어요</FilterOption>
          <FilterOption onClick={() => handleFilterClick('공유해요')}># 공유해요</FilterOption>
        </ModalContent>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Community;



