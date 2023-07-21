import React, { ReactNode } from 'react';

export interface ProjectProps {
  title: string;
  role: string;
  time: string;
  projects: {
    name: string;
    role?: string;
    duration?: string;
    link?: {
      name: string;
      link: string;
    }[];
    description?: ReactNode;
    whatYouLearn?: ReactNode[];
    whatYouDid: ReactNode[];
    techStack: string;
  }[];
}
export type ProjectList = ProjectProps[];

export const projectData: ProjectList = [
  {
    title: 'Google DSC Korea',
    role: 'Frontend Developer',
    time: '2021.08 - 현재',
    projects: [
      {
        name: 'GDSC DJU Web',
        role: 'frontend 1',
        duration: '2021.10.29 - 2021.12.27',
        description:
          '1인 개발로 제작한 커뮤니티 소개 및 지원사이트 입니다. 제작 이후 지원자 수가 50% 증가했습니다. 코드 리팩토링을 진행하며 React-lazy를 통한 최적화로 lighthouse 기준 performance 점수를 92점까지 향상시켰습니다. 내부 서비스들을 모노레포로 관리하고 있습니다.',
        link: [
          {
            name: 'Github',
            link: 'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master',
          },
          {
            name: 'Website',
            link: 'https://web.gdsc-dju.com',
          },
        ],
        whatYouDid: [
          'webpack → vite 번들러 변경으로 빌드 속도 67% 상승 (98.40s → 42.88s)',
          '성능 개선을 위한 React-Lazy 적용',
          'SVG 모션 사파리 크로스브라우징 이슈 해결',
          '포지션 별 지원하기 기능 개발',
          '사용자 세팅에 따른 다크모드 적용 개발',
          'Github Action firebase Hosting/Preview 세팅',
          'Atmoic Design 패턴 적용',
        ],
        whatYouLearn: ['CORS 오류', '무료 도메인 이슈', 'font-family 이슈'],
        techStack:
          'Yarn Berry, React, TypeScript, Styled-component, Recoil, Framer-motion, firebase Hosting, @gdsc-dju/styled-components',
      },
      {
        name: 'Tech blog',
        role: 'frontend 3, backend 3, designer 3',
        duration: '2022.02.08 - 중단',
        description:
          'GDSC DJU 내부 사용 목적으로 개발된 기술 블로그입니다. 프로젝트를 처음 참여하시는 멤버 분들을 고려하여 프로젝트를 진행했습니다.',
        link: [
          {
            name: 'Github',
            link: 'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master',
          },
          {
            name: 'Website',
            link: 'https://blog.gdsc-dju.com',
          },
        ],
        whatYouDid: [
          'CI/CD 세팅',
          '내 블로그, 스크랩, 프로필 수정 페이지 개발',
          '글 작성, 수정 페이지 리팩토링',
          'Alert, Modal 개발',
        ],

        techStack:
          'Yarn Berry, React, TypeScript, Styled-component, Recoil, React-Query, Framer-motion, firebase Hosting',
      },
      {
        name: 'GDS',
        role: 'frontend 1, designer 1',
        duration: '2022.8 - 현재',
        description:
          '웹 서비스에서 자주 사용되는 컴포넌트와 디자인 에셋들을 라이브러리로 만들었습니다. Rollup 도입으로 약 40%의 용량 감소를 이뤘습니다. ' +
          'Styled-Components 기반 라이브러리의 한계를 느끼고 CSS 변수를 사용하는 방식으로 변경했습니다.',
        link: [
          {
            name: 'Github',
            link: 'https://github.com/GDSC-Daejin/design-seed',
          },
          {
            name: 'Docs',
            link: 'https://design.gdsc-dju.com/',
          },
        ],
        whatYouDid: [
          'mode type에 따른 dark, light mode 변경 기능 개발',
          'token type 지정',
          'Navigation, Footer, Input 등 공용 컴포넌트 개발',
          'npm package 배포',
        ],
        techStack: 'React, TypeScript, Styled-Components',
      },
      {
        name: 'GDSC DJU Admin',
        role: 'frontend 1, backend 1',
        duration: '2022.05.25 - 2022.07.04',
        description:
          '커뮤니티 규모가 커짐에 따라 지원자 관리 기능의 필요성을 느껴 시작하게 되었습니다. 지원서 열람, 지원서 코멘트, 지원자 별 이메일 자동전송 기능을 포함하고 있습니다.',
        link: [
          {
            name: 'Github',
            link: 'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master',
          },
        ],
        whatYouDid: [
          '지원자 관리 페이지, 지원서 Modal 개발',
          '지원서에 대한 comment 기능 개발',
          '지원자 합류과정에 따른 filter 기능 개발',
          '이메일 로그 열람 및 email.js를 활용한 이메일 자동 전송 기능 개발',
        ],
        techStack:
          'Yarn Berry, React, TypeScript, Styled-component, Framer-motion, firebase Hosting, firestore, emailjs, React-Query, Jotai',
      },
      // {
      //   name: 'Devfest [GDG X GDSC] 출석부',
      //   role: 'frontend 3, backend 3',
      //   duration: '2021. 10. 05 - 2021. 10. 26',
      //   description:
      //     'GDG Korea에서 진행하는 Devfest 2021 출석부 제작에 프론트엔드 개발자 3명 중 한 명으로 참여했습니다.',
      //   link: [
      //     {
      //       name: 'Github',
      //       link: 'https://github.com/devfest-2021/devfest-2021-guidebook-fe',
      //     },
      //     {
      //       name: 'Website',
      //       link: 'https://devfest-2021-guestbook.netlify.app',
      //     },
      //   ],
      //   whatYouDid: [
      //     '로그인, 로그아웃 관련 Modal 개발',
      //     '유저 프로필, 프로필 수정 개발',
      //   ],
      //   whatYouLearn: ['백엔드와의 커뮤니케이션', 'Commit Convention'],
      //   techStack: 'React, TypeScript, Styled-component, Recoil, SWR, Axios',
      // },
    ],
  },
  // {
  //   title: 'TEAM OZET',
  //   role: 'Frontend Developer',
  //   time: '2021. 11 - 현재',
  //   projects: [
  //     {
  //       name: 'OZET',
  //       role: 'frontend 2, backend 2, android 2, ios 1, designer 3',
  //       duration: '2021. 11. 27 - 중단',
  //       description:
  //         '전용 채용 플랫폼이 없는 미용사들을 위한 채용 플랫폼입니다. 현직자 분들과의 사이드 프로젝트로 진행 중이며 웹뷰와 네이티브앱 간의 차이를 줄이기 위해 노력했습니다. 현재 프로젝트가 중단된 상태입니다.',
  //       link: [
  //         {
  //           name: 'Github(이력서 페이지)',
  //           link: 'https://github.com/ozet-team/ozet-resume',
  //         },
  //         {
  //           name: 'Github(채용 공고)',
  //           link: 'https://github.com/ozet-team/ozet-hybrid',
  //         },
  //       ],
  //       whatYouDid: [
  //         '반응형 이력서 페이지 개발',
  //         '상세공고 페이지 개발',
  //         '이력서 PDF 마크업',
  //       ],
  //       whatYouLearn: [
  //         '이력서 페이지 부분의 개발공수를 고려하며 디자이너 분과 상의를 통해 슬라이드 모션을 조율했습니다.',
  //       ],
  //       techStack:
  //         'TypeScript, React.js, Styled-component, Recoil, SWR, karrot-frame',
  //     },
  //   ],
  // },
];
