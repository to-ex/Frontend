import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const StyledSelectCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 354px;
    height: 444px;
    border: 1px red solid;
    background-color: white;
    border-radius: 20px;
    padding: 28px 30px 36px 30px;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: #939393;
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
    margin-top: -12px;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 600;
    font-size: 24px;
  }

  /* 네비게이션 가운데 버튼(7월) 마진 조정 */
  .react-calendar__navigation button:nth-of-type(2) {
    margin: 14px 0;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: #000;
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑에 마진 */
  .react-calendar__month-view__weekdays {
    /* margin-top: 38px; */
    margin-bottom: 18px;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 600;
    color: #333333;
    font-size: 20px;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${({ theme }) => theme.colors.RED04};
    }
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    /* padding: 5px 0px 18px; */
    /* width: 211px; */
    /* height: 206px; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .react-calendar__tile abbr {
    /* font-size: 24px; */
    font-weight: 700;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: white;
  }
`;
