let btn = document.querySelector('button.change-color'),
    body = document.querySelector('body'),
    color = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}console.log(getRandomHexColor())
function changeColor() {
  body.style.backgroundColor = getRandomHexColor()
  color.innerHTML = getRandomHexColor()
}
btn.addEventListener('click', changeColor)