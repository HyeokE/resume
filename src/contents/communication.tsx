import { ReactNode } from 'react';
import { StyledA } from '../styled';

export interface CommunicationProps {
  title: string;
  content: ReactNode[];
}

export type CommunicationList = CommunicationProps[];

export const communicationData: CommunicationList = [
  {
    title: 'Overall',
    content: [
      'Framer-motion을 사용하여 UI 및 애니메이션 구현을 즐깁니다. 꼭 애니메이션이 디자인에 포함되어 있지 않아도 선행해서 애니메이션을 구현하거나 제안하는 편입니다.',
      '프로젝트에 필요하다면 능숙하지 않아도 학습하여 최적의 결과를 낼 수 있도록 노력합니다.',
      <>
        커뮤니티 혹은 팀의 프로세스 및 문화를{' '}
        <StyledA
          href={'https://hyeok.dev/22.11.02%20%ED%9A%8C%EA%B3%A0%EB%A1%9D'}
        >
          개선하거나 바꾸려는 시도
        </StyledA>
        를 적극적으로 하며 아이디어의 수용이 빠릅니다.
      </>,
      '직위 및 포지션에 관계없이 적극적으로 생각을 피력합니다.',
      '커뮤니케이션은 적은 것보다 많은게 좋다고 생각합니다.',
      '프로덕트의 기획 회의부터 참여하는 것을 선호합니다.',
    ],
  },
  {
    title: 'JavaScript',
    content: [
      'JavaScript 동작원리를 이해하고 있으며 ES6+ 문법을 사용합니다.',
      'Yarn과 Yarn Berry 사용을 선호합니다.',
    ],
  },
  {
    title: 'React',
    content: [
      'React hook을 적절하게 사용할 수 있으며 필요에 따라 커스텀 훅을 제작할 수 있습니다.',
      '여러 디자인 패턴을 이해하고 있으며 필요에 따라 적절한 패턴을 사용할 수 있습니다.',
    ],
  },
  {
    title: 'Web',
    content: [
      'FCP, LCP, TTI 등의 웹 성능 지표를 이해하고 있으며, 성능 최적화를 위한 방법을 알고 있습니다.',
      '검색엔진의 웹 크롤링 방식을 이해하고 있으며, SEO 최적화를 고려하며 개발합니다.',
    ],
  },
];
