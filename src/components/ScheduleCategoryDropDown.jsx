import React, { useState } from "react";
import {
  StyledSelectBox,
  StyledOptionItem,
  StyledOptionList,
  StyledColorRound,
  StyledSelectedLabel,
} from "../styles/StyledDropDown";
import { ReactComponent as NoteIcon } from "../assets/images/NoteIcon.svg";

const ScheduleCategoryDropDown = ({ selected, onCategoryChange }) => {
  const [selectedName, setSelectedName] = useState(selected);
  const [active, setActive] = useState(false);

  const list = [
    {
      index: 1,
      name: "비자",
      scheduleCategory: "VISA",
      oncolor: "#D2AEFF",
      offcolor: "rgba(210, 174, 255, 0.3)",
    },
    {
      index: 2,
      name: "어학",
      scheduleCategory: "TEST",
      oncolor: "#FFCA63",
      offcolor: "rgba(255, 202, 99, 0.3)",
    },
    {
      index: 3,
      name: "기타",
      scheduleCategory: "ETC",
      oncolor: "#63E3FF",
      offcolor: "rgba(99, 227, 255, 0.3)",
    },
  ];

  const handleCategorySelect = (name) => {
    setSelectedName(name);
    setActive(false);
    onCategoryChange(name); // 콜백 호출
  };
  return (
    <>
      <StyledSelectedLabel onClick={() => setActive(!active)}>
        <NoteIcon />
        <span>{selectedName}</span>
      </StyledSelectedLabel>

      {active && (
        <>
          <StyledSelectBox>
            <StyledOptionList>
              {list.map((element) => (
                <StyledOptionItem
                  key={element.index}
                  $index={element.index}
                  onClick={() => {
                    handleCategorySelect(element.name);
                  }}
                  $isSelected={selectedName === element.name}
                >
                  <StyledColorRound
                    key={element.index}
                    color={element.oncolor}
                  />
                  {element.name}
                </StyledOptionItem>
              ))}
            </StyledOptionList>
          </StyledSelectBox>
        </>
      )}
    </>
  );
};

export default ScheduleCategoryDropDown;
