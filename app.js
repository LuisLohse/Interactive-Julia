var occupiedFlag = false
var imageElement = document.querySelector("#julia_display")

var queried_coords = [0,0]
var current_coords = [-10,-10]

// Update the image to reflect the current pointer position
setInterval(() => {
  if (current_coords[0] != queried_coords[0] || current_coords[1] != queried_coords[1]) {
    displayJulia(queried_coords[0], queried_coords[1])
  }
}, 200)

// Update the image when the user moves the pointer
document.querySelector("#brot_display").addEventListener("mousemove", (e) => {
  let x = ((e.offsetX / 5) / 1.4)
  let y = ((e.offsetY / 5) / 1.4) + 15

  y = 100 - y

  queried_coords = [parseInt(x),parseInt(y)]
  displayJulia(parseInt(x),parseInt(y))
  updateCoords(x,y)
})

// Display the Julia Image
function displayJulia(a, b) {
  if (occupiedFlag) {
    return
  }
  occupiedFlag = true
  current_coords = [a,b]
  imageElement.src = `./images/${a}-${b}.jpg`
  //document.querySelector("#all_container").style.backgroundImage = `url("./images/${a}-${b}.jpg")`
}

imageElement.addEventListener("load", () => {
  occupiedFlag = false
})

function updateCoords(x,y) {

  let dx = ((x / 25) - 2)
  let dy = (y / 25) - 2

  dx = dx.toFixed(2)
  dy = dy.toFixed(2)

  let signum = "+"
  if (dy < 0) {
    signum = "-"
    dy = - dy
  }

  document.querySelector("#coords span").innerText = `${dx} ${signum} ${dy}i`
}
