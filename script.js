var quoteList = [
  "Self-Care is how you take your power back  -Unknown",/*0*/
  "The strongest people are those who win battles we know nothing about.  -Unknown",/*1*/
  "There is no health without mental health -David Satcher",/*2*/
  "Don't worry about a thing, every little thing is gonna be alright  -Bob Marley"];/*3*/


var fact = document.getElementById("fact");
var myb = document.getElementById("myb");
var count = 0;

myb.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = quoteList[count];
  count++;
  if (count == quoteList.length){
    count = 0;
  }
}


 