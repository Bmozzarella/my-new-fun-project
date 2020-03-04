const button = document.querySelector("button")
const body = document.querySelector("body")

const colors = ["red", "blue", "green", "purple", "yellow", "orange"]


body.style.backgroundColor = "pink"

button.addEventListener("click", changeBackground)


function changeBackground() {
    const colorIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
