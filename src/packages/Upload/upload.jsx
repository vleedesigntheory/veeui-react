import React from 'react';
import './upload.scss';

import VeeUploadDragger from './upload-dragger';
import { VeeIcon } from '../Icon';
import { VeeProgress } from '../Progress';

import ajax from '../utils/ajax';

const VeeUpload = (props) => {
  let { children, className, drag, accept, name, fileList, action, limit, multiple, onExceed, onChange, onSuccess, onError, onProgress, beforeUpload, httpRequest } = props;

  name = name || 'file';
  fileList = fileList || [];
  httpRequest = httpRequest || ajax;
  drag = drag || false;

  let files = [],
      tempIndex = 1,
      reqs = {};

  // 使用自定义useWatch进行监控
  files = fileList.map(item => {
      item.uid = Date.now() + tempIndex++;
      item.status = 'success';
      return item;
  })

  const uploadClass = () => {
    let classes = [];
    classes.push(`vee-upload`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  }
  
  return (
    <div className={uploadClass()}>
        {
            drag && 
            <VeeUploadDragger accept={accept}/>
        }
        {
            !drag && 
            <>
                <div className="vee-upload-button">{children}</div>
                <input 
                  type="file"
                  accept={accept}
                  multiple={multiple}
                  name={name}
                  className="native-input"
                />
            </>    
        }
        <div className="vee-upload-tip">
            {children}
        </div>
        <ul>
            {
                files.map((file,index) => {
                    return (<li key={index}>
                        <div className="list-item">
                            <VeeIcon icon="document"></VeeIcon>
                            {
                                file.status == 'uploading' &&
                                <VeeProgress 
                                    percentage={file.percentage}
                                />
                            }
                            {file.status}
                            <VeeIcon icon="close"></VeeIcon>
                        </div>
                    </li>)
                })
            }
        </ul>
    </div>
  );
}

export default VeeUpload;
