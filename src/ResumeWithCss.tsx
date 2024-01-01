import React from 'react';
import './ResumeWithCss.css';

function ResumeWithCss() {
  return (
    <div className="container">
      <section>
        <h1>
          반갑습니다.
          <br />
          저는 정준혁입니다<span className="period-mark">.</span>
        </h1>
        <p className="big-paragraph">
          웹 프론트개발자를 희망하며 사용자의 경험을 우선시하는 UI를 구현하는
          것을 좋아합니다. 실전으로 부딪히며 학습하는 것이 가장 효율적인
          공부방법이라고 생각합니다. 주도적으로 업무를 진행할 수 있는 환경을
          선호합니다.
        </p>
      </section>
      <section>
        <h2>
          Contact<span className="period-mark">.</span>
        </h2>
        <ul>
          <li>Phone: 010-2544-1586</li>
          <li>
            Email: <a href="mailto:jhjeong00@gmail.com">jhjeong00@gmail.com</a>
          </li>
          <li>
            Blog:{' '}
            <a
              href="https://velog.io/@jhjeong00"
              target="_blank"
              rel="noreferrer"
            >
              https://velog.io/@jhjeong00
            </a>
          </li>
          <li>
            Github:{' '}
            <a
              href="https://github.com/HyeokE"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/HyeokE
            </a>
          </li>
          <li>산업기능요원(보충역 신규)으로 구직 중입니다.</li>
        </ul>
      </section>
      <section>
        <h2>
          Project Experience<span className="period-mark">.</span>
        </h2>
        <div className={'row'}>
          <div className={'row-left'}>
            <h3>
              GoogleDSC<span className="period-mark">.</span>
            </h3>
            <span className={'role'}>Frontend Developer</span>
            <span className={'time'}>
              <time dateTime={'2021-07'}>2021. 07</time> - 현재{' '}
            </span>
          </div>
          <div className={'row-right'}>
            <div className={'project'}>
              <h4>
                @gdsc-dju/styled-components
                <span className="period-mark">.</span>
              </h4>
              <span className={'time'}>
                <time>2022.07.30 - 2022.08.03</time>
              </span>
              <a
                target="_blank"
                href={
                  'https://github.com/GDSC-Daejin/design-seed/tree/master/packages/styled-components'
                }
                rel="noreferrer"
              >
                Github
              </a>{' '}
              <a
                target="_blank"
                href={
                  'https://www.npmjs.com/package/@gdsc-dju/styled-components'
                }
                rel="noreferrer"
              >
                npm
              </a>
              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                Styled-Components를 활용하여 디자인 에셋을 모듈화시켰습니다.
                Blog프로젝트에 사용된 디자인을 기준으로 개발되었으며 디자인
                에셋이 확정되면 추가로 업데이트할 예정입니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>mode type에 따른 dark, light mode 변경 기능 개발</li>
                <li>color token type 지정</li>
                <li>npm package 배포</li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>React, TypeScript, Styled-components</p>
            </div>
            <div className={'project'}>
              <h4>
                GDSC DJU Tech blog
                <span className="period-mark">.</span>
              </h4>
              <span className={'role'}>
                팀 구성: frontend 3, backend 3, designer 3
              </span>
              <span className={'time'}>
                <time>2022.02.08 - 2022.07.05</time>
              </span>
              <a
                target="_blank"
                href={
                  'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master/packages/gdsc-dju-blog'
                }
                rel="noreferrer"
              >
                Github
              </a>

              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                커뮤니티 전산화/체계화의 필요성으로 기존 사이트와 백엔드를
                공유하며 운영진이 멤버들의 활동을 관리할 수 있도록
                기획하였습니다. 현재 리팩토링 작업 중입니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>Github Action firebase deploy/Preview 세팅</li>
                <li>내 블로그, 스크랩, 프로필 수정 페이지 개발</li>
                <li>글 작성, 수정 페이지 개발</li>
                <li>Alert, Modal 개발</li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>
                React, TypeScript, Styled-component, Recoil, React-Query, axios,
                Framer-motion, firebase Hosting
              </p>
            </div>
            <div className={'project'}>
              <h4>
                GDSC DJU Admin
                <span className="period-mark">.</span>
              </h4>
              <span className={'role'}>팀 구성: frontend 1</span>
              <span className={'time'}>
                <time>2022.05.25 - 2022.07.04</time>
              </span>
              <a
                target="_blank"
                href={
                  'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master/packages/gdsc-dju-admin'
                }
                rel="noreferrer"
              >
                Github
              </a>{' '}
              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                커뮤니티 규모가 커짐에 따라 지원자 관리 기능의 필요성을 느껴
                시작하게 되었습니다. 추후 내부 멤버들의 정보도 열람 가능하도록
                개발할 예정입니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>지원자 관리 페이지, 지원자 세부 정보 열람 기능 개발</li>
                <li>지원자 comment 기능 개발</li>
                <li>지원자 합류과정에 따른 filter 기능 개발</li>
                <li>이메일 로그 열람 및 이메일 자동 전송 기능 개발</li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>
                React, TypeScript, Styled-component, Framer-motion, firebase
                Hosting, firestore, emailjs, React-Query, Jotai
              </p>
            </div>
            <div className={'project'}>
              <h4>
                GDSC DJU Web
                <span className="period-mark">.</span>
              </h4>
              <span className={'role'}>팀 구성: frontend 1</span>
              <span className={'time'}>
                <time>2021.10.29 - 2021.12.27</time>
              </span>
              <a
                target="_blank"
                href={
                  'https://github.com/GDSC-Daejin/gdsc-dju-websites/tree/master/packages/gdsc-dju-web'
                }
                rel="noreferrer"
              >
                Github
              </a>{' '}
              <a
                target="_blank"
                href={'https://web.gdsc-dju.com/'}
                rel="noreferrer"
              >
                SiteLink
              </a>{' '}
              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                1인 개발로 제작한 소개 사이트 입니다. 제작 이후 지원자 수가 50%
                증가했습니다. 코드 리팩토링을 하며 React-lazy를 통한 최적화로
                lighthouse 기준 performance 점수를 92점까지 향상시켰습니다.
                주기적으로 코드를 개선하고 기능을 추가하고 있으며 최근 디자인
                변경을 진행했습니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>코드 재사용성 증가를 위한 Component 분리</li>
                <li>성능 개선을 위한 React-Lazy 적용</li>
                <li>사이트에서 사용되는 color, font-size 디자인 에셋 설정</li>
                <li>사이트 내 동아리 지원 기능 개발</li>
                <li>사용자 세팅에 따른 다크모드 적용 개발</li>
                <li>Github Action firebase Hosting/Preview 세팅 </li>
                <li>
                  webpack → vite 번들러 변경으로 빌드 속도 67% 상승 (98.40s →
                  42.88s)
                </li>
                <li>사파리 크로스브라우징 이슈 해결</li>
              </ul>
              <ul>
                <li>Onboarding page 개발</li>
                <li>html2canvas를 이용한 boarding pass 저장기능 제작</li>
                <li>react-hook-form을 이용한 validation</li>
                <li>Framer-Motion을 이용한 모션 제안 및 추가</li>
              </ul>
              <h5>
                What did I learn<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>CORS 오류</li>
                <li>무료 도메인 이슈</li>
                <li>font-family 이슈</li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>
                React, TypeScript, Styled-component, Jotai, Framer-motion,
                firebase Hosting
              </p>
            </div>
            <div className={'project'}>
              <h4>
                Devfest [GDG X GDSC]
                <span className="period-mark">.</span>
              </h4>
              <span className={'role'}>팀 구성: frontend 3, backend 3</span>
              <span className={'time'}>
                <time>2021. 10. 05 - 2021. 10. 26</time>
              </span>
              <a
                target="_blank"
                href={
                  'https://github.com/devfest-2021/devfest-2021-guidebook-fe'
                }
                rel="noreferrer"
              >
                Github
              </a>{' '}
              <a
                target="_blank"
                href={'https://devfest-2021-guestbook.netlify.app/'}
                rel="noreferrer"
              >
                SiteLink
              </a>
              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                GDG Korea에서 진행하는{' '}
                <a href="https://www.festa.io" target="_blank" rel="noreferrer">
                  Devfest
                </a>{' '}
                출석부 제작에 프론트엔드 개발자 3명 중 한 명으로 참여하였습니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>로그인, 로그아웃 관련 Modal 제작</li>
                <li>유저 프로필, 프로필 수정 개발</li>
              </ul>
              <h5>
                What did I learn<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>백엔드와의 커뮤니케이션</li>
                <li>Commit Convention</li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>React, TypeScript, Styled-component, Recoil, SWR, Axios</p>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className={'row-left'}>
            <h3>
              Team OZET<span className="period-mark">.</span>
            </h3>
            <span className={'role'}>Frontend Developer</span>
            <span className={'time'}>
              <time>2021. 11</time> - 현재
            </span>
          </div>
          <div className={'row-right'}>
            <div className={'project'}>
              <h4>
                OZET
                <span className="period-mark">.</span>
              </h4>
              <span className={'role'}>
                팀 구성: frontend 2, backend 2, android 2, ios 1, designer 3
              </span>
              <span className={'time'}>
                <time>2021. 11. 27 - 현재</time>
              </span>
              <a
                href={'https://github.com/ozet-team/ozet-resume'}
                target="_blank"
                onClick={() => {
                  window.open(
                    'https://github.com/ozet-team/ozet-hybrid',
                    '_blank',
                  );
                }}
                rel="noreferrer"
              >
                Github
              </a>

              <h5>
                Description<span className="period-mark">.</span>
              </h5>
              <p>
                미용사들을 위한 이력서 플랫폼으로 프론트엔드 2명 중 1명으로
                참여하였습니다. 웹뷰와 네이티브앱 간의 차이를 줄이기 위해
                노력했습니다.
              </p>
              <h5>
                What I did<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>반응형 이력서 페이지 개발</li>
                <li>상세공고 페이지 개발</li>
                <li>이력서 PDF 마크업</li>
              </ul>
              <h5>
                What did I learn<span className="period-mark">.</span>
              </h5>
              <ul>
                <li>
                  이력서 pdf 부분에서 백엔드와 협업으로 프론트에서 마크업을,
                  백엔드에서 pdf로의 변환하는 작업을 제안했습니다.
                </li>
                <li>
                  이력서 페이지모션 부분의 개발공수를 고려하며 디자이너 분과
                  상의를 통해 릴리즈 일자에 맞출 수 있도록 조율했습니다.
                </li>
              </ul>
              <h5>
                Tech Stack<span className="period-mark">.</span>
              </h5>
              <p>
                TypeScript, React.js, Styled-component, Recoil, SWR, Axios,
                karrot-frame
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>
          Communication<span className="period-mark">.</span>
        </h2>
        <div className={'other'}>
          <h3>
            Overall<span className="period-mark">.</span>
          </h3>
          <ul>
            <li>
              Framer-motion을 사용하여 UI 및 애니메이션 구현을 즐깁니다. 꼭
              애니메이션이 디자인에 포함되어 있지 않아도 선행해서 애니메이션을
              구현하거나 제안하는 편입니다.
            </li>
            <li>
              프로젝트에 필요하다면 능숙하지 않아도 학습하여 최적의 결과를 낼 수
              있도록 노력합니다.
            </li>
            <li>
              커뮤니티 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를
              적극적으로 하며 아이디어의 수용이 빠릅니다.
            </li>
            <li>솔직하며 직설적인 커뮤니케이션을 선호합니다.</li>
            <li>직위 및 포지션에 관계없이 적극적으로 생각을 피력합니다.</li>
            <li>자신이 틀렸을 수도 있다는 생각을 가지고 있습니다.</li>
            <li>커뮤니케이션은 적은 것보다는 많은게 좋다고 생각합니다.</li>
            <li>프로덕트의 기획 회의부터 참여하는 것을 선호합니다.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>
          Other Experiences<span className="period-mark">.</span>
        </h2>
        <div className={'other'}>
          <h3>
            GDSC Korea<span className="period-mark">.</span>
          </h3>
          <span className={'role'}>GDSC Daejin University Lead</span>
          <span className={'time'}>
            <time>2021. 07. - 현재 </time>
          </span>
          <p>
            Google Developers에서 지원하는{' '}
            <a href={'https://sites.google.com/view/gdeveloperskorea/gdsc'}>
              GoogleDSC
            </a>{' '}
            Daejin University 챕터의 1기{' '}
            <a
              href={
                'https://drive.google.com/file/d/1SNGRgxPexq2h2BCc1RPE7P_Pa2hiHCli/view'
              }
            >
              리드를 수료
            </a>
            했으며 이어서 2기 리드를 맡고 있습니다.
          </p>

          <ul>
            <li>
              <strong>
                GDSC KOR 2021 - 2022{' '}
                <a
                  href={
                    'https://drive.google.com/file/d/1xMd5Gr5jbQ83-ahmh6QNH2v-2zHvMVxz/view'
                  }
                >
                  {' '}
                  우수 리드
                </a>
                로 선정되었습니다.
              </strong>
            </li>
            <li>
              커뮤니티 내부에서 사용하는 서비스(
              <a href={'https://web.gdsc-dju.com/'}>소개 사이트</a>
              {', '}
              <a href={'https://shared.gdsc-dju.com/'}>이벤트 사이트</a>
              {', '}
              <a href={'https://gdsc-dju-blog.web.app/'}>기술 블로그</a>
              )등을 개발했습니다.
            </li>
            <li>
              영어 닉네임을 도입하여 학번, 나이, 경력에 상관없이 수평적 문화를
              조성하도록 노력했습니다.
            </li>
            <li>
              모두가 기획자, 팀 리드가 될 수 있도록 자유로운 커뮤니티를
              만들었습니다.
            </li>
            <li>
              좋은 조직은 좋은 사람이 만듭니다. 성장의지가 강한 분들을
              모셨습니다.
            </li>
            <li>
              충돌은 더 나은 환경을 만든다고 생각하기 때문에 모두가 생각을
              피력할 수 있는 환경을 조성했습니다.
            </li>
            <li>
              Notion과 Slack을 사용하여 프로젝트와 스터디의 효율을 높혔습니다.
            </li>
          </ul>
        </div>
        <div className={'other'}>
          <h3>
            GDSC Career, 하루간 구글을 무료체험 해보세요
            <span className="period-mark">.</span>
          </h3>
          <span className={'time'}>
            <time>2022. 07. 02</time>
          </span>
          <p>
            <a href={'https://festa.io/events/2397'}>
              구글러와 함께하는 커리어 세션
            </a>
            을 기획 및 운영했습니다.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ResumeWithCss;
