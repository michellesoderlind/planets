// Array with planets.
var arr_planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];

function showTable(id_planet_id) {
  // Loop "arr_planets" array and check if it's the same as the supplied in the paramenter:
  for (var i = 0; i < arr_planets.length; i++) {
    // If so, show it.
    if (arr_planets[i] == id_planet_id) {
      document.getElementById(arr_planets[i]).removeAttribute("style");
    } else {
      // Otherwise, hide them.
      document
        .getElementById(arr_planets[i])
        .setAttribute("style", "display: none;");
    }
  }
}
