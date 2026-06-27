// const dateAndTime = documentgetElementbyID("dateTime");
// const date = new Date(dateAndTime);
// console.log(date);

const date = new Date();
const dateAndTime = document.getElementById("dateTime")
dateAndTime.innerHTML = date;
