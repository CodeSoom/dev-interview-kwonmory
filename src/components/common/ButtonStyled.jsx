import styled from '@emotion/styled';

const ButtonStyled = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '7rem',
  height: '2.5rem',
  backgroundColor: '#546EF6',
  textDecoration: 'none',
  border: '0.125rem solid #546EF6',
  borderRadius: '.5rem',
  outline: 'none',
  color: '#fff',
  fontWeight: '600',
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.22), 0 1px 4px rgba(0, 0, 0, 0.44)',
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover': {
    backgroundColor: '#fff',
    color: '#546EF6',
  },
});

export default ButtonStyled;
