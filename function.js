// var ans1=document.getElementById("ans1").value;
// var ans2=document.getElementById("ans2").value;
// var ans3=document.getElementById("ans3").value;
// var correct=0;
function check(){
const ans1=document.getElementById("ans1").value;
const ans2=document.getElementById("ans2").value;
const ans3=document.getElementById("ans3").value;
var correct=0;
  
  
  if(ans1=="Lucknow"){
      correct++;
  }
  if(ans2=="IITS"){
      correct++;
  }
  if(ans3=="World Wide Web"){
      correct++;
  }
  var messages=["Great job!!!","Revise again","You lost !! Practice more"]
  var range=0;
  if(correct==0){
      range=2;
  }if(correct>=1 && correct<3){
      range=1;
  }if(correct==3){
      range=0;
  }
  suggestion=messages[range];
  document.getElementById("result").innerHTML=("Your score is"+" "+correct);
  document.getElementById("suggestion").innerHTML=suggestion;
  document.getElementById("box").style.border="black 5px solid";
  if(correct==0){
      document.getElementById("box").style.background="red";
  }
  if(correct>=1 && correct<3){
      document.getElementById("box").style.background="yellow";
      document.getElementById("box").style.marginLeft="100px"

  }if(correct==3){
      document.getElementById("box").style.background="green";
      document.getElementById("box").style.marginleft="200px";
  }

}