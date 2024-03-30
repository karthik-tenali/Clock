const clock = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let session = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0 -> 12)

  let h = hours < 10 ? "0" + hours : hours; // Add leading zero if hours is less than 10
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".hours").innerHTML = h;
  document.querySelector(".minutes").innerHTML = m;
  document.querySelector(".seconds").innerHTML = s;
  document.querySelector(".session").innerHTML = session;
};

setInterval(clock, 1000);
