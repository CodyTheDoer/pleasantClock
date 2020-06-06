/*
What dictates a plesant time.
in blocks of HH MM SS.

TWO MATCHING
AB AB AB
AB BB BA
AB AA BA
AA BB AA
AB BA AB

THREE MATCHING
AB CA BC
AB CC BA
AA BB CC

FOUR MATCHING
AB BB BA
AA BB AA
AB CC CC
CC AB CC
AA BB BB

FIVE MATCHING
AB BB BB
BA BB BB 

SIX MATCHING
AA AA AA
*/

const plesantTimes = {
  templetTwo1: 'ABABAB',
  templetTwo2: 'ABBBBA',
  templetTwo3: 'ABAABA',
  templetTwo4: 'AABBAA',
  templetTwo5: 'ABBAAB',
  templetThree1: 'ABCABC',
  templetThree2: 'ABCCBA',
  templetThree3: 'AABBCC',
  templetFour1: 'ABBBBA',
  templetFour2: 'AABBAA',
  templetFour3: 'ABCCCC',
  templetFour4: 'AABBBB',
  templetFour5: 'AABCAA',
  templetFive1: 'ABBBBB',
  templetFive1: 'BABBBB',
  templetSix1: 'AAAAAA',
};

const checkTime = () => {
  let time = new Date;
  let hour = `${time.getHours()}`;
  let minute = `${time.getMinutes()}`;
  let second = `${time.getSeconds()}`;
  if(hour.length === 1){
    hour = `0${hour}`;
  }
  if(minute.length === 1){
    minute = `0${minute}`;
  }
  if(second.length === 1){
    second = `0${second}`;
  }
  let timeArray = [hour,minute,second];
  return timeArray;
};

setInterval(checkTime(), 1*1000);