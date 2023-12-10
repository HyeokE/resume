import React, { ReactNode } from 'react';
import { PeriodMark, StyledH5, StyledLi, StyledUl } from '../styled';

interface ProjectProps {
  title: string;
  lists: ReactNode[];
}
const H5Section = ({ title, lists }: ProjectProps) => {
  return (
    <>
      <StyledH5>
        {title}
        <PeriodMark>.</PeriodMark>
      </StyledH5>
      <StyledUl>
        {lists.map((did, id) => (
          <StyledLi key={id}>{did}</StyledLi>
        ))}
      </StyledUl>
    </>
  );
};

export default H5Section;
