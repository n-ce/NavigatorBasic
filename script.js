var x=0;
var y=0;
function right() {x++;}
function left() {x--;}
function up() {y++;}
function down() {y--;}
function upleft() {y++;x--;}
function upright() {y++;x++;}
function downleft() {y--;x--;}
function downright() {y--;x++;}
document.body.onclick = function(){
  document.querySelector('#Point').style.transform = "translate(" + x+"rem,"+-y + "rem)";
  document.querySelector('h3').innerHTML=x+","+y;
}