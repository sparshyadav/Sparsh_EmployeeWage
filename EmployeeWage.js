// UC1 - Ability to check Employee is Present or Absent
const randomNumber=Math.random().toFixed(2);
let attendence=0;
if(randomNumber>0.5){
    attendence=1;
    console.log("The Employee is Present");
}
else{
    console.log("The Employee is Absent");
}

