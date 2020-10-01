export const getDateTime = () => {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime =
    year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
  return dateTime;
};

const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const getYear = (date) => {
  date = date || new Date();
  return date.getFullYear().toString();
};

export const getMonth = (date) => {
  date = date || new Date();

  const zeroIndexedMonth = date.getMonth();
  return (zeroIndexedMonth + 1).toString();
};

export const getDay = (date) => {
  date = date || new Date();
  return date.getDate().toString();
};

export const getTime = (date) => {
  date = date || new Date();
  return date.toLocaleTimeString();
};

export const getMonthString = (monthINt) => {
  if (typeof monthINt === "string") {
    monthINt = parseInt(monthINt);
  }
  return monthNames[monthINt];
};
