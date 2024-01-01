import React from 'react';
import Projects from './components/Projects';
import { projectData } from './contents/project';
import {
  BigParagraph,
  Container,
  Other,
  PeriodMark,
  Project,
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
  StyledLi,
  StyledP,
  StyledSection,
  StyledUl,
  Time,
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
      <StyledSection>
        <StyledH2>
          Work Experience
          <PeriodMark>.</PeriodMark>
        </StyledH2>

        <Row>
          <RowLeft>
            <StyledH3>
              샤플앤컴퍼니
              <PeriodMark>.</PeriodMark>
            </StyledH3>
            <Role>Frontend Developer</Role>
            <Time>2023.01 - 현재</Time>
          </RowLeft>
          <RowRight>
            <Project>
              <StyledH4>
                Shoplflow
                <PeriodMark>.</PeriodMark>
              </StyledH4>

              <Role>
                <StyledA
                  target="_blank"
                  href={
                    'https://shoplflow-base.vercel.app/?path=/docs/colors--docs'
                  }
                  rel="noreferrer"
                >
                  Storybook
                </StyledA>
                <StyledA
                  target="_blank"
                  href={'https://github.com/shopl/shoplflow'}
                  rel="noreferrer"
                >
                  Github
                </StyledA>
              </Role>

              <Time>2023.07 - 현재</Time>

              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                <>
                  샤플, 하다 통합 디자인 시스템인 Shoplflow를 리드하여
                  개발했습니다. 오픈소스 프로젝트로 공개되어 있으며 하나의
                  언어를 만드는 것을 목표로 하고 있습니다. style, lint, util 등
                  사내에서 공통으로 사용할 패키지의 환경을 구축했으며 개발자의
                  시간을 절약하기 위해 버전관리, 테스트, 배포 등의 작업을
                  자동화했습니다. DX 중심의 compound component 패턴으로
                  컴포넌트를 설계했습니다. (
                  <StyledA
                    target="_blank"
                    href={
                      'https://hyeok.dev/%EC%A2%8B%EC%9D%80%20%EC%BD%94%EB%93%9C%EB%9E%80%20%EC%96%B4%EB%96%A4%20%EC%BD%94%EB%93%9C%EC%9D%BC%EA%B9%8C'
                    }
                  >
                    좋은 코드란 어떤 코드일까
                  </StyledA>
                  )
                </>
              </StyledP>

              <>
                <StyledH5>
                  What I did<PeriodMark>.</PeriodMark>
                </StyledH5>
                <StyledUl>
                  <StyledLi bold>
                    디자인 토큰들이 변경이 잦아 개발자가 직접 코드를
                    수정해야하는 비효율을 개선
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      Figma에서 디자인 토큰 편집시 npm 라이브러리에도 변경사항이
                      자동으로 반영되도록 CI/CD를 구축했습니다.
                    </StyledLi>
                  </StyledUl>
                  <StyledLi bold>
                    컴포넌트에 적절하지 않은 스멘틱 태그가 사용되는 문제를 해결
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      <>
                        개발자 경험과 유연한 시멘틱 태그를 제공하기 위한{' '}
                        <StyledA
                          target="_blank"
                          href={
                            'https://hyeok.dev/Polymorphic%ED%95%9C%20React%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0'
                          }
                        >
                          Polymorphic 컴포넌트
                        </StyledA>
                        를 개발하여 개선했습니다.
                      </>
                    </StyledLi>
                  </StyledUl>
                  <StyledLi bold>
                    아이콘을 추가로 등록하거나 수정할 때 개발자가 직접 코드를
                    수정하는 비효율을 개선
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      SVG 아이콘을 변경하거나 수정할 때의 비용감소를 위해 아이콘
                      컴포넌트 변환 SVG → RFC 자동화 스크립트 개발
                    </StyledLi>
                  </StyledUl>
                </StyledUl>
              </>
              <StyledH5>
                TechStack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <p>
                pnpm, Storybook, React, TypeScript, @emotion, framer-motion,
                turborepo
              </p>
            </Project>
            <Project>
              <StyledH4>
                HADA Dashboard
                <PeriodMark>.</PeriodMark>
              </StyledH4>

              <Time>2023.01 - 2023.08</Time>

              <StyledH5>
                Description<PeriodMark>.</PeriodMark>
              </StyledH5>
              <StyledP>
                <>
                  현장 시설 관리 서비스{' '}
                  <StyledA target="_blank" href={'https://www.hadaworks.com'}>
                    하다
                  </StyledA>
                  의{' '}
                  <StyledA
                    target="_blank"
                    href={'https://dashboard.hadaworks.com/auth/signup'}
                  >
                    대시보드 페이지
                  </StyledA>
                  를 개발했습니다. 유지보수를 비롯해 비즈니스의 요구에 맞는
                  다양한 기능을 개발했습니다. 사용자의 관점에서 생각하며,
                  적극적인 의견 제시로 기획이 변경되기도 했습니다.
                </>
              </StyledP>

              <>
                <StyledH5>
                  What I did<PeriodMark>.</PeriodMark>
                </StyledH5>
                <StyledUl>
                  <StyledLi bold>
                    프로젝트 내부에 명세되지 않은 라이브러리를 참조하는 이슈
                    개선
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      명세되지 않은 라이브러리를 참조하는 이슈를 yarn berry
                      도입으로 해결했습니다.
                    </StyledLi>
                  </StyledUl>
                  <StyledLi bold>
                    시설 그룹 필터 변경 후 UI가 프리징되는 이슈를
                    useTransition으로 90% 개선 (2s → 0.2s)
                  </StyledLi>
                  <StyledLi bold>
                    시설 필터 추가, 수정시 UX의 일관성을 위한 의견 제시로 기획
                    내용 변경
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      시설 필터를 수정할 때 각 항목의 수정사항이 반영되는 시점이
                      다른 모달과 다른 문제가 있었습니다. 사용자에게 일관된
                      경험을 주기 위해 적극적인 의견 제시로 기획이
                      변경되었습니다.
                    </StyledLi>
                  </StyledUl>
                  <StyledLi bold>
                    지속 가능한 코드와 개발 문화를 만들기 위해 노력했습니다.
                  </StyledLi>
                  <StyledUl>
                    <StyledLi>
                      코드 스타일의 일관성을 위해 공통 lint 규칙을 설정하고 코드
                      컨벤션 문서를 작성했습니다.
                    </StyledLi>
                    <StyledLi>
                      주간 프론트엔드 회의를 주관하며 코드리뷰를 도입했습니다.
                    </StyledLi>
                  </StyledUl>
                </StyledUl>
              </>
              <StyledH5>
                TechStack<PeriodMark>.</PeriodMark>
              </StyledH5>
              <p>
                pnpm, Storybook, React, TypeScript, @emotion, framer-motion,
                turborepo
              </p>
            </Project>
          </RowRight>
        </Row>
      </StyledSection>
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
