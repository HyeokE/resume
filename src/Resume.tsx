import React from 'react';
import Projects from './components/Projects';
import { projectData } from './contents/project';
import {
  BigParagraph,
  Container,
  Other,
  PeriodMark,
  StyledA,
  StyledH1,
  StyledH2,
  StyledLi,
  StyledSection,
  StyledUl,
} from './styled';
import Communication from './components/Communciation';
import { communicationData } from './contents/communication';
import Experience from './components/Experience';
import { experienceData } from './contents/experience';
import { workExperience } from './contents/workExperience';

const Resume = () => {
  return (
    <Container>
      <StyledSection>
        <StyledH1>
          반갑습니다 <br />
          저는 정준혁입니다<PeriodMark>.</PeriodMark>
        </StyledH1>
        <BigParagraph>
          문제를 정의하고 해결하는데 강점이 있습니다. <br />
          사용자를 먼저 생각하고 사용자의 불편함을 해소하는데 집중합니다.
          <br />
          프론트엔드는 사용자에게 가장 맞닿은 직군이라고 생각하기 때문에
          사용자의 문제를 해결하기 위한 개발을 하고 있습니다.
        </BigParagraph>
      </StyledSection>
      <Projects data={workExperience} type={'WORK'} />
      <Projects data={projectData} type={'PROJECT'} />
      <Communication data={communicationData} />
      <Experience data={experienceData} />
      <StyledSection>
        <Other>
          <StyledH2>
            Contact<PeriodMark>.</PeriodMark>
          </StyledH2>
          <StyledUl>
            <StyledLi>
              <StyledA href="mailto:jhjeong00@gmail.com">이메일</StyledA>
            </StyledLi>
            <StyledLi>
              <StyledA
                href="https://hyeok.dev/"
                target="_blank"
                rel="noreferrer"
              >
                블로그
              </StyledA>
            </StyledLi>
            <StyledLi>
              <StyledA
                href="https://github.com/HyeokE"
                target="_blank"
                rel="noreferrer"
              >
                깃허브
              </StyledA>
            </StyledLi>
            <StyledLi>현재 산업기능요원(보충역)으로 복무 중입니다.</StyledLi>
          </StyledUl>
        </Other>
      </StyledSection>
    </Container>
  );
};

export default Resume;
