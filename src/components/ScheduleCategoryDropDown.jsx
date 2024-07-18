import React, { useState } from "react";
import {
  StyledSelectBox,
  StyledOptionItem,
  StyledOptionList,
  StyledColorRound,
  StyledSelectedLabel,
} from "../styles/StyledDropDown";
import { ReactComponent as NoteIcon } from "../assets/images/NoteIcon.svg";

const ScheduleCategoryDropDown = ({ list, selected, isOpen }) => {
  const [selectedName, setSelectedName] = useState(selected);
  const [active, setActive] = useState(false);

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
                    setSelectedName(element.name);
                    setActive(false);
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
