import React, { useState, useEffect, useCallback} from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { ReactComponent as DropdownIcon } from '../assets/images/Dropdown.svg';
import { Theme } from '../styles/Theme'; 
import Paging from "../components/Paging";
import Header from "../components/Header";
import { ReactComponent as Bg1Icon } from '../assets/images/Bg1.svg'; 
import { ReactComponent as Bg2Icon } from '../assets/images/Bg2.svg';
import { ReactComponent as WarningIcon } from '../assets/images/Warning.svg';
import { ReactComponent as IeltsText } from '../assets/images/IeltsText.svg';
import { ReactComponent as ToeflText } from '../assets/images/ToeflText.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bg1IconWrap = styled.div`
  position: absolute;
  left: 0px;
  top: 470px;
`;

const Bg2IconWrap = styled.div`
  position: absolute;
  right: 0px;
  top: 900px;
`;

const Container = styled.div`
  width: 1424px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 155px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.Black};
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.RED04};
  margin-bottom: 40px;
  text-align: left;
`;

const grow = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const ExamTypeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 40px;

  button {
    border: none;
    font-size: 26px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;

    &.toefl, &.ielts {
      border: 2px solid #EAEAEA;
      border-radius: 50px;
      width: 215px;
      height: 215px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.WHITE};
      color: ${({ theme }) => theme.colors.GRAY02};
      box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }

    &.active.toefl {
      background-color: #FFF4F6;
      color: ${({ theme }) => theme.colors.RED04};
      border: 1px solid ${({ theme }) => theme.colors.RED03};
      animation: ${grow} 0.3s forwards;
    }

    &.active.ielts {
      background-color: #FFF4F6;
      color: ${({ theme }) => theme.colors.RED04};
      border: 1px solid ${({ theme }) => theme.colors.RED03};
      animation: ${grow} 0.3s forwards;
    }
  }
`;

const Notice = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.Black};
  margin-bottom: 40px;
  text-align: left;

  span {
    color: ${({ theme }) => theme.colors.RED04};
  }
`;

const MonthSelector = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  gap: 28px;

  button {
    border-radius: 35px;
    width: 137px;
    height: 66px;
    border: 1px solid #EAEAEA;
    color: ${({ theme }) => theme.colors.GRAY02};
    background-color: ${({ theme }) => theme.colors.WHITE};
    font-size: 24px;
    cursor: pointer;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.WHITE};
      background-color: ${({ theme }) => theme.colors.RED04};
      border: none;
    }
  }
`;

const ExamList = styled.div`
  width: 1424px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 20px;
`;

const ExamItem = styled.div`
  height: 221px;
  display: flex;
  background: ${({ theme }) => theme.colors.WHITE};
  border: 2px solid #EAEAEA;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: left;
  align-items: center;
  position: relative;

  .schedule{
    width: 177px;
    height: 219px;
    text-align: center;
    border-right: 1px solid #EAEAEA;
    height: 223px;
    border-radius: 15px;
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
  }
  .exam-date {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.RED04};
    margin-top: 70px;
    margin-bottom: 0px;
  }
  .exam-day {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.GRAY03};
    margin-top: 7px;
  }

 .exam-location{
    font-size: 28px;
    margin-left: 60px;
    margin-bottom: 0px;
    margin-top: 0px;
 }

 .exam-address{
    font-size: 20px;
    color: ${({ theme }) => theme.colors.GRAY03};
    margin-left: 60px;
    margin-top: 13px;
 }
 
 .exam-time{
    margin-left: 60px;
    font-weight: bold;
    font-size: 18px;
    background-color: #FFF4F6;
    color: #FF244A;
    border: 1px solid ${({ theme }) => theme.colors.RED03};
    width: 121px;
    height: 41px;
    border-radius: 50px;
    text-align: center;
    line-height: 40px;
 }
 .exam-kind{
    margin-left: 20px;
    font-weight: bold;
    font-size: 18px;
    background-color: #FFF4F6;
    color: #FF244A;
    border: 1px solid ${({ theme }) => theme.colors.RED03};
    width: 121px;
    height: 41px;
    border-radius: 50px;
    text-align: center;
    line-height: 40px;
 }

 .choice{
    display: flex;
    margin-left: 0px;
 }
  Button {
    position: absolute;
    top: 80px;
    right: 90px;
    width: 229px;
    height: 55px;
    font-size: 20px;
    background: #F8F9FA;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.BLACK};
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
`;

