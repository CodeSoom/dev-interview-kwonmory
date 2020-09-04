import React from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  width: '15rem',
  minHeight: '9rem',
  padding: '1rem .5rem',
  borderRadius: '.2rem',
  boxShadow: '1px 1px rgba(0, 0, 0, 0.3)',
  backgroundColor: '#fff',
  userSelect: 'none',

  img: {
    display: 'block',
    width: '40%',
    marginBottom: '1rem',
  },

  h1: {
    fontWeight: '500',
  },

  div: {
    marginTop: '1rem',
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '13rem',
      height: '3rem',
      border: 'none',
      background: 'transparent',
      fontWeight: '600',
      color: 'rgba(0,0,0,0.8)',
      cursor: 'pointer',
    },
  },

  'button:first-of-type': {
    width: '13rem',
    height: '3rem',
    borderRadius: '.2rem',
    border: 'none',
    backgroundColor: '#6BCCEF',
    color: '#fff',
    cursor: 'pointer',
  },
});

const ConfirmAlert = ({
  onClose, message = '다음으로 넘어가시겠습니까?', closeMessage = '취소', confirmMessage = '다음으로',
  onHandleConfirm,
}) => (
  <Wrapper>
    <img src="https://svgsilh.com/svg/1770788.svg" alt="강아지" />
    <h1>{message}</h1>
    <div>
      <button
        type="button"
        onClick={() => {
          if (onHandleConfirm) onHandleConfirm();
          if (onClose) onClose();
        }}
      >
        {confirmMessage}
      </button>
      <button type="button" onClick={onClose}>{closeMessage}</button>
    </div>
  </Wrapper>
);

export default React.memo(ConfirmAlert);
