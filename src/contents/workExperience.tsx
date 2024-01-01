import { StyledA } from '../styled';
import { ProjectList } from './project';

export const workExperience: ProjectList = [
  {
    title: '샤플앤컴퍼니',
    role: 'Frontend Developer',
    time: '2023.01 - 현재',
    projects: [
      {
        name: 'Shoplflow',
        duration: '2023.07 - 현재',
        link: [
          {
            name: 'Storybook',
            link: 'https://shoplflow-base.vercel.app/?path=/docs/colors--docs',
          },
          {
            name: 'Github',
            link: 'https://github.com/shopl/shoplflow',
          },
        ],
        description: (
          <>
            샤플, 하다 통합 디자인 시스템인 Shoplflow를 리드하여 개발했습니다.
            오픈소스 프로젝트로 공개되어 있으며 하나의 언어를 만드는 것을 목표로
            하고 있습니다. style, lint, util 등 사내에서 공통으로 사용할
            패키지의 환경을 구축했으며 개발자의 시간을 절약하기 위해 버전관리,
            테스트, 배포 등의 작업을 자동화했습니다. DX 중심의 compound
            component 패턴으로 컴포넌트를 설계했습니다. (
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
        ),
        WhatIDid: [
          '디자인시스템의 토큰들이 변경사항이 잦은 문제를 개선하기 위해 Figma에서 디자인 토큰 편집시 변경사항이 반영되도록 CI/CD 구축',
          <>
            개발자 경험과 유연한 시멘틱 태그를 제공하기 위한{' '}
            <StyledA
              target="_blank"
              href={
                'https://hyeok.dev/Polymorphic%ED%95%9C%20React%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0'
              }
            >
              Polymorphic 컴포넌트 개발
            </StyledA>
          </>,
          'SVG 아이콘을 변경하거나 수정할 때의 비용감소를 위해 아이콘 컴포넌트 변환 SVG -> RFC 자동화 스크립트 개발',
        ],
        techStack:
          'pnpm, Storybook, React, TypeScript, @emotion, framer-motion, turborepo',
      },
      {
        name: 'HADA Dashboard',
        duration: '2023.01 - 2023.08',
        description: (
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
            를 개발했습니다. 유지보수를 비롯해 비즈니스의 요구에 맞는 다양한
            기능을 개발했습니다. 사용자의 관점에서 생각하며, 적극적인 의견
            제시로 기획이 변경되기도 했습니다.
          </>
        ),
        WhatIDid: [
          '명세되지 않은 라이브러리를 참조하는 이슈를 yarn berry 도입으로 해결했습니다.',
          '코드 스타일의 일관성을 위해 공통 lint 규칙을 설정하고 코드 컨벤션 문서를 작성했습니다.',
          '주간 프론트엔드 회의를 주관하며 코드리뷰를 도입했습니다.',
          '시설 상세 페이지 개발(시설 정보, 점검 내역, 점검표 조회 기능)',
          '시설 그룹 필터 변경 후 UI가 프리징되는 이슈를 useTransition으로 90% 개선 (2s → 0.2s)',
          '시설 필터 추가, 수정시 UX의 일관성을 위한 의견 제시로 기획 내용 변경',
          '대시보드 필터 UI 및 기능 개편',
          '결제 페이지 내 요금제 정보, 정산담당자, 결제 내역 조회 기능 개발',
        ],
        techStack:
          'React, TypeScript, @emotion, Redux, Redux-Toolkit, React-Query, HDS, mui',
      },
    ],
  },
];
