var colors = [
  "deep-orange",
  "blue-grey",
  "brown",
  "grey",
  "orange",
  "green",
  "light-blue",
  "teal",
  "cyan",
  "indigo",
  "blue"
]

var random = Math.floor(Math.random() * 11)
console.log(random)
console.log(colors[random])

var randomTag = Math.floor(Math.random() * 11)
console.log(randomTag)
console.log(colors[randomTag])

document.getElementById("randomColors").className = `col s6 ${
  colors[random]
} center-align darken-4 z-depth-5 main-card`

// SAME RANDOM TAG COLOR
for (var i = 0; i < 4; i++) {
  // Remember to update count to be same as tags in html document.
  document.getElementById(`Tag${i}`).className = `chip ${
    colors[randomTag]
  } white-text darken-3`
}
