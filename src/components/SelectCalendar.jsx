import React from "react";
import { ReactComponent as NextIcon } from "../assets/images/MonoNextMonth.svg";
import { ReactComponent as PrevIcon } from "../assets/images/MonoPrevMonth.svg";
import Calendar from "react-calendar";
import { StyledSelectCalendarWrapper } from "../styles/StyledSelectCalendar";

const SelectCalendar = ({ onChange, value, setIsOpen }) => {
  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    // setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };
  return (
    <>
      <StyledSelectCalendarWrapper>
        <Calendar
          onChange={handleDateChange}
          value={value}
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
          // tileContent={({ date, view }) => {
          //   let html = [];
          //   const dayEvents = getEventsForDate(date);
          //   dayEvents.forEach((event, index) => {
          //     let momentDate = moment(
          //       date,
          //       "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (한국 표준시)"
          //     );
          //     momentDate = moment(momentDate).format("YYYY-MM-DD");
          //     const isStartDate = event.startDate === momentDate;
          //     const isEndDate = event.endDate === momentDate;
          //     html.push(
          //       <StyledScheduleLine
          //         key={event.scheduleId}
          //         color={
          //           event.scheduleCategory === "VISA"
          //             ? "#D2AEFF"
          //             : event.scheduleCategory === "TEST"
          //             ? "#FFCA63"
          //             : "#63E3FF"
          //         }
          //         style={{ top: `${(index + 1) * 45}px` }}
          //         $isStartDate={isStartDate}
          //         $isEndDate={isEndDate}
          //         onClick={() => handleEventClick(event)}
          //       >
          //         {event.startDate === momentDate ? event.content : null}
          //       </StyledScheduleLine>
          //     );
          //   });
          //   return <>{html}</>;
          // }}
        />
      </StyledSelectCalendarWrapper>
    </>
  );
};

export default SelectCalendar;
