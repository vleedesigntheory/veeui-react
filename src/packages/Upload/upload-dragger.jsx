import React from 'react';
import './upload-dragger.scss';

import { VeeIcon } from '../Icon';

const VeeUpload = (props) => {
  let { children, className, accept } = props;

  const uploadDraggerClass = () => {
    let classes = [];
    classes.push(`vee-upload-dragger`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={uploadDraggerClass()}>
        <VeeIcon className="icon" icon="upload"></VeeIcon>
        <span>将文件拖拽到此区域即可上传</span>
    </div>
  );
}

export default VeeUpload;
