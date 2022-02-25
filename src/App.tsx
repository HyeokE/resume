import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BigParagraph,
  Container,
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

function App() {
  return (
    <Container>
      <StyledSection>
        <StyledH1>
          반갑습니다.
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
              <time>2021. 07</time> - 현재{' '}
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
                <time>2021. 10. 05 - 2021. 10. 26</time>
              </TimeWrapper>
              <StyledA
                target="_blank"
                href={
                  'https://github.com/devfest-2021/devfest-2021-guidebook-fe'
                }
              >
                Github
              </StyledA>
              <StyledA
                target="_blank"
                href={'https://devfest-2021-guestbook.netlify.app/'}
              >
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
                출석부 제작에 프론트엔드 개발자 3명 중 한 명으로 참여하였습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>로그인, 로그아웃 관련 Modal 제작</StyledLi>
                <StyledLi>유저 프로필, 프로필 수정 제작</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learn<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>백엔드와의 커뮤니케이션</StyledLi>
                <StyledLi>Commit Convention</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                React, TypeScript, Styled-component, Recoil, SWR, Axios
              </StyledP>
            </ProjectWrapper>
            <ProjectWrapper>
              <StyledH4>
                GDSC DJU Website
                <PeriodMark>.</PeriodMark>
              </StyledH4>
              <TimeWrapper>
                <time>2021.10.29 - 현재</time>
              </TimeWrapper>
              <StyledA
                target="_blank"
                href={'https://github.com/HyeokE/gdsc-dju-web-ts'}
              >
                Github
              </StyledA>
              <StyledA target="_blank" href={'https://gdsc-dju.web.app/'}>
                SiteLink
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                이전 프로젝트를 진행 후 1인 개발로 제작한 소개 사이트 입니다.
                제작 이후 지원자가 50% 증가했습니다. 코드 리팩토링을 하며
                React-lazy를 통한 최적화로 lighthouse 기준 performance 점수를
                70점 향상시켰습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>코드 재사용성 증가를 위한 Component 분리</StyledLi>
                <StyledLi>성능 개선을 위한 React-Lazy 적용</StyledLi>
                <StyledLi>admin, main, onboard로 route 분리</StyledLi>
                <StyledLi>
                  사이트에서 사용되는 color, font-size 디자인 에셋 제작
                </StyledLi>
                <StyledLi>운영진용 Admin 제작</StyledLi>
              </StyledUl>
            </ProjectWrapper>
            <ProjectWrapper>
              <StyledH4>
                Onboarding page
                <PeriodMark>.</PeriodMark>
              </StyledH4>
              <TimeWrapper>
                <time>2021.12.05 - 2021.12.29</time>
              </TimeWrapper>
              <StyledA
                target="_blank"
                href={
                  'https://github.com/HyeokE/gdsc-dju-web-ts/tree/master/src/pages/OnBoard'
                }
              >
                Github
              </StyledA>
              <StyledA
                target="_blank"
                href={'https://gdsc-dju.web.app/onboard'}
              >
                SiteLink
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                소개페이지에 onboarding route로 신규멤버의 정보를 받기 위한
                Onboarding 페이지입니다. 신규 멤버들에게 여행하는 경험을 주기
                위해 모션에 대한 고민을 했습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>전반적인 페이지 제작</StyledLi>
                <StyledLi>
                  html2canvas를 이용한 boarding pass 저장기능 제작
                </StyledLi>
                <StyledLi>Yup과 formik을 이용한 nickname validation</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learn<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>CORS 오류</StyledLi>
                <StyledLi>무료 도메인 이슈</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                React, TypeScript, Styled-component, Recoil, SWR, axios,
                Framer-motion, firebase Hosting
              </StyledP>
            </ProjectWrapper>
            <ProjectWrapper>
              <StyledH4>
                GDSC DJU Tech blog
                <PeriodMark>.</PeriodMark>
              </StyledH4>
              <TimeWrapper>
                <time>2022.02.08 - 현재</time>
              </TimeWrapper>
              <StyledA
                target="_blank"
                href={'https://github.com/GDSC-Daejin/gdsc-dju-blog-fe'}
              >
                Github
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                커뮤니티 전산화/체계화의 필요성으로 기획한 기술블로그
                프로젝트입니다. 기존 사이트와 백엔드를 공유하며 운영진이
                멤버들의 활동을 관리할 수 있도록 admin페이지와 함께 개발
                진행중입니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>circleci으로 firebase deploy 세팅</StyledLi>
                <StyledLi>github action으로 firebase preview 세팅</StyledLi>
              </StyledUl>
              <StyledH5>
                Tech Stack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                React, TypeScript, Styled-component, Recoil, SWR, axios,
                Framer-motion, firebase Hosting, Giscus, Toast Editor
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
              <time>2019. 11</time> - 현재
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
                <time>2021. 11. 27 - 2022. 1. 31</time>
              </TimeWrapper>
              <StyledA
                href={'https://github.com/ozet-team/ozet-resume'}
                target="_blank"
                onClick={() => {
                  window.open(
                    'https://github.com/ozet-team/ozet-hybrid',
                    '_blank',
                  );
                }}
              >
                Github
              </StyledA>
              <StyledHr />
              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                미용사들을 위한 이력서 플랫폼으로 프론트엔드 2명 중 1명으로
                참여하였습니다. 웹뷰와 네이티브앱 간의 차이를 줄이기 위해
                노력하였습니다.
              </StyledP>
              <StyledH5>
                What did I do<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>반응형 이력서 페이지</StyledLi>
                <StyledLi>상세공고 페이지</StyledLi>
                <StyledLi>이력서 PDF</StyledLi>
              </StyledUl>
              <StyledH5>
                What did I learn<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledUl>
                <StyledLi>
                  이력서 pdf 부분에서 백엔드와 협업으로 프론트에서 마크업을,
                  백엔드에서 pdf로의 변환하는 작업을 제안했습니다.
                </StyledLi>
                <StyledLi>
                  이력서 페이지모션 부분의 개발공수를 고려하며 디자이너 분과
                  상의를 통해 릴리즈 일자에 맞출 수 있도록 조율하였습니다.
                </StyledLi>
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
          Communication<PeriodMark>.</PeriodMark>
        </StyledH2>
        <OtherWrapper>
          <StyledH3>
            Overall<PeriodMark>.</PeriodMark>
          </StyledH3>
          <StyledUl>
            <StyledLi>
              Framer-motion을 사용하여 UI 및 애니메이션 구현을 즐깁니다. 꼭
              애니메이션이 디자인에 포함되어 있지 않아도 선행해서 애니메이션을
              구현하거나 제안하는 편입니다.
            </StyledLi>
            <StyledLi>
              프로젝트에 필요하다면 능숙하지 않아도 학습하여 최적의 결과를 낼 수
              있도록 노력합니다.
            </StyledLi>
            <StyledLi>
              커뮤니티 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를
              적극적으로 하며 아이디어의 수용이 빠릅니다.
            </StyledLi>
            <StyledLi>솔직하며 직설적인 커뮤니케이션을 선호합니다.</StyledLi>
            <StyledLi>
              직위 및 포지션에 관계없이 적극적으로 생각을 피력합니다.
            </StyledLi>
            <StyledLi>
              자신이 틀렸을 수도 있다는 생각을 가지고 있습니다.
            </StyledLi>
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
          Other Experiences<PeriodMark>.</PeriodMark>
        </StyledH2>
        <OtherWrapper>
          <ProjectWrapper>
            <StyledH3>
              GDSC Korea<PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>Daejin University Lead</Role>
            <TimeWrapper>
              <time>2021. 07. - 현재</time>
            </TimeWrapper>
            <StyledP>
              Google Developers에서 지원하는{' '}
              <StyledA
                href={'https://sites.google.com/view/gdeveloperskorea/gdsc'}
              >
                GoogleDSC
              </StyledA>
              Daejin University 챕터의 1기 리드를 맡고 있습니다.
            </StyledP>
            <StyledH5>
              What did I do<PeriodMark>.</PeriodMark>
            </StyledH5>
            <StyledUl>
              <StyledLi>
                영어 닉네임을 도입하여 학번, 나이, 경력에 상관없이 수평적 문화를
                조성하도록 노력하였습니다.
              </StyledLi>
              <StyledLi>
                모두가 기획자, 팀 리드가 될 수 있도록 자유로운 커뮤니티를
                만들었습니다.
              </StyledLi>
              <StyledLi>
                좋은 조직은 좋은 사람이 만듭니다. 성장의지가 강한 분들을
                모셨습니다.
              </StyledLi>
              <StyledLi>
                충돌은 더 나은 환경을 만든다고 생각하기 때문에 모두가 생각을
                피력할 수 있는 환경을 조성하였습니다.
              </StyledLi>
              <StyledLi>
                커뮤니티의 전산화를 위해 사이트, 기술블로그, 관리자페이지를
                기획, 개발하였습니다.
              </StyledLi>
            </StyledUl>
          </ProjectWrapper>
        </OtherWrapper>
        <OtherWrapper>
          <ProjectWrapper>
            <StyledH3>
              Daejin University<PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>휴먼IT학부•로봇공학전공 (휴학)</Role>
            <TimeWrapper>
              <time>2019. 03. - 현재</time>
            </TimeWrapper>
          </ProjectWrapper>
        </OtherWrapper>
      </StyledSection>
      <StyledSection>
        <OtherWrapper>
          <ProjectWrapper>
            <StyledH3>
              Language<PeriodMark>.</PeriodMark>
            </StyledH3>
            <StyledH5>
              English<PeriodMark>.</PeriodMark>
            </StyledH5>
            <Role>Limited Working Proficiency</Role>
          </ProjectWrapper>
          <ProjectWrapper>
            <StyledH5>
              Korean<PeriodMark>.</PeriodMark>
            </StyledH5>
            <Role>Native</Role>
          </ProjectWrapper>
        </OtherWrapper>
      </StyledSection>
      <StyledSection>
        <StyledH2>
          Contact<PeriodMark>.</PeriodMark>
        </StyledH2>
        <StyledUl>
          <StyledLi>Name: 정준혁 [Jeong Jun-Hyeok]</StyledLi>
          <StyledLi>Phone: 010-2544-1586</StyledLi>
          <StyledLi>
            Email:{' '}
            <StyledA href="mailto:jhjeong00@gmail.com">
              jhjeong00@gmail.com
            </StyledA>
          </StyledLi>
          <StyledLi>
            Blog:{' '}
            <StyledA href="https://velog.io/@jhjeong00" target="_blank">
              https://velog.io/@jhjeong00
            </StyledA>
          </StyledLi>
          <StyledLi>
            Github:{' '}
            <StyledA href="https://github.com/HyeokE" target="_blank">
              https://github.com/HyeokE
            </StyledA>
          </StyledLi>
          <StyledLi>산업기능요원(보충역)으로 구직 중입니다.</StyledLi>
        </StyledUl>
      </StyledSection>
    </Container>
  );
}

export default App;
