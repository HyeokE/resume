import React, { ReactNode } from 'react';
import { StyledA } from '../styled';

interface ExperienceProps {
  title: string;
  role?: string;
  time: string;
  description: ReactNode;
  content?: ReactNode[];
}
export type ExperienceType = {
  title: string;
  data: ExperienceProps[];
};

export const experienceData: ExperienceType = {
  title: 'Other Experiences',
  data: [
    {
      title: 'GDG Korea WebTech',
      role: 'Organizer',
      time: '2023.03 - 현재',
      description: (
        <>
          구글의 웹 기술 기반 개발자 커뮤니티인
          <StyledA href={'https://gdg.community.dev/gdg-korea-webtech/'}>
            GDG Korea WebTech
          </StyledA>
          의 Organizer를 맡고 있습니다.
        </>
      ),
    },
    {
      title: 'GoogleDSC Korea',
      role: 'Lead',
      time: '2021.08 - 2023.07(예정)',
      description: (
        <>
          {' '}
          Google Developers에서 지원하는{' '}
          <StyledA href={'https://sites.google.com/view/gdeveloperskorea/gdsc'}>
            GoogleDSC
          </StyledA>
          Daejin University 챕터의
          <StyledA
            href={
              'https://drive.google.com/file/d/1SNGRgxPexq2h2BCc1RPE7P_Pa2hiHCli/view'
            }
          >
            {' '}
            1기
          </StyledA>
          와 2기 리드를 맡고 있습니다.
        </>
      ),
      content: [
        <>
          GDSC KOREA 2021 - 2022{' '}
          <StyledA
            href={
              'https://drive.google.com/file/d/1xMd5Gr5jbQ83-ahmh6QNH2v-2zHvMVxz/view'
            }
          >
            우수 리드
          </StyledA>
          로 선정되었습니다.
        </>,
        '커뮤니티 내부에서 사용하는 서비스들을 개발했습니다.',
        '영어 닉네임을 도입하여 학번, 나이, 경력에 상관없이 수평적 문화를 조성하도록 노력했습니다.',
        '충돌은 더 나은 환경을 만든다고 생각하기 때문에 모두가 생각을 피력할 수 있는 환경을 조성했습니다.',
        'Notion과 Slack을 사용하여 내부 활동들을 문서화하고 있습니다.',
        '내부 활동을 마친 후 참여인원이 회고록을 작성함으로서 더 발전할 수 있는 환경을 만들고 있습니다.',
      ],
    },
    {
      title: 'GDSC Career, 하루간 구글을 무료체험 해보세요',
      time: '2022. 07. 02',
      description: (
        <>
          <StyledA href={'https://festa.io/events/2397'}>
            구글러와 함께하는 커리어 세션
          </StyledA>
          을 기획 및 운영했습니다.
        </>
      ),
    },
    {
      title: '대진대학교',
      time: '휴먼IT융합학부 - 로봇공학과',
      description: '3학년 2학기를 마치고 휴학 중입니다.',
    },
  ],
};
