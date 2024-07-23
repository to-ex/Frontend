import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Theme } from "../styles/Theme";
import ConfirmModal from "../components/ConfirmModal";
import axios from 'axios';

const Container = styled.div`
  width: 1424px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  z-index: 2;
`;

const DropdownButton = styled.button`
  width: 664px;
  height: 67px;
  border: 1px solid #EAEAEA;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 35px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.GRAY02};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${props => (props.$dropdownOpen ? '20px 20px 0 0' : '20px')};

  &:focus {
    outline: none; 
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.$show ? 'block' : 'none')};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid #EAEAEA;
  border-top: none;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.1);
  z-index: 3;
  border-radius: 0 0 20px 20px;
  width: 664px;

  button {
    background: none;
    border: none;
    width: 664px;
    height: 56px;
    text-align: left;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    border-top: none;
    height: 81px;
    box-sizing: border-box;
    padding: 10px 35px;

    &:hover {
      background-color: #FFF5F7;
      color: ${({ theme }) => theme.colors.RED04};
      box-sizing: border-box;
    }

    &:last-child:hover {
      border-radius: 0 0 20px 20px;
    }
  }
`;

const InputField = styled.input`
  width: 1417px;
  height: 111px;
  border: 1px solid #EAEAEA;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 40px;
  margin-bottom: 20px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY03};
    font-size: 28px;
  }

  &:focus {
    outline: none; 
  }
`;

const TextArea = styled.textarea`
  width: 1417px;
  height: 490px;
  border: 1px solid #C3C3C3;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY02};
    font-size: 20px;
  }

  &:focus {
    outline: none; 
  }
`;

const ImageUploadWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageUploadInfo = styled.p`
  font-size: 20px;
  color: #C3C3C3;
  margin-left: 255px;
  text-align: left;
`;

const ImageUploadButton = styled.button`
  width: 127px;
  height: 127px;
  border: none;
  border-radius: 12px;
  background-color: #D9D9D9;
  color: #FAFAFA;
  font-size: 60px;
  font-weight: bold;
  margin-right: 1267px;
  cursor: pointer;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;

  &:focus {
    outline: none; 
  }
`;

const SubmitButton = styled.button`
  width: 288px;
  height: 60px;
  border: none;
  border-radius: 50px;
  background-color: ${({ enabled, theme }) => enabled ? theme.colors.RED04 : '#D9D9D9'};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ enabled, theme }) => enabled ? theme.colors.RED04 : '#D9D9D9'};
  }
`;

const ContentsBox = styled.button`
  background-color: #F5F5F5;
  width: 1920px;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 100px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const PostWrite = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [board, setBoard] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    country: false,
    board: false,
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (country && board && title && content) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [country, board, title, content]);

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append('boardReq', JSON.stringify({
      title,
      boardCategory: board,
      countryTag: country,
      content,
    }));
    if (image) {
      formData.append('images', image);
    }
  
    try {
      const response = await axios.post('http://43.200.144.133:8080/api/v1/board', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEsImVtYWlsIjoicF96b0BuYXZlci5jb20iLCJ0eXBlIjoiQWNjZXNzIiwic3ViIjoicF96b0BuYXZlci5jb20iLCJleHAiOjE3MjE2OTM3NzJ9.ZyEMm1scyNkxFVcPrJMnIfpGHkPJuJn5SCefH-oTjaDU4SdYEYT0O8QHILYmlpoS5fRonCJ3lbxo4Et6vHcXUA`
        }
      });
      console.log(response.data);
      setConfirmModalVisible(true);
      // 성공 시 페이지 이동 등의 처리
    } catch (error) {
      console.error('Failed to submit post:', error.response ? error.response.data : error.message);
      alert('Failed to submit post: ' + (error.response ? error.response.data : error.message));
    }
  };
  
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <DropdownWrapper>
          <div>
            <DropdownButton onClick={() => toggleDropdown('country')} $dropdownOpen={dropdownOpen.country}>
              {country || '국가를 선택해주세요.'}
            </DropdownButton>
            <DropdownContent $show={dropdownOpen.country}>
              <button onClick={() => { setCountry('🇪🇸  스페인'); toggleDropdown('country'); }}>🇪🇸  스페인</button>
              <button onClick={() => { setCountry('🇩🇪  독일'); toggleDropdown('country'); }}>🇩🇪  독일</button>
              <button onClick={() => { setCountry('🇬🇧  영국'); toggleDropdown('country'); }}>🇬🇧  영국</button>
              <button onClick={() => { setCountry('🇫🇷  프랑스'); toggleDropdown('country'); }}>🇫🇷  프랑스</button>
              <button onClick={() => { setCountry('🇮🇹  이탈리아'); toggleDropdown('country'); }}>🇮🇹  이탈리아</button>
            </DropdownContent>
          </div>
          <div>
            <DropdownButton onClick={() => toggleDropdown('board')} $dropdownOpen={dropdownOpen.board}>
              {board || '게시판을 선택해주세요.'}
            </DropdownButton>
            <DropdownContent $show={dropdownOpen.board}>
              <button onClick={() => { setBoard('전체'); toggleDropdown('board'); }}>전체</button>
              <button onClick={() => { setBoard('떠들어요'); toggleDropdown('board'); }}>떠들어요</button>
              <button onClick={() => { setBoard('질문 있어요'); toggleDropdown('board'); }}>질문 있어요</button>
              <button onClick={() => { setBoard('공유해요'); toggleDropdown('board'); }}>공유해요</button>
            </DropdownContent>
          </div>
        </DropdownWrapper>
        <ContentsBox>
          <InputField
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ImageUploadWrapper>
            <ImageUploadInfo>이미지 파일 (JPG, PNG, GIF) 3개를 첨부할 수 있어요.</ImageUploadInfo>
            <ImageUploadButton
              onClick={() => document.getElementById('imageUpload').click()}
              image={image ? URL.createObjectURL(image) : null}
            >
              {image ? '' : '+'}
            </ImageUploadButton>
            <HiddenFileInput
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </ImageUploadWrapper>
          <SubmitButton onClick={handlePostSubmit} enabled={isButtonEnabled}>등록</SubmitButton>
        </ContentsBox>
        {confirmModalVisible && (
        <ConfirmModal
          msg="등록 되었어요!"
          onConfirm={handleCloseConfirmModal}
        />
      )}
      </Container>
    </ThemeProvider>
  );
};

export default PostWrite;