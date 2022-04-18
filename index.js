function randomGenerator()
{
    return(Math.floor(Math.random()*12));
}
var arr=[];var c=2;
function sum()
{var s=0
    for(var i=0;i<arr.length;i++)
    s=parseInt(s+arr[i]);
    return s;
}
var startGame= document.getElementById("startGame").addEventListener("click",start);
function start(){
arr[0]=randomGenerator();
arr[1]=randomGenerator();
document.getElementById("card").innerText="   " + arr[0]+"   "+arr[1];
condition();
}
function condition(){
var x=sum();
document.getElementById("sum").innerText="   "+sum();
if(x===21){
document.getElementById("disp").innerText="You've got Blackjack";
setInterval(rel,3000);
}
else if(x<21){
document.getElementById("disp").innerText="Select new card";
var newCard= document.getElementById("newCard").addEventListener("click",nayacard);}
else{
    document.getElementById("disp").innerText="Kal Aana"; 
    setInterval(rel,1000); 
}
}
function nayacard(){
arr[c]=randomGenerator();
for(var i=2;i<arr.length;i++){
    var node=document.createElement("span");
    var textNode= document.createTextNode("   "+arr[i]);
    node.appendChild(textNode);
document.getElementById("card").appendChild(node);} 
c++;
condition();
}
function rel(){
    location.reload();
}
document.getElementById("reset").addEventListener("click",rel);