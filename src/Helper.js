//LUCKY BIRTHDAY
export const getLuckyNum = (date, lucky) => {
  if (lucky === 0) return false;
  if (lucky === 1) return true;

  let num = Number(date.split("-").join(""));
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
    // console.log(sum, num);
  }

  if (sum % lucky === 0) return true;
  else return false;
};

//PALINDROME BIRTHDAY
const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

const checkPalindrom = (num) => {
  let reverse = num.toString().split("").reverse().join("");
  return num === reverse;
};

const getAllDateFormats = (date) => {
  const newDate = new Date(date);
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let year = newDate.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const ddmmyyyy = `${day}${month}${year}`;
  const mmddyyyy = `${month}${day}${year}`;
  const yyyymmdd = `${year}${month}${day}`;
  const ddmmyy = `${day}${month}${year.toString().slice(2)}`;
  const mmddyy = `${month}${day}${year.toString().slice(2)}`;
  const yymmdd = `${year.toString().slice(2)}${month}${day}`;

  return [ddmmyy, mmddyy, yymmdd, ddmmyyyy, mmddyyyy, yyyymmdd];
};

const checkAllPalindrome = (date) => {
  let arr = getAllDateFormats(date);
  for (let i = 0; i < arr.length; i++) {
    if (checkPalindrom(arr[i])) return true;
  }
  return false;
};

const getNextDate = (date) => {
  const newDate = new Date(date);
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate() + 1;
  let year = newDate.getFullYear();

  const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (checkLeapYear(year) && day > 29) {
      day = 1;
      month++;
    } else if (day > 28) {
      day = 1;
      month++;
    }
  } else {
    if (day > month_days[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return `${year}-${month}-${day}`;
};

const getNextPalindrome = (date) => {
  let countDays = 0;
  let newDate = date;

  while (1) {
    countDays++;
    if (checkAllPalindrome(newDate)) break;
    newDate = getNextDate(newDate);
  }

  return [newDate, countDays];
};

export const getPalindrome = (date) => {
  if (checkAllPalindrome(date)) return { isPalindrome: true };
  else {
    const [newDate, countDays] = getNextPalindrome(date);
    return { isPalindrome: false, palinDate: newDate, days: countDays };
  }
};

//PROFIT/LOSS
export const getProfitLoss = (IP, Q, CP) => {
  let ip = Number(IP);
  let cp = Number(CP);
  let quantity = Number(Q);

  if (ip > cp) {
    const loss = (ip - cp) * quantity;
    const lossPercent = (loss / ip) * 100;
    return { type: "loss", amount: loss, percentage: lossPercent.toFixed(2) };
  } else if (cp > ip) {
    const gain = (cp - ip) * quantity;
    const gainPercent = (gain / ip) * 100;
    return { type: "profit", amount: gain, percentage: gainPercent.toFixed(2) };
  } else {
    return { type: "neutral", amount: 0, percentage: 0 };
  }
};

//QUIZ
//1
export const isTriangle = (angles) => {
  const { angle1, angle2, angle3 } = angles;
  let sum = Number(angle1) + Number(angle2) + Number(angle3);
  if (sum === 180) return true;
  else return false;
};

//3
export const generateRandomAngles = () => {
  let angle1 = Math.floor(Math.random() * 69) + 1;
  let angle2 = Math.floor(Math.random() * (180 - 69 - angle1)) + 1;
  return { angle1, angle2 };
};

//4
export const getHypotenuse = (legs) => {
  const { leg1, leg2 } = legs;

  const leg3 = Math.sqrt(
    Math.pow(Number(leg1), 2) + Math.pow(Number(leg2), 2)
  ).toFixed(3);

  return leg3;
};

//5
export const getArea = ({ base = 0, height = 0 }) => {
  let area = Math.floor((base * height) / 2);
  return area;
};
