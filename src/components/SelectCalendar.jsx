import React, { useState, useEffect } from "react";
import { ReactComponent as NextIcon } from "../assets/images/MonoNextMonth.svg";
import { ReactComponent as PrevIcon } from "../assets/images/MonoPrevMonth.svg";
import Calendar from "react-calendar";
import { StyledSelectCalendarWrapper } from "../styles/StyledSelectCalendar";
import moment from "moment";

const SelectCalendar = ({ calendarIsOpen, onDateChange }) => {
  const isOpen = calendarIsOpen;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (selectedDate) => {
    const start = moment(selectedDate[0]).format("YYYY-MM-DD");
    const end = moment(selectedDate[1]).format("YYYY-MM-DD");
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end); // 콜백 호출
  };

  useEffect(() => {
    if (startDate) {
      console.log("Start Date:", startDate);
    }
    if (endDate) {
      console.log("End Date:", endDate);
    }
  }, [startDate, endDate]);

  return (
    <>
      {isOpen && (
        <StyledSelectCalendarWrapper>
          <Calendar
            onChange={handleDateChange} // 변경된 부분
            formatMonthYear={(locale, date) =>
              date.toLocaleString("ko", { month: "numeric" })
            }
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            }
            prevLabel={<PrevIcon />}
            nextLabel={<NextIcon />}
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            calendarType="gregory"
            minDetail="month"
            maxDetail="month"
            selectRange={true}
          />
        </StyledSelectCalendarWrapper>
      )}
    </>
  );
};

export default SelectCalendar;
