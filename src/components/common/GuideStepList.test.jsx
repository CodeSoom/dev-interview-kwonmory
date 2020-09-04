import React from 'react';

import { render } from '@testing-library/react';

import GuideStepList from './GuideStepList';

describe('GuideStepList', () => {
  it('render GuideStepList', () => {
    const image = {
      src: '#',
      alt: 'wow',
    };
    const text = '함께 하자';
    const { container, getByAltText } = render(<GuideStepList image={image} text={text} />);

    expect(container).toHaveTextContent(text);
    expect(getByAltText(image.alt)).not.toBeNull();
  });
});
