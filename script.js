var p = document.getElementById('Point').style;
var x=0;
var y=0;
function left() {
  x++;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
}
function right() {
  x--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return x;
}
function up() {
  y++;
  p.transform = "translate(" + -x+"rem,"+-y+ "rem)";
  return y;
}
function down() {
  y--;
  p.transform = "translate(" + -x+"rem,"+-y + "rem)";
  return y;
}
document.body.onclick = function(){
  var h = document.querySelector('h3');
  h.innerHTML=x+","+y;}