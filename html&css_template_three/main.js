let newYearDate = new Date("12/31/2024 23:59:59").getTime();
let counter = setInterval(function () {
  let datenow = new Date().getTime();
  let diffdays = newYearDate - datenow;

  let daysspan = Math.floor(diffdays / (1000 * 60 * 60 * 24));

  let hoursspan = Math.floor(
    (diffdays % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
  );
  let minutesspan = Math.floor((diffdays % (1000 * 60 * 60)) / (1000 * 60));
  let secondsspan = Math.floor((diffdays % (1000 * 60)) / 1000);

  document.querySelector(".events .time .days-count").innerHTML =
    daysspan < 10 ? `0${daysspan}` : daysspan;
  document.querySelector(".events .time .hours-count").innerHTML =
    hoursspan < 10 ? `0${hoursspan}` : hoursspan;
  document.querySelector(".events .time .minutes-count").innerHTML =
    minutesspan < 10 ? `0${minutesspan}` : minutesspan;
  document.querySelector(".events .time .seconds-count").innerHTML =
    secondsspan < 10 ? `0${secondsspan}` : secondsspan;
  if (diffdays === "0") {
    clearInterval(counter);
  }
}, 1000);