const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.BLACK};
  border: 1px solid #C3C3C3;
  border-bottom: ${props => (props.$isOpen ? 'none' : '1px solid #C3C3C3')};
  box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.2);
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  border-radius: ${props => (props.$isOpen ? '30px 30px 0 0' : '30px')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 154px;
  height: 56px;

  svg {
    margin-left: 10px;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.$show ? 'block' : 'none')};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.GRAY02};
  border-top: none;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 3;
  border-radius: 0 0 30px 30px;
  max-height: 560px; /* 최대 높이 설정 */
  overflow-y: auto;

  button {
    background: none;
    border: none;
    width: 148px;
    height: 56px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    border-top: none;

    &:hover {
      background-color: #FFF5F7;
      color: ${({ theme }) => theme.colors.RED04};
    }

    &:last-child:hover {
      border-radius: 0 0 30px 30px;
    }
  }
`;


const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  align-items: center; 
  margin-top: 67px;
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 315px;
`;

const ArrowButtonContainer2 = styled.div`
  display: flex;
  gap: 20px;
`;

const ArrowButton = styled.a`
  color: ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  text-decoration: none;
  border-radius: 50px;
  width: 280.83px;
  height: 58px;
  font-size: 20px;
  text-align: center;
  line-height: 55px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.RED04};
    color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid ${({ theme }) => theme.colors.RED04};
  }
`;

const ArrowButton1 = styled(Link)`
  color: ${({ theme }) => theme.colors.RED04};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid ${({ theme }) => theme.colors.RED04};
  text-decoration: none;
  border-radius: 50px;
  width: 280.83px;
  height: 58px;
  font-size: 20px;
  text-align: center;
  line-height: 55px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.RED04};
    color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid ${({ theme }) => theme.colors.RED04};
  }
`;

const PagingWrapper = styled.div`
  margin-top: 50px; 
  margin-bottom: 90px; 
`;

const Overlay = styled.div`
  position: fixed;
  top: 88px; 
  left: 0;
  width: 100%;
  height: calc(100% - 88px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: ${props => (props.show ? 'block' : 'none')};
`;

