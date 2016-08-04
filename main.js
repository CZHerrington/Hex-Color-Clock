var dateElement = document.getElementById('date');


function updateDate () {
  let date = new Date();
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let dateString = undefined
  if (h < 10) {h = "0" + h}
  if (m < 10) {m = "0" + m}
  if (s < 10) {s = "0" + s}
  dateString = `#${h}${m}${s}`;
  return dateString;
}

// function toHex (i) {
//   let hexString = (i+0x10000).toString(16).substr(-4).toUpperCase();
//      console.log(hexString)
//   }

document.getElementById('body').style.width = value;

var writeToHTML = function (data) {
  dateElement.innerHTML = data;
};

function dateController() {

};


function init() {
  updateDate()
  var dateTimer = window.setInterval(dateController, 1000);
};

init();
