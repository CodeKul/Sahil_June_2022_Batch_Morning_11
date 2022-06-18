let printBtn = document.getElementById("printBtn");

let contentArea = document.getElementById("contentArea");

let cityNames = ["Nashik", "Pune", "Aurangabad", "Wardha"];

printBtn.addEventListener('click', printData);

let cityString = "";

let cityInsideTags = "";

function printData() {

  for (let i = 0; i < cityNames.length; i++) {

    cityString = cityString + "\n" + cityNames[i];

  }

  cityInsideTags = `<h1>The cities are as follows : ${cityString}</h1>`

  contentArea.innerHTML = cityInsideTags;

} 