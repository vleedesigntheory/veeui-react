import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { VeeButton, VeeButtonGroup, VeeIcon, VeeRow, VeeCol, VeeContainer, VeeHeader, VeeAside, VeeMain, VeeFooter, VeeInput, VeeUpload, VeeDatePicker, VeeDateRangePicker } from '@/packages';

const fn = (e) => {
  console.log(e)
}

let fileList = [
  {
    url: 'xxx',
    name: 'aaa'
  },
  {
    url: 'xxx',
    name: 'bbb'
  },
],
date = '',
dateRange = [],
count = 10;

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
              <h3>容器</h3>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeHeader className="vee-container-dark">Header</VeeHeader>
                <VeeMain className="vee-container-medium">Main</VeeMain>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeHeader className="vee-container-dark">Header</VeeHeader>
                <VeeMain className="vee-container-medium">Main</VeeMain>
                <VeeFooter className="vee-container-dark">Footer</VeeFooter>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeAside className="vee-container-light" width="200px">Aside</VeeAside>
                <VeeMain className="vee-container-medium">Main</VeeMain>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeHeader className="vee-container-dark">Header</VeeHeader>
                <VeeContainer>
                  <VeeAside className="vee-container-light" width="200px">Aside</VeeAside>
                  <VeeMain className="vee-container-medium">Main</VeeMain>
                </VeeContainer>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeHeader className="vee-container-dark">Header</VeeHeader>
                <VeeContainer>
                  <VeeAside className="vee-container-light" width="200px">Aside</VeeAside>
                  <VeeContainer>
                    <VeeMain className="vee-container-medium">Main</VeeMain>
                    <VeeFooter className="vee-container-dark">Footer</VeeFooter>
                  </VeeContainer>
                </VeeContainer>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeAside className="vee-container-light" width="200px">Aside</VeeAside>
                <VeeContainer>
                  <VeeHeader className="vee-container-dark">Header</VeeHeader>
                  <VeeMain className="vee-container-medium">Main</VeeMain>
                </VeeContainer>
              </VeeContainer>
              <span className="vee-break"></span>
              <VeeContainer>
                <VeeAside className="vee-container-light" width="200px">Aside</VeeAside>
                <VeeContainer>
                  <VeeHeader className="vee-container-dark">Header</VeeHeader>
                  <VeeMain className="vee-container-medium">Main</VeeMain>
                  <VeeFooter className="vee-container-dark">Footer</VeeFooter>
                </VeeContainer>
              </VeeContainer>
            </li>
            <li>
              <h3>输入框</h3>
              <span className="vee-break"></span>
              <VeeInput v-model="value" type="text" placeholder="请输入内容" name="username"></VeeInput>&nbsp;
              <VeeInput v-model="value" type="password" placeholder="请输入内容" name="userpassword"></VeeInput>&nbsp;
              <VeeInput v-model="value" disabled type="text" placeholder="请输入内容" name="username"></VeeInput>&nbsp;
              <VeeInput v-model="value" clearable type="text" placeholder="请输入内容" name="username"></VeeInput>&nbsp;
              <VeeInput v-model="value" show-password type="password" placeholder="请输入内容" name="userpassword"></VeeInput>
              <span className="vee-break"></span>
              <VeeInput v-model="value" prefix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></VeeInput>&nbsp;
              <VeeInput v-model="value" suffix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></VeeInput>&nbsp;
            </li>
            <li>
              <h3>文件上传</h3>
              <span className="vee-break"></span>
              <p className="vee-note">
                name 输入框提交到后台的字段名字<br/>
                action 提交到后端的路径<br/>
                limit 限制提交个数<br/>
                on-exceed 用来如果超出限制后方法<br/>
                on-change 上传文件发生变化后执行方法<br/>
                on-success 上传成功时候会触发<br/>
                on-error 上传失败时候会触发<br/>
                fileList 显示已经上传过的文件<br/>
              </p>
              <span className="vee-break"></span>
              <VeeUpload
                name="avatar"
                action="http://localhost:3000/upload"
                file-list={fileList}
                limit="3"
                accept="image/jpeg"
                multiple
                drag
              >
                <VeeButton type="primary" icon="upload1">上传文件</VeeButton>
                <div slot="tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </VeeUpload>
            </li>
            <li>
              <h3>日历</h3>
              <span className="vee-break"></span>
              {date}<VeeDatePicker v-model="date" date={date}></VeeDatePicker>&nbsp;
              {dateRange}<VeeDateRangePicker v-model="dateRange"></VeeDateRangePicker>
            </li>
            <li>
              <h3>无限滚动</h3>
              <span className="vee-break"></span>
              <div >
                <div>
                  <ul 
                    style={{overflowY: 'scroll'}}
                    className="vee-infinite-box" 
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled"
                    infinite-scroll-delay="delay"
                    infinite-scroll-distance="distance"
                    infinite-scroll-immediate="immediate"
                  >
                    {
                      (() => {
                        let arr = [];
                        for(let c=0; c< count; c++) {
                          arr.push(<li key={c}>{c}</li>)
                        }
                        return arr;
                      })()
                    }     
                  </ul>
                </div>
              </div>
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
