import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const StyledSelectCalendarWrapper = styled.div`
  z-index: 10000 !important;
  position: fixed;
  top: calc(50% + 50px);
  left: calc(50% - 120px);
  .react-calendar {
    width: 354px;
    height: 444px;
    background-color: white;
    border-radius: 20px;
    padding: 28px 30px 36px 30px;
    box-shadow: 0 3px 12px 0 rgba(00, 00, 00, 0.3);
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: #333333;
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
    margin: 0;
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

  .react-calendar__navigation button:hover {
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
    margin-top: 38px;
    margin-bottom: 20px;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 600;
    color: #333333;
    font-size: 20px;
  }

  abbr[title="토요일"] {
    color: #5c80ff;
  }
  abbr[title="일요일"] {
    color: #ff5c66;
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
    height: 35px;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: #ffecf0;
  }

  .react-calendar__month-view__days {
    width: 294px;
    display: flex;
    text-align: center;
    gap: 10px 0;
  }
  .react-calendar__month-view__days__day {
    abbr {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .react-calendar__tile--hover {
    background-color: #ffecf0 !important;
    abbr {
      color: #333333;
    }
  }
  .react-calendar__tile--rangeEnd {
    background-color: ${({ theme }) => theme.colors.RED04} !important;
    border-radius: 0 20px 20px 0;
    abbr {
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }

  .react-calendar__tile--rangeStart {
    border-radius: 20px 0 0 20px;
    background-color: ${({ theme }) => theme.colors.RED04} !important;
    abbr {
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }
`;
