import { StyledA } from '../styled';
import { ProjectList } from './project';

export const workExperience: ProjectList = [
  {
    title: 'Shopl&Company',
    role: 'Frontend Developer',
    time: '2023.01 - 현재',
    projects: [
      {
        name: 'Hada Dashboard',
        duration: '2023.01 - 현재',
        description: (
          <>
            현장 시설 관리 서비스{' '}
            <StyledA href={'https://www.hadaworks.com'}>하다</StyledA>의{' '}
            <StyledA href={'https://dashboard.hadaworks.com/auth/signup'}>
              대시보드 페이지
            </StyledA>
            를 개발했습니다. 유지보수를 비롯해 비즈니스의 요구에 맞는 다양한
            기능을 개발했습니다.
          </>
        ),
        whatYouDid: [
          '명세되지 않은 라이브러리를 참조하는 이슈를 yarn berry 도입으로 해결했습니다.',
          '코드 스타일의 일관성을 위해 공통 lint 규칙을 설정하고 코드 컨벤션 문서를 작성했습니다.',
          '주간 프론트엔드 회의를 주관하며 코드리뷰를 도입했습니다.',
          '시설 태그, 태그 옵션 기능 개발',
          '시설 페이지 내 시설 정보 열람, 점검 내역 조회, 수정, 점검표 조회 기능 개발',
          '대시보드 필터 UI 및 기능 개편',
          '결제 페이지 내 요금제 정보, 정산담당자, 결제 내역 조회 기능 개발',
        ],
        techStack:
          'React, TypeScript, @emotion, Redux, Redux-Toolkit, React-Query, HDS, mui',
      },
      {
        name: 'Hada Design System',
        duration: '2023.02 - 현재',
        description: (
          <>
            디자인 일관성과 생산성을 높이기 위해 하다 디자인 시스템을 설계 및
            구현했습니다. 개발자/디자이너에게 좋은 사용성을 제공하기 위해 props
            옵션 네이밍 통일, 컴포넌트 구조를 상의하며 개발했습니다. 현재 하다,
            샤플 디자인 시스템 통합을 준비 중에 있습니다.
          </>
        ),
        whatYouDid: [
          'Storybook을 이용한 컴포넌트 개발 및 문서화',
          'Github Action을 이용한 배포 자동화 및 버전관리',
          'SVG 아이콘 컴포넌트 변환 자동화',
          <>
            개발자 경험과 유연한 시멘틱 태그를 제공하기 위한{' '}
            <StyledA
              href={
                'https://hyeok.dev/Polymorphic%ED%95%9C%20React%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0#1c65ea3622184940a5367893937d503f'
              }
            >
              Polymorphic 컴포넌트 개발
            </StyledA>
          </>,
        ],
        techStack:
          'Storybook, React, TypeScript, @emotion, framer-motion, Rollup',
      },
    ],
  },
];
