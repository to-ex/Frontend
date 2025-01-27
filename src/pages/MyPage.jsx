import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';
import axios from 'axios'; 
import Modal from '../components/Modal';
import ConfirmModal from '../components/ConfirmModal';
import { Link } from 'react-router-dom';
import { ReactComponent as Person1 } from '../assets/images/person1.svg';
import { ReactComponent as Profile } from '../assets/images/profile2.svg';
import { ReactComponent as Writing } from '../assets/images/writing.svg';
import { ReactComponent as Scrap } from '../assets/images/scrap.svg';
import { ReactComponent as Checklist } from '../assets/images/checklist.svg';
import { ReactComponent as Calendar } from '../assets/images/calendar2.svg';
import ScrollToTop from '../components/ScrollToTop';

const Contain = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 1920px;
`;

const PageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 0 auto;
  
  a { 
    text-decoration: none;  
    color: black;
  }
`;

const PageHeader = styled.div`
  font-size: 32px;
  color: black;
  font-weight: bold;
  text-align: left;
  width: 140px;
  margin-bottom: 25px;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 10px;
  width: 1400px;
  height: 687px;
  position: relative;
  margin-bottom: 70px;
  border: 2px solid #E1E1E1;
  margin-top: 88px;
`;

const UserGreeting = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-bottom: 30px; 
  margin-top: -55px;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 60px; 
  margin-bottom: 50px; 
`;

const Card = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const createStyledIcon = (SvgComponent) => styled(SvgComponent)`
  width: 151px;
  height: 151px;
  margin-bottom: 20px;
`;

const StyledPerson1 = createStyledIcon(Person1);
const StyledProfile = createStyledIcon(Profile);
const StyledWriting = createStyledIcon(Writing);
const StyledScrap = createStyledIcon(Scrap);
const StyledChecklist = createStyledIcon(Checklist);
const StyledCalendar = createStyledIcon(Calendar);

const UserName = styled.span`
  color: #ff244a;
  font-weight: bold;
  font-size: 28px;
  margin-top: 8px;
`;

const NameSuffix = styled.span`
  margin-top: 8px; 
  font-size: 28px;
`;

const GreetingContainer = styled.div`
  display: flex;
  align-items: center; 
`;

const ItemTitle = styled.span`
  font-size: 20px;
  text-align: center;  
  width: 100%; 
  display: block; 
`;

const AccountActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  position: absolute;
  bottom: 45px;
`;

const ActionButton = styled.button`
  width: 101px;
  height: 42px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.1);
  border-radius: 50px;
  cursor: pointer;
  color: gray;
  font-weight: bold;
  &:hover {
    background-color: #e1e1e1;
  }
  font-size: 18px;
`;

const iconMapping = {
  profile: StyledProfile,
  writing: StyledWriting,
  scrap: StyledScrap,
  checklist: StyledChecklist,
  calendar: StyledCalendar,
  person: StyledPerson1
};

