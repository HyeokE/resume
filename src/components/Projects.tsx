import React from 'react';
import { ProjectList, ProjectProps } from '../contents/project';
import {
  PeriodMark,
  Project,
  Role,
  Row,
  RowLeft,
  RowRight,
  StyledA,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledLi,
  StyledP,
  StyledSection,
  StyledUl,
  Time,
} from '../styled';

const Projects = ({
  data,
  type,
}: {
  data: ProjectList;
  type: 'WORK' | 'PROJECT';
}) => {
  return (
    <StyledSection>
      <StyledH2>
        {type === 'WORK' ? 'Work Experience' : 'Project Experience'}
        <PeriodMark>.</PeriodMark>
      </StyledH2>
      {data.map((project, id) => (
        <Row key={id}>
          <RowLeft>
            <StyledH3>
              {project.title}
              <PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>{project.role}</Role>
            <Time>{project.time}</Time>
          </RowLeft>
          <RowRight>
            {project.projects.map((project, id) => (
              <Project key={`project${id}`}>
                <StyledH4>
                  {project.name}
                  <PeriodMark>.</PeriodMark>
                </StyledH4>
                {project.link && (
                  <Role>
                    {project.link.map((data, id) => (
                      <StyledA
                        target="_blank"
                        href={data.link}
                        rel="noreferrer"
                        key={id}
                      >
                        {data.name}
                      </StyledA>
                    ))}
                  </Role>
                )}
                {project.role && <Role>팀 구성: {project.role}</Role>}
                <Time>{project.duration}</Time>

                <StyledH5>
                  Description<PeriodMark>.</PeriodMark>
                </StyledH5>
                <StyledP>{project.description}</StyledP>
                {project.WhatIDid && (
                  <>
                    <StyledH5>
                      What I did<PeriodMark>.</PeriodMark>
                    </StyledH5>
                    <StyledUl>
                      {project.WhatIDid.map((did, id) => (
                        <StyledLi key={id}>{did}</StyledLi>
                      ))}
                    </StyledUl>
                  </>
                )}
                {project.WhatDidILearn && (
                  <>
                    <StyledH5>
                      What did I Learn<PeriodMark>.</PeriodMark>
                    </StyledH5>
                    <StyledUl>
                      {project.WhatDidILearn.map((learn, id) => (
                        <StyledLi key={id}>{learn}</StyledLi>
                      ))}
                    </StyledUl>
                  </>
                )}
                <StyledH5>
                  TechStack<PeriodMark>.</PeriodMark>
                </StyledH5>
                <p>{project.techStack}</p>
              </Project>
            ))}
          </RowRight>
        </Row>
      ))}
    </StyledSection>
  );
};

export default Projects;
