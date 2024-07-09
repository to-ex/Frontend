import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { ReactComponent as DropdownIcon } from '../assets/images/Dropdown.svg';
import { Theme } from '../styles/Theme'; 
import Paging from "../components/Paging";
import { ReactComponent as Bg1Icon } from '../assets/images/Bg1.svg'; 
import { ReactComponent as Bg2Icon } from '../assets/images/Bg2.svg';
import { ReactComponent as WarningIcon } from '../assets/images/Warning.svg';

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
  margin-top: 88px;
  padding-top: 65px;
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
`;

const ExamItem = styled.div`
  height: 221px;
  display: flex;
  background: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid #EAEAEA;
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
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
  button {
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
  border: 1px solid ${({ theme }) => theme.colors.GRAY02};
  border-bottom: ${props => (props.$isOpen ? 'none' : '1px solid ${({ theme }) => theme.colors.GRAY02}')};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
  width: 280.83px;
  height: 58px;
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

const Arrow = styled.div`
  display: flex;
  margin-left: 314px;
  gap: 27px;
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

const dummyData = [
    { date: '1', day: '월', time: '10:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
    { date: '2', day: '화', time: '11:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
    { date: '3', day: '수', time: '12:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
    { date: '4', day: '목', time: '13:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
    { date: '5', day: '금', time: '14:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
    { date: '6', day: '토', time: '15:00', kind: 'paper', location: '강남 테스트 센터 (메이플넥스)', address: '서울특별시 강남구 테헤란로 223 큰길타워빌딩 지하 1층', region: '서울', type: '시험센터' },
];

function LanguagePage() {
    const [selectedExamType, setSelectedExamType] = useState('토플');
    const [selectedMonth, setSelectedMonth] = useState(6);
    const [examData, setExamData] = useState(dummyData); // 더미 데이터 사용
    const [dropdownOpen, setDropdownOpen] = useState({ region: false, type: false, ieltsType: false, date: false });
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [selectedType, setSelectedType] = useState('전체');
    const [selectedDateRange, setSelectedDateRange] = useState('전체');
    const isDropdownOpen = Object.values(dropdownOpen).some(open => open);

    const [currentPage, setCurrentPage] = useState(1);
    const contentPerPage = 3; 
    const count = examData.length;

    const isDateInRange = (date) => {
        const day = parseInt(date, 10);
        if (selectedDateRange === '1~10') {
            return day >= 1 && day <= 10;
        } else if (selectedDateRange === '11~20') {
            return day >= 11 && day <= 20;
        } else if (selectedDateRange === '21~31') {
            return day >= 21 && day <= 31;
        }
        return true; // '전체'인 경우
    };

    const filterExams = () => {
        return examData.filter(exam => {
            const isRegionMatch = selectedRegion === '전체' || exam.region === selectedRegion;
            const isTypeMatch = selectedType === '전체' || exam.type === selectedType;
            const isDateMatch = isDateInRange(exam.date);
            return isRegionMatch && isTypeMatch && isDateMatch;
        });
    };

    const filteredExamData = filterExams();
    const displayedExams = filteredExamData.slice((currentPage - 1) * contentPerPage, currentPage * contentPerPage);

    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setDropdownOpen(prevState => ({ ...prevState, region: false }));
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setDropdownOpen(prevState => ({ ...prevState, type: false }));
    };

    const handleDateRangeSelect = (range) => {
        setSelectedDateRange(range);
        setDropdownOpen(prevState => ({ ...prevState, date: false }));
    };

    const setPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <ThemeProvider theme={Theme}>
            <Bg1IconWrap>
              <Bg1Icon src="../assets/images/Bg1.svg" alt="bg1" />
            </Bg1IconWrap>
            <Bg2IconWrap>
              <Bg2Icon src="../assets/images/Bg2.svg" alt="bg2" />
            </Bg2IconWrap>
            <Container>
            <Overlay show={isDropdownOpen} onClick={() => setDropdownOpen({ region: false, type: false, ieltsType: false, date: false })} />
                <Title>어학 시험 일정</Title>
                <Subtitle>원하는 시험 일정을 미리 캘린더에 추가할 수 있어요!</Subtitle>
                <ExamTypeSelector>
                    <button
                        className={`toefl ${selectedExamType === '토플' ? 'active' : ''}`}
                        onClick={() => setSelectedExamType('토플')}
                    >
                        토플
                    </button>
                    <button
                        className={`ielts ${selectedExamType === '아이엘츠' ? 'active' : ''}`}
                        onClick={() => setSelectedExamType('아이엘츠')}
                    >
                        아이엘츠
                    </button>
                </ExamTypeSelector>
                <Notice>2024년 <span>{selectedExamType}</span> 시험 일정</Notice>
                <MonthSelector>
                    {[6, 7, 8, 9, 10, 11, 12].map(month => (
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
                        <DropdownButton onClick={() => toggleDropdown('region')} $isOpen={dropdownOpen.region}>
                            지역
                            <DropdownIcon />
                        </DropdownButton>
                        <DropdownContent $show={dropdownOpen.region}>
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
                            <DropdownButton onClick={() => toggleDropdown('type')} $isOpen={dropdownOpen.type}>
                                종류
                                <DropdownIcon />
                            </DropdownButton>
                            <DropdownContent $show={dropdownOpen.type}>
                                <button onClick={() => handleTypeSelect('전체')}>전체</button>
                                <button onClick={() => handleTypeSelect('시험센터')}>시험센터</button>
                                <button onClick={() => handleTypeSelect('홈에디션')}>홈에디션</button>
                            </DropdownContent>
                        </DropdownContainer>
                    )}
                    {selectedExamType === '아이엘츠' && (
                        <DropdownContainer>
                            <DropdownButton onClick={() => toggleDropdown('ieltsType')} $isOpen={dropdownOpen.ieltsType}>
                                종류
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
                        <DropdownButton onClick={() => toggleDropdown('date')} $isOpen={dropdownOpen.date}>
                            일정
                            <DropdownIcon />
                        </DropdownButton>
                        <DropdownContent $show={dropdownOpen.date}>
                            {[...Array(31).keys()].map(day => (
                                <button
                                    key={day + 1}
                                    onClick={() => handleDateRangeSelect(day + 1)}
                                    >
                                        {day + 1}
                                    </button>
                                ))}
                            </DropdownContent>
                        </DropdownContainer>
                        <Arrow>
                            <ArrowButtonContainer>
                                <ArrowButton href="#">시험 신청 바로가기 ↗</ArrowButton>
                            </ArrowButtonContainer>
                            <ArrowButtonContainer>
                                <ArrowButton href="#">캘린더에 추가하기 ↗</ArrowButton>
                            </ArrowButtonContainer>
                        </Arrow>
                    </DropdownWrapper>
                    {filteredExamData.length === 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '220px', marginBottom: '370px',}}>
                            <WarningIcon width="442" height="279"/>
                        </div>
                            ) : (
                            <>
                        <ExamList>
                            {displayedExams.map((exam, index) => (
                                <ExamItem key={index}>
                                    <div className="schedule">
                                        <h3 className="exam-date">{exam.date}일</h3>
                                        <h3 className="exam-day">{exam.day}요일</h3>
                                    </div>
                                    <div className="substance">
                                        <div className="choice">
                                            <p className="exam-time">{exam.time}</p>
                                            <p className="exam-kind">{exam.kind}</p>
                                        </div>
                                        <h3 className="exam-location">{exam.location}</h3>
                                        <p className="exam-address">{exam.address}</p>
                                    </div>
                                    <button>시험 신청 바로가기</button>
                                </ExamItem>
                            ))}
                        </ExamList>
                        <PagingWrapper>
                        <Paging
                        page={currentPage}
                        count={count}
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