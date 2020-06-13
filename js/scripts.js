let pleasantArrays = [
  ["12", "34", "56"],
  ["01", "23", "45"],
]

const pleasantCheck = () => {
  let timeArray = Array.from(checkTime());
  let hour = timeArray[0];
  let minute = timeArray[1];
  let second = timeArray[2];
  let timeArraySplit1 = timeArray[0] + timeArray[1].split("").shift();
  let timeArraySplit2 = timeArray[1].split("").pop() + timeArray[2];
  let pleasantCounter = 0;
 
  // [12, 12, 12]
  // [10, 10, 10]
  if(hour === minute && hour === second){pleasantCounter++}; 
  
  // [01, 54, 10]
  // [12, 35, 21]
  if(hour === second.split("").reverse().join("")){pleasantCounter++};

  // [12, 21, 12]
  // [05, 50, 05]
  if(hour === second && hour === minute.split("").reverse().join("")){pleasantCounter++}; 

  // [12, 44, 12]
  // [03, 22, 03]
  if(hour === second && minute.split("")[0] === minute.split("")[1]){pleasantCounter++}; 

  // [12, 45, 12]
  // [03, 21, 03]
  if(hour === second && minute % 3 === 0){pleasantCounter++}; 

  // [12, 45, 21]
  // [03, 21, 30]
  if(hour === second.split("").reverse().join("") && minute % 3 === 0){pleasantCounter++}; 
    
  // [11, 22, 33]
  // [11, 55, 00]
  if(hour.split("")[0] === hour.split("")[1] && minute.split("")[0] === minute.split("")[1] && second.split("")[0] === second.split("")[1]){pleasantCounter++};

  // [233, 233]
  // [124, 124]
  if(timeArraySplit1 === timeArraySplit2){pleasantCounter++};

  // [213, 312]
  // [124, 421]
  if(timeArraySplit1 === timeArraySplit2.split("").reverse().join("")){pleasantCounter++};

  for(i=0; i<pleasantArrays.length; i++){
    let timeCheckCounter = 0;
    if(timeArray[0] === pleasantArrays[i][0]){timeCheckCounter++};
    if(timeArray[1] === pleasantArrays[i][1]){timeCheckCounter++};
    if(timeArray[2] === pleasantArrays[i][2]){timeCheckCounter++};
    if(timeCheckCounter === 3){setTime(timeArray[0], timeArray[1], timeArray[2])};
  };

  if(pleasantCounter > 0){
    setTime(timeArray[0], timeArray[1], timeArray[2]);
    console.log(timeArray);
  }
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

setInterval(pleasantCheck, 1*1000);

window.onload = ()=>{
  let currentTime = Array.from(checkTime());
  setTime(currentTime[0],currentTime[1],currentTime[2]);
}
