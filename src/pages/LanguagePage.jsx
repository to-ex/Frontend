import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import ConfirmModal from '../components/ConfirmModal';
import { Link } from 'react-router-dom';
import { ReactComponent as Person1 } from '../assets/images/person1.svg';
import { ReactComponent as Profile } from '../assets/images/profile.svg';
import { ReactComponent as Writing } from '../assets/images/writing.svg';
import { ReactComponent as Scrap } from '../assets/images/scrap.svg';
import { ReactComponent as Checklist } from '../assets/images/checklist.svg';
import { ReactComponent as Calendar } from '../assets/images/calendar.svg';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  margin: 11% auto 0;
  a { 
    text-decoration: none;  
  color: black;
`;

const PageHeader = styled.div`
  font-size: 32px;
  color: black;
  font-weight: bold;
  text-align: left;
  width: 1420px;
  margin-bottom: 15px;
`;

const MyPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
  padding: 5px;
  gap: 10px;
  background: #FFF;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.1); 
  border-radius: 10px;
  width: 1426px;
  height: 379px;
`;

const UserGreeting = styled.div`
  flex: 0.7;
  margin-bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-top: 30px;
`;

const IconGrid = styled.div`
  flex: 2.0;
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 0px; 
  margin-right: 50px;
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
  margin-bottom: 10px;
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
  margin-top: 6px;
`

const NameSuffix = styled.span`
  margin-top: 6px; 
  font-size: 28px;
`;

const GreetingContainer = styled.div`
  display: flex;
  align-items: center; 
`;

const AdditionalGreeting = styled.div`
  text-align: center; 
  font-size: 28px;
`;

const ItemTitle = styled.span`
  font-size: 20px;
  text-align: center;  
  width: 100%; 
  display: block; 
`;

const AccountActions = styled.div`
  position: absolute;
  bottom: 16px;
  right: 18px;
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  width: 101px;
  height: 42px;
  background-color: #fff;
  border: 2px solid #E4E4E4;
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
  const [userInfo] = useState({ name: '김퓨처' });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [modalActions, setModalActions] = useState({
    text1: '',
    text2: '',
    onCancel: () => {},
    onConfirm: () => {}
  });
  const [items] = useState([
    { id: 1, title: '내 정보 관리', icon: 'profile', path: '/myinfo' },
    { id: 2, title: '나의 쓰기', icon: 'writing', path: null },
    { id: 3, title: '스크랩', icon: 'scrap', path: null },
    { id: 4, title: '체크리스트', icon: 'checklist', path: null },
    { id: 5, title: '캘린더', icon: 'calendar', path: null } //이후 path 추가 예정
  ]);

  const handleLogoutClick = () => {
    setModalContent('로그아웃 하시겠습니까?');
    setModalActions({
      text1: '취소',
      text2: '확인',
      onCancel: () => setModalVisible(false),
      onConfirm: () => confirmLogout()
    });
    setModalVisible(true);
  };

  const confirmLogout = () => {
    console.log("User logged out");
    setModalVisible(false);
    setConfirmModalVisible(true);
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

  const confirmDeletion = () => {
    setModalVisible(false);
    setConfirmModalVisible(true);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalVisible(false);
  };

return (
  <PageWrapper>
    <PageHeader>마이페이지</PageHeader>
    <MyPageContainer>
      <UserGreeting>
        <StyledPerson1 style={{ width: '165.64px', height: '163.17px'}}/>
        <GreetingContainer>
          <UserName>{userInfo.name}</UserName>
          <NameSuffix>님,</NameSuffix>
        </GreetingContainer>
        <AdditionalGreeting>안녕하세요!</AdditionalGreeting>
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
    </MyPageContainer>
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
        msg="로그아웃 되었어요"
        onConfirm={handleCloseConfirmModal}
      />
    )}
    {confirmModalVisible && (
      <ConfirmModal
        msg="회원탈퇴 처리가 완료되었어요"
        onConfirm={handleCloseConfirmModal}
      />
    )}
  </PageWrapper>
);
}

export default MyPage;








