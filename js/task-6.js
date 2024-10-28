
let amount = document.querySelector('input[type=number]'),
    createBtn = document.querySelector('button[data-create]'),
    destroyBtn = document.querySelector('button[data-destroy]'),
    boxes = document.querySelector('#boxes')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let width = 30,
    height = 30;
let createBoxes = () => {
  let amountValue = +amount.value
  if (amountValue >= 1 && amountValue <= 100) {
    
    for (let i=0; i < +amount.value; i++) {
      let block = document.createElement('div')
      block.style.background = getRandomHexColor();
      block.style.width = `${width}px`;
      block.style.height = `${height}px`;
      boxes.append(block);
      width += 10;
      height += 10
    }
  } else {
    alert('Min amount is 1 and max amount is 100')
  }  
}
let destroyBoxes = () => {
  boxes.innerHTML = ''
  width = 30,
  height = 30
  amount.value = ''
}
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)