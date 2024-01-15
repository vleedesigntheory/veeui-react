import React from 'react';
import './carousel.scss';

const VeeCarousel = (props) => {
  let { children, className, height, autoplay, delay, loop } = props,
      initialIndex = props['initial-index'];

  height = height || '200px';
  autoplay = autoplay || true;
  delay = delay || 3000;
  initialIndex = initialIndex || 0;
  loop = loop || true;

  const carouselClass = () => {
    let classes = [];
    classes.push(`vee-carousel`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={carouselClass()}>
        <div className="viewport">
            <>{children}</>
        </div>
    </div>
  );
}

export default VeeCarousel;
