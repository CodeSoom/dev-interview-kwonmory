import React from 'react';

import { useHistory } from 'react-router-dom';

import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faHippo, faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import BaseLayout from '../../layout/BaseLayout';

import intro1Image from '../../../assets/images/intro1.png';
import intro2Image from '../../../assets/images/intro2.png';
import intro3Image from '../../../assets/images/intro3.png';
import intro4Image from '../../../assets/images/intro4.png';

const IntroSection = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 3.3rem)',
  padding: '1rem',
  backgroundImage: 'linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%)',

  article: {
    userSelect: 'none',

    '&:first-of-type': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '3rem 0',

      h3: {
        margin: '.6rem .5rem',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '2.2rem',
        fontWeight: 600,
        textAlign: 'center',
      },
      h2: {
        margin: '.6rem .5rem',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '1.3rem',
        textAlign: 'center',
      },
    },
    '&:nth-of-type(2)': {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '4rem 0  3rem 0',

      div: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 .5rem',
        width: '13rem',

        button: {
          width: '10rem',
          height: '3rem',
          backgroundColor: '#6980F7',
          border: '2px solid rgba(255,255,255,0.9)',
          outline: 'none',
          borderRadius: '.2rem',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 500,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: '#fff',
            color: '#6980F7',
          },
        },
      },
    },
    '&:nth-of-type(3)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#fff',
      p: {
        marginBottom: '.5rem',
      },
    },
    '&:nth-of-type(4)': {
      marginTop: '2rem',

      ul: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '1rem',

        li: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '1rem 1.5rem',

          img: {
            width: '18rem',
            margin: '.7rem 0',
            borderRadius: '.3rem',
          },
          p: {
            h2: {
              color: '#fff',
            },
          },
        },
      },
    },
  },
});

const leftRight = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
`;

const SpacialLogoStyled = styled(FontAwesomeIcon)`
    animation: ${leftRight} 2s 1s ease infinite;
`;

const MainPage = () => {
  const history = useHistory();

  const handleMoveInterviews = () => {
    history.push('/interviews');
  };

  return (
    <BaseLayout>
      <IntroSection>
        <article>
          <h3>
            Interview
            {' '}
            <FontAwesomeIcon icon={faTimes} />
            {' '}
            You
          </h3>
          <h2>
            <FontAwesomeIcon
              icon={faChevronLeft}
            />
            셀프 인터뷰로 지식을 체크하라
            <FontAwesomeIcon
              icon={faChevronRight}
            />
          </h2>
        </article>
        <div>
          <SpacialLogoStyled
            icon={faHippo}
            size="5x"
            color="rgba(255,255,255,0.9)"
          />
        </div>
        <article>
          <div>
            <button type="button" onClick={handleMoveInterviews}>시작하기</button>
          </div>
        </article>
        <article>
          <p>문제를 풀어보세요</p>
          <p>셀프 피드백으로 성장하세요</p>
        </article>

        <article>
          <ul>
            <li>
              <img src={intro1Image} alt="단계이미지" />
              <p>
                <h2>
                  안내에 따라 시작해봅시다.
                </h2>
              </p>
            </li>
            <li>
              <img src={intro2Image} alt="단계이미지" />
              <p>
                <h2>
                  질문에 스스로 대답을 해보세요.
                </h2>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <img src={intro3Image} alt="단계이미지" />
              <p>
                <h2>
                  스스로 피드백을 해봅시다.
                </h2>
              </p>
            </li>
            <li>
              <img src={intro4Image} alt="단계이미지" />
              <p>
                <h2>
                  모든 피드백을 보고 다시한번 생각해봐요.
                </h2>
              </p>
            </li>
          </ul>
        </article>
      </IntroSection>
    </BaseLayout>
  );
};

export default MainPage;
