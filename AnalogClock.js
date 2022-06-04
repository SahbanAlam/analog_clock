setInterval(Time, 1000);

function Time() {
  todaysDate = new Date();
  hrs = todaysDate.getHours();
  mins = todaysDate.getMinutes();
  seconds = todaysDate.getSeconds();

  var hrsdegree = 30 * hrs + mins / 2;
  var minsdegree = 6 * mins + (6 / 60) * seconds;
  var secsdegree = 6 * seconds;

  //   var hhand = document.querySelector("hrhand");
  //   var mhand = document.querySelector("minhand");
  //   var shand = document.querySelector("sechand");

  hrhand.style.transform = "rotate(" + hrsdegree + "deg)";
  minhand.style.transform = "rotate(" + minsdegree + "deg)";
  sechand.style.transform = "rotate(" + secsdegree + "deg)";
}
 