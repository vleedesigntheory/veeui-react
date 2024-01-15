import React from 'react';
import './carousel.scss';

const VeeCarouselItem = (props) => {
  let { children, className, height, autoplay, delay, loop } = props,
      initialIndex = props['initial-index'];

  height = height || '200px';
  autoplay = autoplay || true;
  delay = delay || 3000;
  initialIndex = initialIndex || 0;
  loop = loop || true;

  const carouselItemClass = () => {
    let classes = [];
    classes.push(`vee-carousel-item`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <transition>
        <div className={carouselItemClass()}>
            <>{children}</>
        </div>
    </transition>
  );
}

export default VeeCarouselItem;
