import { StyledA } from '../styled';
import { ProjectList } from './project';

export const workExperience: ProjectList = [
  {
    title: 'Shopl&Company',
    role: 'Frontend Developer',
    time: '2023.01 - 현재',
    projects: [
      {
        name: 'Hada Design System',
        duration: '2023.02 - 현재',
        description: (
          <>
            디자인 일관성과 생산성을 높이기 위해 하다 디자인 시스템을 설계 및
            구현했습니다.
          </>
        ),
        whatYouDid: [
          'Storybook을 이용한 컴포넌트 개발 및 문서화',
          'Github Action을 이용한 배포 자동화 및 버전관리',
        ],
        techStack:
          'Storybook, React, TypeScript, @emotion, framer-motion, Rollup',
      },
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
            를 개발했습니다. 서비스의 유지보수를 비롯하여 여러 기능을
            개발했습니다.
          </>
        ),
        whatYouDid: [
          '시설 페이지 내 시설 정보 열람, 점검 내역 조회, 수정, 점검표 조회 기능 개발',
          '시설 태그, 옵션 기능 개발',
          '시설 필터, 점검표 필터 개편',
          '결제 페이지 내 요금제 정보, 정산담당자, 결제 내역 조회 기능 개발',
          'yarn berry 도입으로 패키지 의존성 개선',
          '프로젝트 eslint/prettier 규칙 정리 및 적용',
          '코드 스타일 문서 작성',
        ],
        techStack:
          'React, TypeScript, @emotion, Redux, Redux-Toolkit, React-Query, HDS, mui',
      },
    ],
  },
];
