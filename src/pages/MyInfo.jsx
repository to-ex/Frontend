import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';
// import { ReactComponent as PersonCamIcon } from '../assets/images/person_cam.svg'; 
import { ReactComponent as CamIcon } from '../assets/images/cam.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 730px;
  height: 682px; 
  background-color: ${({ theme }) => theme.colors.WHITE};
  overflow: hidden;  
  box-sizing: border-box;  
  box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.1); 
  border-radius: 10px;
  margin: auto;
  margin-top: 150px;
`;

const AvatarContainer = styled.div`
  margin-bottom: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 218px;
  height: 215px;
  cursor: pointer;
`;

// const AvatarIcon = styled(PersonCamIcon)`
//   position: absolute;
//   bottom: 0;
//   cursor: pointer;
//   width: 218px;
//   height: 215px;
// `;

const Input = styled.input`
  width: 355px;
  height: 25px;
  border: 2px solid #EBEBEB;
  border-radius: 50px;
  &:focus {
        outline: none;
      }
  margin-right: 20px;
  font-size: 19px;
  padding: 18px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;  
  height: 24px;  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;  
  border-radius: 50%;  
  color: white;  
  border: none;
  cursor: pointer;
  font-size: 12px; 
  font-weight: 500;
`;

const Button = styled.button`
  width: 234px;
  height: 60px;
  font-size: 17px;
  background-color: ${({ theme, $isNicknameAvailable }) => 
    $isNicknameAvailable ? theme.colors.RED04 : theme.colors.GRAY01};
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  border-radius: 50px;
  cursor: ${({ $isNicknameAvailable }) => $isNicknameAvailable ? 'pointer' : 'not-allowed'};
  margin-top: 18px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 22px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 475px;
`;

const StatusMessage = styled.span`
  color: ${({ theme }) => theme.colors.RED04};
  margin-left: 10px; 
  width: 193px;
  height: 25px;
  margin-top: 3px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;  
`;

const InputRow = styled.div`
  display: flex;
  align-items: flex-start;  
  justify-content: flex-start;
  margin: 14px;
`;

const NicknameButton = styled(Button)`
  width: 110px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.RED04};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  font-size: 18px;
`;

const Overlay = styled.div` 
  position: absolute;
  width: 218px;
  height: 215px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3); 
  cursor: pointer;
`;

const AvatarImage = styled.img`
  cursor: pointer;
  width: 218px;
  height: 215px;
  border-radius: 50%;
  object-fit: cover;
`;

function MyInfo() {
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState('');
  const [nickname, setNickname] = useState(''); 
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null); 
  const [userInfo, setUserInfo] = useState({ userId: '', name: '', email: '', userImage: '' });

  const token = 'eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEsImVtYWlsIjoicF96b0BuYXZlci5jb20iLCJ0eXBlIjoiQWNjZXNzIiwic3ViIjoicF96b0BuYXZlci5jb20iLCJleHAiOjE3MjE2OTM3NzJ9.ZyEMm1scyNkxFVcPrJMnIfpGHkPJuJn5SCefH-oTjaDU4SdYEYT0O8QHILYmlpoS5fRonCJ3lbxo4Et6vHcXUA';

  useEffect(() => {
    const fetchUserInfo = async () => {  //사용자 정보 가져오기(연동 완료)
      try {
        const response = await axios.get('http://43.200.144.133:8080/api/v1/user/mypage', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache'
          }
        });
        setUserInfo(response.data.data);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        alert(error.response?.data?.message || 'Failed to fetch user info');
      }
    };
    fetchUserInfo();
  }, [token]);

  const handleNicknameChange = (event) => {
    const newNickname = event.target.value;
    console.log("New nickname:", newNickname); // 닉네임 변경 확인
    setNickname(newNickname);
    if (isNicknameAvailable !== null) {
      setIsNicknameAvailable(null); 
    }
  };
  
  
  const handleCheckNickname = async () => {
    try {
      const response = await axios.get(`http://43.200.144.133:8080/api/v1/user/mypage/check-nickname`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache'
        },
        params: {
          newName: nickname
        }
      });
      console.log("Nickname check response:", response.data); // 서버 응답 확인
      setIsNicknameAvailable(!response.data.data); // 서버 응답에 따라 설정: true -> 사용 가능, false -> 사용 중
    } catch (error) {
      console.error('Failed to check nickname', error);
      alert(error.response?.data?.message || 'Failed to check nickname');
    }
  };
  
  const handleClearNickname = () => {
    setNickname(''); 
    setIsNicknameAvailable(null); 
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => { // 사용자 정보 수정 후 저장(연동 완료)
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);
    formData.append('name', nickname);
    formData.append('email', userInfo.email);

    try {
      await axios.patch('http://43.200.144.133:8080/api/v1/user/mypage', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('정보가 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('Failed to save user info', error);
      alert(error.response?.data?.message || 'Failed to save user info');
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
      <AvatarContainer onClick={handleAvatarClick}>
      {avatar ? (
        <>
          <AvatarImage src={avatar} alt="Avatar" />
          <Overlay>
            <CamIcon />
          </Overlay>
        </>
      ) : (
        <>
          <AvatarImage src={userInfo.userImage} alt="Avatar" />
          <Overlay>
            <CamIcon />
          </Overlay>
        </>
      )}
    </AvatarContainer>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
        <TitleContainer>
          <Title>닉네임</Title>
          {isNicknameAvailable !== null && (
            <StatusMessage>
              {isNicknameAvailable ? "사용 가능한 닉네임입니다." : "이미 사용중인 닉네임입니다."}
            </StatusMessage>
          )}
        </TitleContainer>
        <InputRow>
          <InputContainer>
            <Input
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
            />
            <CloseButton onClick={handleClearNickname}>X</CloseButton>
          </InputContainer>
          <NicknameButton onClick={handleCheckNickname}>중복 확인</NicknameButton>
        </InputRow>
        <Button $isNicknameAvailable={isNicknameAvailable} onClick={handleSave}>저장</Button>
      </Container>
    </ThemeProvider>
  );
}

export default MyInfo;