function LanguagePage() {
  const [selectedExamType, setSelectedExamType] = useState('토플');
  const [selectedMonth, setSelectedMonth] = useState(7);
  const [examData, setExamData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState({ testArea: false, testType: false, ieltsType: false, testDate: false });

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedType, setSelectedType] = useState('전체');
  const [selectedDateRange, setSelectedDateRange] = useState('전체');

  const isDropdownOpen = Object.values(dropdownOpen).some(open => open);
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 4;

  const isDateInRange = (date) => {
    const day = date.split('-')[2];
    return selectedDateRange === '전체' || selectedDateRange === day;
  };

  const fetchExamData = useCallback(async () => {
    try {
      const response = await axios.get('http://43.200.144.133:8080/api/v1/engTest/getAll', {
        params: {
          category: selectedExamType === '토플' ? 'TOEFL' : 'IELTS',
          area: selectedRegion !== '전체' ? selectedRegion : undefined,
          type: selectedType !== '전체' ? selectedType.toUpperCase() : undefined,
          date: selectedDateRange !== '전체' ? `2024-07-${selectedDateRange}일` : undefined,
        },
      });
      console.log('API Response:', response.data);
      setExamData(response.data);
    } catch (err) {
      console.error(err);
    }
  }, [selectedExamType, selectedRegion, selectedType, selectedDateRange]);
  
  useEffect(() => {
    fetchExamData();
}, [fetchExamData, selectedMonth, selectedRegion, selectedType, selectedDateRange]);

  const filterExams = () => {
    return examData.filter(exam => {
      const isCategoryMatch = selectedExamType === '전체' || exam.testCategory === (selectedExamType === '토플' ? 'TOEFL' : 'IELTS');
      const isRegionMatch = selectedRegion === '전체' || exam.testArea === selectedRegion;
      const isTypeMatch = selectedType === '전체' || exam.testType === selectedType.toUpperCase();  
      const isMonthMatch = selectedMonth === new Date(exam.testDate).getMonth() + 1;
      const isDateMatch = isDateInRange(exam.testDate);
      return isCategoryMatch && isRegionMatch && isTypeMatch && isMonthMatch && isDateMatch;
    });
  };
  
  const filteredExamData = filterExams();
  const displayedExams = filteredExamData.slice((currentPage - 1) * contentPerPage, currentPage * contentPerPage);

  const handleRegionSelect = (testArea) => {
    setSelectedRegion(testArea);
    setDropdownOpen(prevState => ({ ...prevState, testArea: false }));
  };

  const handleDateRangeSelect = (day) => {
    setSelectedDateRange(day.toString().padStart(2, '0')); // 선택한 날짜를 두 자리로 설정
    setDropdownOpen(prevState => ({ ...prevState, testDate: false }));
  };

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const handleExamTypeSelect = (examType) => {
    setSelectedExamType(examType);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(prevState => ({ ...prevState, testType: false }));
  };

  const formatDate = (date) => {
    const day = date.split('-')[2]; // 'YYYY-MM-DD' 형식에서 'DD' 부분만 추출
    return day.startsWith('0') ? day.substring(1) : day; // '0'으로 시작하면 제거
  };
  
  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const period = hourInt < 12 ? '오전' : '오후';
    const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
    return `${period} ${formattedHour}:${minute}`;
  };
  
  const getExamLink = () => {
    if (selectedExamType === '토플') {
      return "https://www.kr.ets.org/toefl/test-takers/ibt/schedule.html";
    } else if (selectedExamType === '아이엘츠') {
      return "https://ieltskorea.org/korea/test-dates";
    }
  };

  const getExamLink2 = (examType) => {
    if (examType === '토플') {
      return "https://www.kr.ets.org/toefl/test-takers/ibt/schedule.html/engTest/{testId}";
    } else if (examType === '아이엘츠') {
      return "https://ieltskorea.org/korea/test-dates";
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Bg1IconWrap>
        <Bg1Icon src="../assets/images/Bg1.svg" alt="bg1" />
      </Bg1IconWrap>
      <Bg2IconWrap>
        <Bg2Icon src="../assets/images/Bg2.svg" alt="bg2" />
      </Bg2IconWrap>
      <Container>
        <Overlay show={isDropdownOpen} onClick={() => setDropdownOpen({ testArea: false, type: false, ieltsType: false, date: false })} />
        <Title>어학 시험 일정</Title>
        <Subtitle>원하는 시험 일정을 미리 캘린더에 추가할 수 있어요!</Subtitle>
        <ExamTypeSelector>
          <button
            className={`toefl ${selectedExamType === '토플' ? 'active' : ''}`}
            onClick={() => handleExamTypeSelect('토플')}
          >
            토플
          </button>
          <button
            className={`ielts ${selectedExamType === '아이엘츠' ? 'active' : ''}`}
            onClick={() => handleExamTypeSelect('아이엘츠')}
          >
            아이엘츠
          </button>
        </ExamTypeSelector>
        <Notice>2024년 <span>{selectedExamType}</span> 시험 일정</Notice>
        <MonthSelector>
          {[7, 8, 9, 10, 11, 12].map(month => (
            <button
              key={month}
              className={selectedMonth === month ? 'active' : ''}
              onClick={() => setSelectedMonth(month)}
            >
              {month}월
            </button>
          ))}
        </MonthSelector>
        <DropdownWrapper>
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown('testArea')} $isOpen={dropdownOpen.testArea}>
              {selectedRegion}
              <DropdownIcon />
            </DropdownButton>
            <DropdownContent $show={dropdownOpen.testArea}>
              <button onClick={() => handleRegionSelect('전체')}>전체</button>
              <button onClick={() => handleRegionSelect('서울')}>서울</button>
              <button onClick={() => handleRegionSelect('인천')}>인천</button>
              <button onClick={() => handleRegionSelect('경기')}>경기</button>
              <button onClick={() => handleRegionSelect('충청')}>충청</button>
              <button onClick={() => handleRegionSelect('강원')}>강원</button>
              <button onClick={() => handleRegionSelect('전라')}>전라</button>
              <button onClick={() => handleRegionSelect('경상')}>경상</button>
              <button onClick={() => handleRegionSelect('제주')}>제주</button>
            </DropdownContent>
          </DropdownContainer>
          {selectedExamType === '토플' && (
            <DropdownContainer>
             <DropdownButton onClick={() => toggleDropdown('testType')} $isOpen={dropdownOpen.testType}>
              {selectedType}
              <DropdownIcon />
            </DropdownButton>
            <DropdownContent $show={dropdownOpen.testType}>
              <button onClick={() => handleTypeSelect('전체')}>전체</button>
              <button onClick={() => handleTypeSelect('Paper')}>Paper</button>
              <button onClick={() => handleTypeSelect('Home')}>Home</button>
            </DropdownContent>
            </DropdownContainer>
          )}
          {selectedExamType === '아이엘츠' && (
            <DropdownContainer>
              <DropdownButton onClick={() => toggleDropdown('ieltsType')} $isOpen={dropdownOpen.ieltsType}>
                {selectedType}
                <DropdownIcon />
              </DropdownButton>
              <DropdownContent $show={dropdownOpen.ieltsType}>
                <button onClick={() => handleTypeSelect('전체')}>전체</button>
                <button onClick={() => handleTypeSelect('Paper')}>Paper</button>
                <button onClick={() => handleTypeSelect('Computer')}>Computer</button>
              </DropdownContent>
            </DropdownContainer>
          )}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown('testDate')} $isOpen={dropdownOpen.testDate}>
             {selectedDateRange === '전체' ? '전체' : `${selectedDateRange}일`}
              <DropdownIcon />
            </DropdownButton>
            <DropdownContent $show={dropdownOpen.testDate}>
              <button onClick={() => handleDateRangeSelect('전체')}>전체</button>
              {[...Array(31).keys()].map(day => (
                <button
                  key={day + 1}
                  onClick={() => handleDateRangeSelect(day + 1)}
                >
                  {day + 1}일
                </button>
              ))}
            </DropdownContent>
          </DropdownContainer>
          <ArrowButtonContainer>
          <ArrowButton href={getExamLink()}>시험 신청 바로가기 ↗</ArrowButton>
            <ArrowButton1 to="/calender">캘린더에 기록하기 ↗</ArrowButton1>
          </ArrowButtonContainer>
        </DropdownWrapper>
        {filteredExamData.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '220px', marginBottom: '370px' }}>
            {selectedExamType === '토플' && selectedType === 'Home' ? (
              <>
                <div style={{ marginBottom: '50px' }}>
                  <ToeflText width="723" height="192" />
                </div>
                <ArrowButtonContainer2>
                  <ArrowButton href="https://www.kr.ets.org/toefl/test-takers/ibt/schedule.html">시험 신청 바로가기 ↗</ArrowButton>
                </ArrowButtonContainer2>
              </>
            ) : selectedExamType === '아이엘츠' && selectedType === 'Computer' ? (
              <>
                <div style={{ marginBottom: '50px' }}>
                  <IeltsText width="723" height="192" />
                </div>
                <ArrowButtonContainer2>
                  <ArrowButton href="https://ieltskorea.org/korea/test-dates">시험 신청 바로가기 ↗</ArrowButton>
                </ArrowButtonContainer2>
              </>
            ) : (
              <WarningIcon width="442" height="279" />
            )}
          </div>
        ) : (
          <>
            <ExamList>
              {displayedExams.map((exam, index) => (
                <ExamItem key={index}>
                  <div className="schedule">
                  <h3 className="exam-date">{formatDate(exam.testDate)}일</h3>
                    <h3 className="exam-day">{['일', '월', '화', '수', '목', '금', '토'][new Date(exam.testDate).getDay()]}요일</h3>
                  </div>
                  <div className="substance">
                    <div className="choice">
                      <p className="exam-time">{formatTime(exam.testTime)}</p>
                      <p className="exam-kind">{exam.testType}</p>
                    </div>
                    <h3 className="exam-location">{exam.testPlaceName}</h3>
                    <p className="exam-address">{exam.testPlaceAddress}</p>
                  </div>
                  <button onClick={() => window.location.href = getExamLink2(selectedExamType)}>시험 신청 바로가기</button>
                </ExamItem>
              ))}
            </ExamList>
            <PagingWrapper>
              <Paging
                page={currentPage}
                count={filteredExamData.length}
                setPage={setPage}
                contentPerPage={contentPerPage}
              />
            </PagingWrapper>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default LanguagePage;