function MyPage() {
  const [userInfo, setUserInfo] = useState({ userId: null, name: null, email: null, userImage: null });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [confirmModalMessage, setConfirmModalMessage] = useState('');
  const [modalActions, setModalActions] = useState({
    text1: '',
    text2: '',
    onCancel: () => {},
    onConfirm: () => {}
  });
  const [items] = useState([
    { id: 1, title: '내 정보 관리', icon: 'profile', path: '/myinfo' },
    { id: 2, title: '나의 쓰기', icon: 'writing', path: '/myposts' },
    { id: 3, title: '스크랩', icon: 'scrap', path: '/scrap' },
    { id: 4, title: '체크리스트', icon: 'checklist', path: '/checklist' },
    { id: 5, title: '캘린더', icon: 'calendar', path: '/calendar' } 
  ]);

  useEffect(() => {  
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://43.200.144.133:8080/api/v1/user/mypage', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache'
          }
        });

        setUserInfo(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshToken = localStorage.getItem('refreshToken');
            const refreshTokenResponse = await axios.patch('http://43.200.144.133:8080/api/v1/auth/user/refresh', null, {
              headers: {
                RefreshToken: refreshToken
              }
            });
            const { accessToken } = refreshTokenResponse.data.data;
            localStorage.setItem('accessToken', accessToken);

            const retryResponse = await axios.get('http://43.200.144.133:8080/api/v1/user/mypage', {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Cache-Control': 'no-cache'
              }
            });

            setUserInfo(retryResponse.data.data);
          } catch (refreshError) {
            console.error('Failed to refresh token or fetch user info:', refreshError);
            alert(refreshError.response?.data?.message || 'Failed to refresh token or fetch user info');
          }
        } else {
          console.error('Failed to fetch user info:', error);
          alert(error.response?.data?.message || '로그인 후 사용해 주세요!');
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogoutClick = () => {
    setModalContent('로그아웃 하시겠습니까?');
    setModalActions({
      text1: '취소',
      text2: '확인',
      onCancel: () => setModalVisible(false),
      onConfirm: confirmLogout
    });
    setModalVisible(true);
  };

  const confirmLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('http://43.200.144.133:8080/api/v1/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          id: userInfo.userId
        }
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setModalVisible(false);
      setConfirmModalMessage('로그아웃 되었어요');
      setConfirmModalVisible(true);
    } catch (error) {
      console.error('Failed to logout:', error);
      alert(error.response?.data?.message || 'Failed to logout');
    }
  };

  const handleDeleteClick = () => {
    setModalContent('더 이상 to.x 사용을 원하지 않으신가요?');
    setModalActions({
      text1: '더 써볼래요',
      text2: '안녕...',
      onCancel: () => setModalVisible(false),
      onConfirm: confirmDeletion
    });
    setModalVisible(true);
  };

  const confirmDeletion = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete('http://43.200.144.133:8080/api/v1/auth/withdraw', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setModalVisible(false);
      setConfirmModalMessage('회원탈퇴 처리가 완료되었어요');
      setConfirmModalVisible(true);
    } catch (error) {
      console.error('Failed to delete account:', error);
      alert(error.response?.data?.message || 'Failed to delete account');
    }
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Contain>
        <PageWrapper>
          <PageHeader>마이페이지</PageHeader>
          <MyPageContainer>
            <UserGreeting>
              <StyledPerson1 style={{ width: '165.64px', height: '163.17px' }}>{userInfo.userImage}</StyledPerson1>
              <GreetingContainer>
                <UserName>{userInfo.name}</UserName>
                <NameSuffix>님, 안녕하세요!</NameSuffix>
              </GreetingContainer>
            </UserGreeting>
            <IconGrid>
              {items.map(item => (
                <Card key={item.id}>
                  {item.path ? (
                    <Link to={item.path}>
                      {React.createElement(iconMapping[item.icon], { className: 'icon' })}
                      <ItemTitle>{item.title}</ItemTitle>
                    </Link>
                  ) : (
                    <div>
                      {React.createElement(iconMapping[item.icon], { className: 'icon' })}
                      <ItemTitle>{item.title}</ItemTitle>
                    </div>
                  )}
                </Card>
              ))}
            </IconGrid>
            <AccountActions>
              <ActionButton onClick={handleLogoutClick}>로그아웃</ActionButton>
              <ActionButton onClick={handleDeleteClick}>회원탈퇴</ActionButton>
            </AccountActions>
            {modalVisible && (
              <Modal
                msg={modalContent}
                text1={modalActions.text1}
                text2={modalActions.text2}
                onCancel={modalActions.onCancel}
                onConfirm={modalActions.onConfirm}
              />
            )}
            {confirmModalVisible && (
              <ConfirmModal
                msg={confirmModalMessage}
                onConfirm={handleCloseConfirmModal}
              />
            )}
          </MyPageContainer>
        </PageWrapper>
        <ScrollToTop />
      </Contain>
    </ThemeProvider>
  );
}

export default MyPage;