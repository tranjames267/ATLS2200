// This javaScript is for my modal

let displaydetails = false;
document.getElementById('contactBtn').addEventListener("click", showDetails);

function showDetails(){
  document.getElementById('details').style.display ="block";
  document.getElementById('detailsoverlay').style.display = "block";
  document.getElementById('detailsoverlay').addEventListener('click', clickedOverlay);
  displaydetails = true;
}

function clickedOverlay(){
  document.getElementById('details').style.display ="none";
  document.getElementById('detailsoverlay').style.display = "none";
  displaydetails = false;
}
