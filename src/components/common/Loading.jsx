import React from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';

import styled from '@emotion/styled';

const Warpper = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255, 0.8)',
  zIndex: 10,
}, (props) => ({
  display: props.flag ? 'flex' : 'none',
}));

const LoaderStyled = styled(ScaleLoader)({
  opacity: '1',
});

const Loadding = ({ flag }) => (
  <Warpper flag={flag}>
    <LoaderStyled
      height={50}
      width={10}
      radius={4}
      color="#123abc"
      loading={flag}
    />
  </Warpper>
);

export default React.memo(Loadding);
