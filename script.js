let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<17){
  alert("You are a kid and you cannot even think of purchasing a vehicle");
}
else if(a<18 && a>=17){
  alert("You are a kid and you can think of purchasing a car after 18");
}
else{
  alert("You can purchase vehicle as you are 18 or above than that");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))