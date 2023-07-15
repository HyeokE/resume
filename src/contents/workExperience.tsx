import { StyledA } from '../styled';
import { ProjectList } from './project';

export const workExperience: ProjectList = [
  {
    title: 'Shopl&Company',
    role: 'Frontend Developer',
    time: '2023.01 - 현재',
    projects: [
      {
        name: 'Shoplflow',
        duration: '2023.06 - 현재',
        description: (
          <>
            샤플, 하다의 공통 디자인 시스템 프로젝트입니다. 비슷한 디자인을 가진
            각 프로덕트의 공수를 줄이기 위해 시작된 프로젝트입니다. 현재는
            컴포넌트를 정리하는 단계입니다.
          </>
        ),
        whatYouDid: ['공통 디자인 시스템 제안'],
        techStack: '예상 스택 (Turborepo, Yarn Berry, Changesets)',
      },
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
        name: 'Hada 시설 태그, 태그옵션 기능',
        duration: '2023.06 - 2023.07',
        description: (
          <>
            시설 내 태그와 해시태그 옵션 기능을 개발했습니다. 유저 입장에서
            이해하기 어렵다고 생각되는 부분은 PM과 협의하여 기획을 수정하며
            개발했습니다.
          </>
        ),
        whatYouDid: [
          '태그, 옵션 기능 개발',
          '추가, 수정 삭제 모달 개발',
          '해시태그 순서 변경 기능 개발',
          '기존 mui 컴포넌트 HDS로 변경',
        ],
        techStack:
          'React, TypeScript, @emotion, Redux, Redux-Toolkit, React-Query, HDS',
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
            를 개발했습니다. 서비스의 유지보수를 비롯하여 요구사항에 맞는 여러
            기능을 개발했습니다.
          </>
        ),
        whatYouDid: [
          'yarn berry 도입으로 모노레포 패키지 의존성 개선',
          '프로젝트 eslint/prettier 규칙 정리 및 적용',
          '코드 스타일 문서 작성',
          '시설 페이지 내 시설 정보 열람, 점검 내역 조회, 수정, 점검표 조회 기능 개발',
          '대시보드 필터 UI 및 기능 개편',
          '결제 페이지 내 요금제 정보, 정산담당자, 결제 내역 조회 기능 개발',
          '기존 mui로 개발된 컴포넌트를 HDS로 변경',
        ],
        techStack:
          'React, TypeScript, @emotion, Redux, Redux-Toolkit, React-Query, HDS, mui',
      },
    ],
  },
];
