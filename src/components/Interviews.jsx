import React from 'react';

const Interviews = ({ interviews }) => {
  if (!interviews || interviews.length === 0) {
    return (
      <div>
        인터뷰 리스트가 없습니다.
      </div>
    );
  }

  return (
    <>
      {JSON.stringify(interviews)}
    </>
  );
};

export default Interviews;
