const clock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let ses = hours > 12 ? (session = "PM") : (session = "AM");

  let h = hours > 12 ? `${0}${hours - 12}` : `${0}${hours}`;
  if (h == 00) {
    h = 12;
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".hours").innerHTML = h;
  document.querySelector(".minutes").innerHTML = m;
  document.querySelector(".seconds").innerHTML = s;
  document.querySelector(".session").innerHTML = ses;
};

setInterval(clock, 1000);
