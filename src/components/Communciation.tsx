import React from 'react';
import {
  Other,
  PeriodMark,
  StyledH2,
  StyledH3,
  StyledSection,
  StyledUl,
} from '../styled';
import { CommunicationList } from '../contents/communication';

const Communication = ({ data }: { data: CommunicationList }) => {
  return (
    <StyledSection>
      <StyledH2>
        Communication
        <PeriodMark>.</PeriodMark>
      </StyledH2>
      {data.map((communication, id) => (
        <Other key={id}>
          <StyledH3>
            {communication.title}
            <PeriodMark>.</PeriodMark>
          </StyledH3>
          <StyledUl>
            {communication.content.map((data, id) => (
              <li key={id}>{data}</li>
            ))}
          </StyledUl>
        </Other>
      ))}
    </StyledSection>
  );
};

export default Communication;
