/*We Learned da lesson this time and will actually wait till the shits loaded*/
document.addEventListener("DOMContentLoaded", function(){
//Global Vars, had some scope issues so fuck you
let s_Hours, s_Minutes, e_Hours, e_Minutes, outBlock;
button = document.getElementById('clickybutton');


function isInputNaN() {
  if (isNaN(s_Hours) || isNaN(s_Minutes) || isNaN(e_Hours) || isNaN(e_Minutes)) {
    console.log("Non Integers Detected.");
    document.getElementById('errBlock').innerHTML = "Not Integers.";
    return true;
  };
  console.log("All the Values Are Integers");
  return false;
};

function isInputRange() {
  /*This is a really fucking long if statement gonna kms*/

if (
    s_Hours >= 0 && s_Hours <= 23 && // Checking if starting hours are within range
    e_Hours >= 0 && e_Hours <= 23 && // Checking if ending hours are within range
    s_Minutes >= 0 && s_Minutes <= 59 && // Checking if starting minutes are within range
    e_Minutes >= 0 && e_Minutes <= 59 && // Checking if ending minutes are within range
    (s_Hours < e_Hours || (s_Hours === e_Hours && s_Minutes < e_Minutes)) // Checking if starting time is earlier than ending time
) {
  console.log("Time values within expected range.");
  return true;
} else {
  console.log("Values Out Of Range");
  document.getElementById('errBlock').innerHTML = "Values Out Of Range";
  return false;
}
};

//I need SLIGHTLY different functions for generating seconds vs hours so uhhhhhhhh
function random_Hour(min, max) {
  let randomNum
  //Generates random num between min and max inclusive.
  randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
  if (randomNum < 10) {
    return "0"+randomNum; //For making sure it looks like time
  }
  return randomNum;
};

function random_Minute(min, max, hour) {
  let randomNum
  if (s_Hours == e_Hours) {
    randomNum = Math.floor(Math.random() * (max - min + 1) ) + min; //If the hours are the same, generate between min minutes and max minutes
  } else if (hour == e_Hours) { //If the hour is the same as the ending hour, generate within the max minutes constraints
    randomNum = Math.floor(Math.random() * (max+1));
  } else {
    randomNum = Math.floor(Math.random() * 60); //Otherwise just an int to 60 is fine
  };
  if (randomNum < 10) {
    return "0"+randomNum;
  };
  return randomNum;

};

/* LOGIC FOR PARSING FUNCTION
are the hours the same?

if y just work out the min diff and return

////

if hours not same, figure out how many minutes to get to the next hour

are the hours the same now? if not repeat, adding 60 each time

when the hours are the same, add the maximum minutes value thats passed as an arg

return that shit
*/

//Attempt Number two baby!!!!! logic is above since this is a little confusing to follow
function parseTime(s_Hours, s_Minutes, e_Hours, e_Minutes) {
  //This function parses the time and returns the number of minutes as a difference
  let total = 0;
  if (s_Hours == e_Hours) {
    console.log("Hours were equal, returning minute difference");
    return (e_Minutes - s_Minutes);
  };

  total += (60 - s_Minutes); //Get to the next whole hour, makes life easier 
  if ((s_Hours + 1) == e_Hours) {
    console.log("The weird case where i need to do minute calcs");
    return (total + e_Minutes);
  };

  let currentHour = 2
  while (currentHour != e_Hours) {
    total += 60;
    currentHour++
  };

  console.log("The pretty normal case tbh, looped " + (currentHour - 2) + "times");
  return (total + e_Minutes);

};


function timeDiff(ranNum) {
  let hoursDiff = Math.floor(ranNum / 60);
  console.log(hoursDiff);
  let minsDiff = ranNum % 60;
  console.log(minsDiff);
  let time = [hoursDiff, minsDiff];
  return time;
};




document.getElementById("timeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop refresh???? 
  /*Update The Variables*/
  s_Hours = parseInt(document.getElementById("s_Hours").value);
  s_Minutes = parseInt(document.getElementById("s_Minutes").value);
  e_Hours = parseInt(document.getElementById("e_Hours").value);
  e_Minutes = parseInt(document.getElementById("e_Minutes").value);
  outBlock = document.getElementById("outBlock");

  if (!isInputNaN() && isInputRange()) {
    console.log("Successful form submission");
    
    //Parses minute difference
    let minsDiff = parseTime(s_Hours, s_Minutes, e_Hours, e_Minutes)
    console.log("Parsed Time Returned: " + minsDiff)

    //Generate a random amount of minutes in the difference between the two
    let ranNum = Math.floor(Math.random() * (minsDiff+1));
    console.log("randomNum: " + ranNum)

    //Calculationy stuff!!!!
    let fHours, fMinutes
    if ((s_Hours + timeDiff(ranNum)[0]) < 10) {
      fHours = "0" + (s_Hours + timeDiff(ranNum)[0]);
    } else {
      fHours = (s_Hours + timeDiff(ranNum)[0]);
    };

    if ((s_Minutes + timeDiff(ranNum)[1]) < 10) {
      fMinutes = "0" + (s_Minutes + timeDiff(ranNum)[1]);
    } else {
      fMinutes = (s_Minutes + timeDiff(ranNum)[1]);
    };



    let fTime = fHours + ":" + fMinutes;

    outBlock.innerHTML = fTime;

    

  };


  });

});
