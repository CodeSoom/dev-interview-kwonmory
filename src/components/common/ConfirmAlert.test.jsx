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

    expect(container).toHaveTextContent(message);
    expect(container).toHaveTextContent(closeMessage);
    expect(container).toHaveTextContent(confirmMessage);

    expect(onClose).not.toBeCalled();
    fireEvent.click(getByText(closeMessage));
    expect(onClose).toBeCalled();

    expect(onHandleConfirm).not.toBeCalled();
    fireEvent.click(getByText(confirmMessage));
    expect(onHandleConfirm).toBeCalled();
  });
});
