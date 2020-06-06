const pleasantTimesTemplate = [
  "000000", 
  "010010", 
  "011110", 
  "011115", 
  "010101", 
  "010301", 
  "011044", 
  "011335", 
  "002200", 
  "011001", 
  "012001",
  "012002",
  "012012", 
  "012021", 
  "012210", 
  "002244", 
  "011110", 
  "002200", 
  "002222", 
  "002300", 
  "011111", 
  "010000", 
  "011011", 
  "011311",
  "011344", 
  "011331", 
  "011300", 
  "012301",
  "012310",
  "010310",
  "010301",
];

const timeLogic = () => {
  let time = checkTime().join("");
  let compare = [];
  for(i=0; i<time.length; i++){
    compare.push(time.indexOf(time.charAt([i])));
  }
  for(key of pleasantTimesTemplate){
    if(key === compare.join("")){
      let currentTime = Array.from(checkTime());
      setTime(currentTime[0],currentTime[1],currentTime[2])
      console.log(currentTime);
    }
  }
  return compare;
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

const setTime = (hour, minute, second) => {
  let clock = document.getElementsByClassName("clockNum");
  clock[0].innerText = hour;
  clock[1].innerText = minute;
  clock[2].innerText = second;
};

setInterval(timeLogic, 1*1000);