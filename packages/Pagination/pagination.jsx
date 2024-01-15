import React, { useState } from 'react';
import './pagination.scss';

import { VeeIcon } from '../Icon';



const VeePagination = (props) => {
  let { children, className, total } = props,
      pagerCount = props['pager-count'],
      currentPage = props['current-page'];
  const [showPrevMore, setShowPrevMore] = useState(false);
  const [showNextMore, setShowNextMore] = useState(false);

  total = total || 1;
  pagerCount = pagerCount || 7;
  currentPage = currentPage || 1;

  const pagers = (total, pagerCount, currentPage) => {
    let arr = [],
        middleValue = Math.floor(pagerCount / 2),
        showPrevMore = false,
        showNextMore = false,
        start = total - (pagerCount - 2),
        val = Math.floor((pagerCount - 2) / 2);
    if(total > pagerCount) {
        if(currentPage > middleValue +1) {
            setShowPrevMore(showPrevMore = true);
        } else if (currentPage < total - middleValue) {
            setShowNextMore(showNextMore = true);
        }
    }
    if(showPrevMore && !showNextMore) {
        for( let i = start; i < total; i++) {
            arr.push(i)
        }
    } else if (!showPrevMore && showNextMore) {
        for(let i = 2; i < pagerCount; i++) {
            arr.push(i);
        }
    } else if (showPrevMore && showNextMore) {
        for(let i = currentPage - val; i <= currentPage + val; i++) {
            arr.push(i)
        }
    } else {
        for(let i = 2; i< total; i++) {
            arr.push(i);
        }
    }

    setShowPrevMore(showPrevMore = showPrevMore);
    setShowNextMore(showNextMore = showNextMore);
    return arr;
  }

  const paginationClass = () => {
    let classes = [];
    classes.push(`vee-pagination`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <ul className={paginationClass()}>
      <li>
          <VeeIcon icon="arrow-left"></VeeIcon>
      </li>
      <li>
          <span>1</span>
      </li>
      {
        showPrevMore && 
        <li>
            <span>...</span>
        </li>
      }
      {
        () => {

        
          pagers(total, pagerCount, currentPage).map(p => {
              return (
                <li key={p}>
                    <span>{p}</span>
                </li>
              )
          })
        }
      }
      {
        showNextMore && 
        <li>
            <span>...</span>
        </li>
      }
      
      <li>
          <span>{total}</span>
      </li>
      <li>
          <VeeIcon icon="arrow-right"></VeeIcon>
      </li>
    </ul>
  );
}

export default VeePagination;