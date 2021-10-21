const quotes = ["What matters is that you are trying your best", "You can make it to the end of the week!", "You've got this!", "It's all about the small victories", "Chocolate always makes things better", "Smiling might just lift your mood", "Please don't pull your hair out"];
const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
let numcount = 0;

document.getElementById("nextDay").addEventListener("click", buttonClicked);

function buttonClicked(){
  document.getElementById("qtext").innerHTML = quotes[numcount];
  document.getElementById("day").innerHTML = days[numcount];
  if(numcount >= 6){
    numcount = 0;
  }
  else{
    numcount ++;
  }
}
