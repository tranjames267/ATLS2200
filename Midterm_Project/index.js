// The quotes, days, songs and action items will have changes stored in arrays
const quotes = ["What matters is that you are trying your best", "You can make it to the end of the week!", "You've got this!", "It's all about the small victories", "Chocolate always makes things better", "Smiling might just lift your mood", "Please don't pull your hair out"];
const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
const firstItems = ["Eat a lovely breakfast", "Play Animal Crossing", "Take deep breaths", "Eat something yummy", "Do your laundry", "Wash your water bottle", "Wake up early"];
const secondItems = ["Chat with some friends", "Read WEBTOON", "Massage your temples", "Soak your feet in warm, soapy water", "Exercise for 30 minutes", "Pack your lunch", "Listen to some upbeat music"];
const thirdItems = ["Take homework breaks", "Treat yourself to dinner", "Stretch", "Take a long nap", "Take a warm, relaxing shower", "Spend time with family", "Go on a walk"];
const songs = ["relax2.mp3","relax3.mp3","relax4.mp3","relax5.mp3","relax6.mp3", "relax7.mp3", "relax1.mp3"];

// counter will determine which choice is displayed from the arrays
let numcount = 0;

document.getElementById("nextDay").addEventListener("click", nextDayClicked);

// quotes, days, songs, and action items will all change from clicking the button
// would make sense for all of the changes to occur in the same function
function nextDayClicked(){
  document.getElementById("qtext").innerHTML = quotes[numcount];
  document.getElementById("day").innerHTML = days[numcount];
  document.getElementById("item1").innerHTML = firstItems[numcount];
  document.getElementById("item2").innerHTML = secondItems[numcount];
  document.getElementById("item3").innerHTML = thirdItems[numcount];
  document.getElementById("music").src = songs[numcount];
// make sure that I can go to the front of the array after reaching the end
// basically like an infinite loop of sorts
  if(numcount >= 6){
    numcount = 0;
  }
  else{
    numcount ++;
  }
}
