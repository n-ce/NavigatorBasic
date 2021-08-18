var p = document.getElementById('Point').style;
var x=0;
var y=0;
document.getElementById('left').onclick = function() {
  x++;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
  return y;
}
document.getElementById('right').onclick = function() {
  x--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
  return y;
}
document.getElementById('up').onclick = function() {
  y++;
  p.transform = "translate(" + -x+"rem,"+-y+ "rem)";
  return y;
  return x;
}
document.getElementById('down').onclick = function() {
  y--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return y;
  return x;
}