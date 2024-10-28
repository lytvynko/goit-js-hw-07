let text = document.querySelector('#name-input'),
      name = document.querySelector('#name-output')  

const addGreetingName = (event) => {
    if (event.target.value.trim()) {
        name.innerHTML = event.target.value.trim()
    } else {
        name.innerHTML = 'Anonymous'
    }
    
    
}      

text.addEventListener('input', addGreetingName)

