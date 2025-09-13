const clockDiv = document.getElementById("clock");
const timezoneSelect = document.getElementById("timezone");


function pad(n) {
  return n < 10 ? '0' + n : n;
}

function updateClock() {
  const tz = timezoneSelect.value;
  const now = new Date();
  const localeTime = new Date(now.toLocaleString('en-US', { timeZone: tz }));
  const hours = pad(localeTime.getHours());
  const minutes = pad(localeTime.getMinutes());
  const seconds = pad(localeTime.getSeconds());
  clockDiv.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
}
setInterval(updateClock, 1000);
updateClock();
