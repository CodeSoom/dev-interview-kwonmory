import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomLazyLoadImage = ({ image }) => (
  <>
    <LazyLoadImage
      alt={image.alt}
      src={image.src} // use normal <img> attributes as props
      effect="blur"
    />
  </>
);

export default CustomLazyLoadImage;
