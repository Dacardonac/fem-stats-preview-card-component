import { useState, useEffect } from 'react';
import i from './Illustration.module.scss';

const Illustration = () => {
  const [imageSrc, setImageSrc] = useState('/src/assets/images/image-header-desktop.webp');

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1440) {
        setImageSrc('/src/assets/images/image-header-desktop.webp');
      } else {
        setImageSrc('/src/assets/images/image-header-mobile.webp');
      }
    };
    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <figure className={i.illustration}>
      <img
        className={i["illustration__image"]}
        src={imageSrc}
        alt="header image"
      />
    </figure>
  );
};

export default Illustration;
