function reverseStr(str){
    return str.split('').reverse().join('');
}
// var revStr = reverseStr("racecare");
// console.log(revStr);

function isPalindrome(str){
    // console.log(str);
    var revStr = reverseStr(str);
    return revStr === str;
         
    
    
}

function convertDateToStr(date){
    // console.log(date)
    var dateStr = {day:'', month:'', year:"" };
    if(date.day < 10){
        dateStr.day = "0" + date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }
    else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}

// dateString = convertDateToStr(date);

function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);
    
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy , mmddyyyy, yyyymmdd,ddmmyyy, mmddyy,yymmdd ];
}
// var allDateFormat = getAllDateFormats(dateStr);

function checkPalindromeForAllDateFormats(date){
    dateString = convertDateToStr(date);
    var listOfPalindromes = getAllDateFormats(dateString);

    var flag = false;
    for(var i=0 ; i<listOfPalindromes.length ; i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag = true;
            break;
        }
    }
    return flag;
}
// console.log(checkPalindromeForAllDateFormats(dateString));
function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year%100 === 0){
        return false;
    }
    if(year%4 === 0){
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++ ;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    }
  }
// var newDate = getNextDate(date);
// console.log(newDate)


function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = getNextDate(date);
    console.log(nextDate)
    while(1){
        ctr++ ;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        newDate = getNextDate(nextDate);
    }
    return [ctr,nextDate];
}
var date = {
    day:28,
    month:2,
    year:2020
};

console.log(getNextPalindromeDate(date));



