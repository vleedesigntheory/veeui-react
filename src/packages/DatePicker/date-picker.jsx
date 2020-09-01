import React, { useState } from 'react';
import './date-picker.scss';

import getYearMonthDay from '../utils/time';

import { VeeIcon } from '../Icon';
import { VeeInput } from '../Input';

const VeeDatePicker = (props) => {
  let { children, className, date } = props;

  date = date || new Date();

  const [year, month, day] = getYearMonthDay(date);
  
  let [isVisible, setVisible] = useState(true);
  let [mode, setMode] = useState('date');
  let [time, setTime] = useState({ // 显示的时间
    year,
    month,
    day
  });
  let [tempTime, setTempTime] = useState({ // 操作的时间
    year,
    month,
    day
  });
  let weeks = ['日', '一', '二', '三', '四', '五', '六'],
      months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  // computed
  const visibleDate = () => {
    let firstDay = new Date(tempTime.year, tempTime.month, 1),
        weekDay = firstDay.getDay();
    weekDay = weekDay == 0 ? 7 : weekDay;
    let start = firstDay - weekDay * 60 * 60 * 24 * 1000,
        arr = [];
    for( let i = 0; i < 42; i++ ) {
        arr.push(new Date(start + i * 60 * 60 * 24 * 1000));
    }
    return arr;
  };

  const formatDate = () => {
    if(this.date) {
        const { year, month, day } = time;
        return `${year}-${(month + 1 + '').padStart(2,0)}-${(day + '').padStart(2,0)}`;
    }
  };

  const startYear = () => {
    return tempTime.year - tempTime.year % 10;
  }


  // methods

  const datePickerClass = () => {
    let classes = [];
    classes.push(`vee-date-picker`);
    if(className) {
        classes.push(className)
    }
    return classes.join(' ');
  };

  const handleFocus = () => {
    setVisible(isVisible = true);
  };

  const handleBlur = () => {
    setVisible(isVisible = false);
    setMode(mode = 'date');
  };
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    const reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    if(newValue.match(reg)) {
        //this.$emit('input', new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3));
    } else {
        e.target.value = this.formatDate;
    };
    handleBlur();
  };

  const selectDate = (date) => {
    //this.$emit('input', date);
    handleBlur();
  };

  const selectYear = (year) => {
    setTempTime({
        year,
        month,
        day
    });
    setMode(mode = 'month');
  };

  const mapMonth = (month) => {
    switch (month) {
        case '一月':
            return 0;
        case '二月':
            return 1;
        case '三月':
            return 2;
        case '四月':
            return 3;
        case '五月':
            return 4;
        case '六月':
            return 5;
        case '七月':
            return 6;
        case '八月':
            return 7;
        case '九月':
            return 8;
        case '十月':
            return 9;
        case '十一月':
            return 10;
        case '十二月':
            return 11;
        default:
            break;
    }
  };

  const selectMonth = (month) => {
    setTempTime(tempTime.month = mapMonth(month));
    setMode(mode = 'date');
  };

  const getCurrentDate = (i,j) => {
    return visibleDate()[ ( i-1 ) * 7 + ( j-1 ) ]
  };

  const getCurrentYear = (i,j) => {
    return startYear + 4 * ( i - 1 ) + ( j-1 );
  };

  const getCurrentMonth = (i,j) => {
    return months[ 4 * ( i - 1 ) + ( j-1 ) ];
  };

  const isCurrentMonth = (date) => {
    const { year, month } = tempTime;
    const [ y, m ] = getYearMonthDay(date);
    return year == y && month == m;
  };

  const isToday = (date) => {
    const [ year, month, day ] = getYearMonthDay(new Date());
    const [ y, m, d ] = getYearMonthDay(date);
    return year == y && month == m && day == d;
  };

  const isSelect = (date) => {
    const { year, month, day } = time;
    const [ y, m, d ] = getYearMonthDay(date);
    return year == y && month == m && day == d;
  };

  const changeMonth = (count) => {
    const oldDate = new Date(tempTime.year, tempTime.month);
    const newDate = oldDate.setMonth(oldDate.getMonth() + count);
    const [ year, month ] = getYearMonthDay(new Date(newDate));
    setTempTime(tempTime.year = year);
    setTempTime(tempTime.month = month);
  };

  const changeYear = (count) => {
    const oldDate = new Date(tempTime.year, tempTime.month);
    const newDate = oldDate.setFullYear(oldDate.getFullYear() + count);
    const [ year ] = getYearMonthDay(new Date(newDate));
    setTempTime({
        year,
        month,
        day
    });
  };

  const innerClass = (mode, i, j) => {
    let classes = [];
    classes.push(`cell`);
    if(mode == 'date') {
        classes.push(`cell-date`);
        !isCurrentMonth(getCurrentDate(i,j)) && classes.push(`isNotCurrentMonth`);
        isToday(getCurrentDate(i,j)) && classes.push(`isToday`);
        isSelect(getCurrentDate(i,j)) && classes.push(`isSelect`);
    } else if (mode == 'year') {
        classes.push(`cell-year`);
        !isCurrentMonth(getCurrentDate(i,j)) && classes.push(`isNotCurrentMonth`);
        getCurrentYear(i,j) == tempTime.year && classes.push(`isToday`);
        ( i==3 && j==3 ) || ( i==3 && j==4 ) && classes.push(`yearHide`);
    } else if (mode == 'month') {
        classes.push(`cell-month`);
        !isCurrentMonth(getCurrentDate(i,j)) && classes.push(`isNotCurrentMonth`);
        mapMonth(getCurrentMonth(i,j)) == tempTime.month && classes.push(`isToday`);
    }
    return classes.join(' ');
  }

  const innerClick = (mode, i, j) => {
    let clickes = [];
    if(mode == 'date') {
        clickes = () => selectDate(getCurrentDate(i,j));
    } else if (mode == 'year') {
        clickes = () => selectYear(getCurrentYear(i,j));
    } else if (mode == 'month') {
        clickes = () => selectMonth(getCurrentMonth(i,j));
    }
    return clickes;
  }

  const innerContent = (mode, i, j) => {
    let contents = [];
    if(mode == 'date') {
        contents.push(`${getCurrentDate(i,j).getDate()}`)
    } else if (mode == 'year') {
        contents.push(`${getCurrentYear(i,j)}`)
    } else if (mode == 'month') {
        contents.push(`${getCurrentMonth(i,j)}`)
    }
    return contents.join(' ');
  }

  const dualLoop = (iNum, jNum) => {
    let row = [],col = [];
    for(let i = 1; i <= iNum; i++) {
        row.push(i);
    };
    for(let j = 1; j <= jNum; j++) {
        col.push(j);
    };
    return (
        <>
            {
                row.map(i =>
                    <div
                        key={`row_${i}`}
                    >
                        {
                            col.map(j =>     
                                <span 
                                    className={innerClass(mode, i, j)}
                                    onClick={() => innerClick(mode, i, j)}
                                    key={`col_${j}`}
                                >
                                    {innerContent(mode, i, j)}
                                </span>
                            )
                        }   
                    </div>
                )
            }
        </>
    )
  }

  return (
    <div className={datePickerClass()} v-click-outside="handleBlur">
        <VeeInput suffix-icon="date" value={formatDate} onFocus={handleFocus} onChange={handleChange}></VeeInput>
        {
            isVisible && 
            <div className="vee-date-picker-box">
                <div className="vee-date-picker-content">
                    {
                        mode == 'date' &&
                        <>
                            <div className="vee-date-picker-header">
                                <VeeIcon icon="d-arrow-left" onClick={() => changeYear(-1)}></VeeIcon>
                                <VeeIcon icon="arrow-left" onClick={() => changeMonth(-1)}></VeeIcon>
                                <span><b onClick={() => setMode(mode = 'year')}>{tempTime.year}</b>年 <b onClick={() => setMode(mode = 'month')}>{tempTime.month + 1}</b>月</span>
                                <VeeIcon icon="arrow-right" onClick={() => changeMonth(1)}></VeeIcon>
                                <VeeIcon icon="d-arrow-right" onClick={() => changeYear(1)}></VeeIcon>
                            </div>
                            <div>
                                {
                                    weeks.map(week => {
                                        return (
                                            <span className="cell cell-date" key={week}>{week}</span>
                                        )
                                    })
                                }
                            </div>
                            {
                                dualLoop(6, 7)
                            }
                        </>
                    }
                    {
                        mode == 'year' &&
                        <>
                            <div className="vee-date-picker-header">
                                <VeeIcon icon="d-arrow-left" onClick={() => changeYear(-10)}></VeeIcon>
                                <span><b onClick={() => setMode(mode = 'year')}>{startYear}</b>年 - <b onClick={() => setMode(mode = 'year')}>{startYear + 9}</b>年</span>
                                <VeeIcon icon="d-arrow-right" onClick={() => changeYear(10)}></VeeIcon>
                            </div>
                            {
                                dualLoop(3, 4)
                            }
                        </>
                    }
                    {
                        mode == 'month' &&
                        <>
                            <div className="vee-date-picker-header">
                                <VeeIcon icon="arrow-left" onClick={() => changeYear(-1)}></VeeIcon>
                                <span><b onClick={() => setMode(mode = 'year')}>{tempTime.year}</b>年</span>
                                <VeeIcon icon="arrow-right" onClick={() => changeYear(1)}></VeeIcon>
                            </div>
                            {
                                dualLoop(3, 4)
                            }
                        </>
                    }
                </div>
            </div>
        }
    </div>
  );
}

export default VeeDatePicker;
