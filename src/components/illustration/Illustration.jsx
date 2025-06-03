import { useState, useEffect } from 'react';
import i from './Illustration.module.scss';

const Illustration = ({ description }) => {
  const [imageSrc, setImageSrc] = useState('/images/image-header-desktop.webp');

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1440) {
        setImageSrc('/images/image-header-desktop.webp');
      } else {
        setImageSrc('/images/image-header-mobile.webp');
      }
    };
    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <figure className={i.illustration}>
      <img
        className={i['illustration__image']}
        src={imageSrc}
        alt={description}
      />
    </figure>
  );
};

export default Illustration;
