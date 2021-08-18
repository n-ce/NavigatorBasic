var p = document.getElementById('Point').style;
var x=0;
var y=0;
document.getElementById('left').onclick = function() {
  x++;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
}
document.getElementById('right').onclick = function() {
  x--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
}
document.getElementById('up').onclick = function() {
  y++;
  p.transform = "translate(" + -x+"rem,"+-y+ "rem)";
  return y;
}
document.getElementById('down').onclick = function() {
  y--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return y;
}
document.body.addEventListener("click", function(){
  document.querySelector('h3').innerHTML=x+","+y;});