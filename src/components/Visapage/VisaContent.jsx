import React from "react";
import { styled } from "styled-components";
import VisaDetail from "./VisaDetail";
import VisaStep from "./VisaStep";

const VisaContent = ({ selectedCountry }) => {
  return (
    <Container>
      <VisaStep country={selectedCountry} />
      <VisaDetail selcetedCountry={selectedCountry} />
    </Container>
  );
};

export default VisaContent;

const Container = styled.div`
  width: calc(100% - 494px);
  height: 200px;
  border-top: 1px solid ${({ theme }) => theme.colors.RED01};
  box-shadow: 0 -15px 20px 0 rgba(255, 36, 74, 0.03);
  border-radius: 100px;
  padding: 0 247px;
`;
