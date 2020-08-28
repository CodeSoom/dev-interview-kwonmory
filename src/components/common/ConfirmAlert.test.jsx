import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import ConfirmAlert from './ConfirmAlert';

describe('ConfirmAlert', () => {
  it('renders ConfirmAlert', () => {
    const onClose = jest.fn();
    const message = '테스트';
    const closeMessage = '닫기';
    const confirmMessage = '확인';
    const onHandleConfirm = jest.fn();

    const { container, getByText } = render(<ConfirmAlert
      onClose={onClose}
      message={message}
      closeMessage={closeMessage}
      confirmMessage={confirmMessage}
      onHandleConfirm={onHandleConfirm}
    />);

    expect(container)
      .toHaveTextContent(message);
    expect(container)
      .toHaveTextContent(closeMessage);
    expect(container)
      .toHaveTextContent(confirmMessage);

    expect(onClose)
      .not
      .toBeCalled();
    fireEvent.click(getByText(closeMessage));
    expect(onClose)
      .toBeCalled();

    expect(onHandleConfirm)
      .not
      .toBeCalled();
    fireEvent.click(getByText(confirmMessage));
    expect(onHandleConfirm)
      .toBeCalled();
  });

  context('without props value', () => {
    it('renders ConfirmAlert with default props', () => {
      const { container } = render(<ConfirmAlert />);

      expect(container)
        .toHaveTextContent('다음으로 넘어가시겠습니까?');
      expect(container)
        .toHaveTextContent('취소');
      expect(container)
        .toHaveTextContent('다음으로');
    });
  });

  context('without props onHandleConfirm props', () => {
    it('calls onClose prop method', () => {
      const mockClose = jest.fn();
      const { container, getByText } = render(<ConfirmAlert onClose={mockClose} />);

      expect(container)
        .toHaveTextContent('다음으로 넘어가시겠습니까?');
      expect(container)
        .toHaveTextContent('취소');
      expect(container)
        .toHaveTextContent('다음으로');

      fireEvent.click(getByText('다음으로'));

      expect(mockClose)
        .toBeCalled();
    });
  });

  context('without props onClose props', () => {
    it('calls onHandleConfirm prop method', () => {
      const mockConfirm = jest.fn();
      const { container, getByText } = render(<ConfirmAlert onHandleConfirm={mockConfirm} />);

      expect(container)
        .toHaveTextContent('다음으로 넘어가시겠습니까?');
      expect(container)
        .toHaveTextContent('취소');
      expect(container)
        .toHaveTextContent('다음으로');

      fireEvent.click(getByText('다음으로'));

      expect(mockConfirm)
        .toBeCalled();
    });
  });
});
