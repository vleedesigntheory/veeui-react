import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { VeeButton, VeeButtonGroup, VeeIcon, VeeRow, VeeCol } from '@/packages';

const fn = (e) => {
  console.log(e)
}

const App = () => {
    return (
      <div className="vee-app">
          <ul>
            <li>
              <h3>按钮</h3>
              <span className="vee-break"></span>
              <VeeButton>默认按钮</VeeButton>&nbsp;
              <VeeButton type="primary">普通按钮</VeeButton>&nbsp;
              <VeeButton type="warning">警告按钮</VeeButton>&nbsp;
              <VeeButton type="danger">危险按钮</VeeButton>&nbsp;
              <VeeButton type="info">提示按钮</VeeButton>&nbsp;
              <VeeButton type="success">成功按钮</VeeButton>&nbsp;
              <span className="vee-break"></span>
              <VeeButton type="info" icon="search">图标按钮</VeeButton>&nbsp;
              <VeeButton type="info" icon="warning-outline"></VeeButton>&nbsp;
              <VeeButton type="info" icon="plus" onClick={fn} icon-position="right">图标按钮</VeeButton>&nbsp;
              <VeeButton type="success" loading>加载按钮</VeeButton>
              <span className="vee-break"></span>
              <VeeButtonGroup>
                <VeeButton icon="arrow-left" icon-position="left">上一页</VeeButton>
                <VeeButton icon="arrow-right" icon-position="right">下一页</VeeButton>
              </VeeButtonGroup>
            </li>
            <li>
              <h3>图标</h3>
              <span className="vee-break"></span>
              <VeeIcon icon="location"></VeeIcon>&nbsp;
              <VeeIcon icon="plus"></VeeIcon>&nbsp;
              <VeeIcon icon="warning-outline"></VeeIcon>&nbsp;
              <VeeIcon icon="search"></VeeIcon>&nbsp;
              <VeeIcon icon="star-on"></VeeIcon>&nbsp;
              <VeeIcon icon="success"></VeeIcon>&nbsp;
              <VeeIcon icon="paperclip"></VeeIcon>&nbsp;
            </li>
            <li>
              <h3>布局</h3>
              <span className="vee-break"></span>
              <VeeRow>
                <VeeCol span="12">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol span="12">
                  <div className="vee-col-light"></div>
                </VeeCol>
              </VeeRow>
              <span className="vee-break"></span>
              <VeeRow>
                <VeeCol span="24">
                  <div className="vee-col-medium"></div>
                </VeeCol>
              </VeeRow>
              <span className="vee-break"></span>
              <VeeRow>
                <VeeCol span="6" offset="1">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol span="6" offset="3">
                  <div className="vee-col-light"></div>
                </VeeCol>
              </VeeRow>
              <span className="vee-break"></span>
              <VeeRow gutter="20">
                <VeeCol span="6">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol span="6">
                  <div className="vee-col-light"></div>
                </VeeCol>
                <VeeCol span="6">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol span="6">
                  <div className="vee-col-light"></div>
                </VeeCol>
              </VeeRow>
              <span className="vee-break"></span>
              <VeeRow justify="end">
                <VeeCol span="6">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol span="6">
                  <div className="vee-col-light"></div>
                </VeeCol>
              </VeeRow>
              <span className="vee-break"></span>
              <VeeRow gutter="10">
                <VeeCol xs="8" sm="6" md="4" lg="3" xl="{'span':2,'offset':23,'aaa':1}">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol xs="4" sm="6" md="8" lg="9" xl="11">
                  <div className="vee-col-light"></div>
                </VeeCol>
                <VeeCol xs="4" sm="6" md="8" lg="9" xl="11">
                  <div className="vee-col-dark"></div>
                </VeeCol>
                <VeeCol xs="8" sm="6" md="4" lg="3" xl="1">
                  <div className="vee-col-light"></div>
                </VeeCol>
              </VeeRow>
            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
      </div>
      
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
