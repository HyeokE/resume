import React from 'react';
import { ExperienceType } from '../contents/experience';
import {
  Other,
  PeriodMark,
  Role,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSection,
  StyledUl,
  Time,
} from '../styled';

const Experience = ({ data }: { data: ExperienceType }) => {
  return (
    <StyledSection>
      <StyledH2>
        {data.title}
        <PeriodMark>.</PeriodMark>
      </StyledH2>
      {data.data.map((experience, id) => (
        <Other key={id}>
          <StyledH3>
            {experience.title}
            <PeriodMark>.</PeriodMark>
          </StyledH3>
          <Role>{experience.role}</Role>
          <Time>{experience.time}</Time>
          <StyledP>{experience.description}</StyledP>
          {experience.content && (
            <StyledUl>
              {experience.content.map((data, id) => (
                <li key={id}>{data}</li>
              ))}
            </StyledUl>
          )}
        </Other>
      ))}
    </StyledSection>
  );
};

export default Experience;
