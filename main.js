var dateElement = document.getElementById('date');

init();

function init() {
  updateHTML("Welcome!")
  var dateTimer = window.setInterval(dateController, 1000);
};

function updateDate () {
  let date = new Date();
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  if (h < 10) {h = "0" + h}
  if (m < 10) {m = "0" + m}
  if (s < 10) {s = "0" + s}
  let dateString = `${h}${m}${s}`
  console.log(dateString)
  return dateString;
};

function updateStyle (value) {
  document.body.style.backgroundColor = value;
};

function updateHTML (date) {
  dateElement.innerHTML = date;
};

function toHex (i) {
  let dateNum = parseInt(i, 10)
  return hexString = dateNum.toString(16)
};

function hexNormalize (str) {
  var strNorm = str
  let i = 6 - str.length;
  for (i; i > 0; i--) {
     strNorm = "A" + strNorm
     console.log("i = ", i)
  };
  strNorm = "#" + strNorm;
  console.log("strNorm: ", strNorm)
  return strNorm;
};

function dateController() {
  let timeStr = updateDate()
  let timeHex = hexNormalize(toHex(timeStr))
  updateHTML(timeHex)
  updateStyle("#" + timeStr)

};
