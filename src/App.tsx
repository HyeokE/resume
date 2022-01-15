import React from 'react';
import './App.css';
import {
  BigParagraph,
  Container,
  GithubImg,
  ImageWrapper,
  OtherWrapper,
  PeriodMark,
  ProjectWrapper,
  Role,
  Row,
  RowLeft,
  RowRight,
  StyledA,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledHr,
  StyledLi,
  StyledP,
  StyledSection,
  StyledUl,
  TimeWrapper,
} from './styled';
import github from './img/github.svg';

function App() {
  return (
    <Container>
      <StyledSection>
        <StyledH1>
          반갑습니다,
          <br />
          저는 정준혁입니다<PeriodMark>.</PeriodMark>
        </StyledH1>
        <BigParagraph>
          웹 프론트개발자를 희망하며 사용자의 경험을 우선시하는 UI를 구현하는
          것을 좋아합니다. 이론보단 실전으로 부딪히며 학습하는 것이 가장
          효율적인 공부방법이라고 생각합니다. 주도적으로 업무를 진행할 수 있는
          환경을 선호합니다.
        </BigParagraph>
      </StyledSection>
      <StyledSection>
        <StyledH2>
          Project Experience<PeriodMark>.</PeriodMark>
        </StyledH2>
        <Row>
          <RowLeft>
            <StyledH3>
              GoogleDSC<PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>Frontend Developer</Role>
            <span>
              <time>2019. 07</time> - 현재{' '}
            </span>
          </RowLeft>
          <RowRight>
            <ProjectWrapper>
              <StyledH4>
                Devfest [GDG X GDSC]
                <PeriodMark>.</PeriodMark>
                <Role>개발자의 축제 DevFest.</Role>
              </StyledH4>

              <TimeWrapper>
                <time>2019. 10. 05 - 2019. 10. 26</time>
              </TimeWrapper>
              <StyledA href={'https://github.com/HyeokE/gdsc-dju-web-ts'}>
                Github
              </StyledA>
              <StyledA href={'https://github.com/HyeokE/gdsc-dju-web-ts'}>
                SiteLink
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                GDG Korea에서 진행하는{' '}
                <StyledA href="https://www.festa.io" target="_blank">
                  Devfest
                </StyledA>
                의 Session 출석부 제작에 프론트엔드 개발자 3명 중 한 명으로
                참여하였습니다. 프로젝트 완료일까지 10일 남은 상황에서 진행한
                프로젝트로 행사 진행 중에도 추가적인 이슈에 대응하며
                진행했습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>로그인, 로그아웃 관련 Modal 제작</StyledLi>
                <StyledLi>유저 프로필, 프로필 수정 제작</StyledLi>
                <StyledLi>알림 관련 Alert 제작</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learned<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>React.js의 폴더구조</StyledLi>
                <StyledLi>Type, const assertion, union</StyledLi>
                <StyledLi>Commit Convention</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                TypeScript, React.js, Styled-component, Recoil, SWR, Axios
              </StyledP>
            </ProjectWrapper>
            <ProjectWrapper>
              <StyledH4>
                GoogleDSC DJU Website
                <PeriodMark>.</PeriodMark>
              </StyledH4>

              <TimeWrapper>
                <time>2021.10.29 ~ 현재</time>
              </TimeWrapper>
              <StyledA href={'https://github.com/HyeokE/gdsc-dju-web-ts'}>
                Github
              </StyledA>
              <StyledA href={'https://gdsc-dju.web.app/'}>SiteLink</StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                이전 프로젝트를 진행 후 1인 개발로 제작한 소개 사이트 입니다.
                제작 이후 지원자가 50% 증가했습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>반복되는 코드 Component로 분리작업</StyledLi>
                <StyledLi>
                  사이트에서 사용되는 컬러 및 디자인으로 디자인 에셋 제작
                </StyledLi>
                <StyledLi>운영진용 Admin 제작</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learned<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>Firebase Key 노출방지</StyledLi>
                <StyledLi>Styled-Component Props 전달</StyledLi>
                <StyledLi>Yup, formik</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                TypeScript, React.js, Styled-component, Recoil, firestore,
                firebase Hosting
              </StyledP>
            </ProjectWrapper>
            <ProjectWrapper>
              <StyledH4>
                Onboarding page
                <PeriodMark>.</PeriodMark>
              </StyledH4>
              <TimeWrapper>
                <time>2021.12.05 ~ 2021.12.29</time>
              </TimeWrapper>
              <StyledA
                href={
                  'https://github.com/HyeokE/gdsc-dju-web-ts/tree/master/src/pages/OnBoarding'
                }
              >
                Github
              </StyledA>
              <StyledA href={'https://gdsc-dju.web.app/onboarding'}>
                SiteLink
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                소개페이지에 onboarding route로 신규멤버의 정보를 받기 위한
                Onboarding 페이지입니다. 사용자의 경험에 초점을 두고 개발을
                진행했습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>nickname, gmail, major, interest page 제작</StyledLi>
                <StyledLi>boarding pass</StyledLi>
                <StyledLi>Nickname Validation</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learned<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>CORS 오류</StyledLi>
                <StyledLi>Framer-Motion</StyledLi>
                <StyledLi>무료 도메인 이슈</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                TypeScript, React.js, Styled-component, Recoil, SWR, axios
              </StyledP>
            </ProjectWrapper>
          </RowRight>
        </Row>
        <Row>
          <RowLeft>
            <StyledH3>
              Team OZET<PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>Frontend Developer</Role>
            <span>
              <time>2019. 07</time> - 현재{' '}
            </span>
          </RowLeft>
          <RowRight>
            <ProjectWrapper>
              <StyledH4>
                OZET
                <PeriodMark>.</PeriodMark>
                <Role>미용사들을 위한 이력서 플랫폼.</Role>
              </StyledH4>

              <TimeWrapper>
                <time>2019. 10. 05 - 2019. 10. 26</time>
              </TimeWrapper>
              <StyledA href={'https://github.com/HyeokE/gdsc-dju-web-ts'}>
                Github
              </StyledA>
              <StyledA href={'https://github.com/HyeokE/gdsc-dju-web-ts'}>
                SiteLink
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                미용사들을 위한 이력서 플랫폼으로 프론트엔드 2명 중 1명으로
                참여하였습니다. Web View로 제작이 되었으며 상세공고 페이지,
                이력서 페이지, 이력서 pdf를 제작하였습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>반응형 이력서 페이지</StyledLi>
                <StyledLi>상세공고 페이지</StyledLi>
                <StyledLi>알림 관련 Alert 제작</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learned<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>useRef</StyledLi>
                <StyledLi>JWT 토큰</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                TypeScript, React.js, Styled-component, Recoil, SWR, Axios,
                carrot frame
              </StyledP>
            </ProjectWrapper>
          </RowRight>
        </Row>
      </StyledSection>

      <StyledSection>
        <StyledH2>
          Other Experiences<PeriodMark>.</PeriodMark>
        </StyledH2>
        <OtherWrapper>
          <StyledH3>
            GoogleDSC Korea<PeriodMark>.</PeriodMark>
          </StyledH3>
          <Role>Daejin University Lead</Role>
          <TimeWrapper>
            <time>2019. 07.</time> - 현재
          </TimeWrapper>
          <StyledP>
            Google Developers에서 지원하는{' '}
            <StyledA
              href={'https://sites.google.com/view/gdeveloperskorea/gdsc'}
            >
              GoogleDSC
            </StyledA>
            Daejin University 챕터의 리드를 맡고 있습니다. 멤버 분들에게
            프로젝트 및 스터디 가이드라인을 드리고 내부 행사를 기획,
            진행하였습니다.
          </StyledP>
        </OtherWrapper>
      </StyledSection>
      <StyledSection>
        <StyledH2>
          Skills<PeriodMark>.</PeriodMark>
        </StyledH2>
        <OtherWrapper>
          <StyledH3>
            Overall<PeriodMark>.</PeriodMark>
          </StyledH3>
          <StyledUl>
            <StyledLi>
              아름다운 UI 및 애니메이션 구현을 즐깁니다. 꼭 애니메이션이
              디자인에 포함되어 있지 않아도 선행해서 애니메이션을 구현하며
              제안하는 편입니다.
            </StyledLi>
            <StyledLi>
              프로젝트에 필요하다면 능숙한 분야가 아니더라도 적극적으로 미리
              탐색하여 최적의 결과를 낼 수 있도록 노력합니다.
            </StyledLi>
            <StyledLi>
              커뮤니티 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를
              적극적으로 하며 아이디어의 수용이 빠릅니다.
            </StyledLi>
            <StyledLi>솔직하며 직설적인 커뮤니케이션을 선호합니다.</StyledLi>
          </StyledUl>
        </OtherWrapper>

        <OtherWrapper>
          <StyledH3>
            Communication<PeriodMark>.</PeriodMark>
          </StyledH3>
          <StyledUl>
            <StyledLi>
              직위 및 포지션에 관계없이 적극적으로 생각을 피력합니다.
            </StyledLi>
            <StyledLi>항상 자신이 틀렸을 수도 있다는 생각을 합니다.</StyledLi>
            <StyledLi>
              커뮤니케이션은 적은 것보다는 많은게 좋다고 믿습니다.
            </StyledLi>
            <StyledLi>
              프로덕트의 기획 회의부터 참여하는 것을 선호합니다.
            </StyledLi>
          </StyledUl>
        </OtherWrapper>
      </StyledSection>

      <StyledSection>
        <StyledH2>
          Contact<PeriodMark>.</PeriodMark>
        </StyledH2>
        <StyledUl>
          <StyledLi>
            <StyledA href="mailto:jhjeong00@gmail.com">이메일</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA
              href="https://velog.io/@jhjeong00"
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
        </StyledUl>
      </StyledSection>
    </Container>
  );
}

export default App;
