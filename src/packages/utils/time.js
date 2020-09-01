export default function getYearMonthDay(date) {
    const year = date.getFullYear(),
          month = date.getMonth(),
          day = date.getDate();
    return [year, month, day];
}