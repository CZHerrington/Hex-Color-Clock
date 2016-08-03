var dateElement = document.getElementById('date');

var dateString = undefined;

function updateDate () {
  let date = new Date();
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  if (h < 10) {h = "0" + h}
  if (m < 10) {m = "0" + m}
  if (s < 10) {s = "0" + s}
  dateString = `${h}:${m}:${s}`;
  drawTime();
}

var drawTime = function () {
dateElement.innerHTML = dateString;
}


function init() {
  updateDate()
  var dateTimer = window.setInterval(updateDate, 1000);
};

init();
