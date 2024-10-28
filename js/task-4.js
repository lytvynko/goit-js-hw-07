const form = document.querySelector("form.login-form"),
      email = document.querySelector("input[type=email]"),
      password = document.querySelector("input[type=password]")
let result = {}

form.addEventListener("submit", event => {
    event.preventDefault();
    if (!email.value || !password.value) {
        alert('All form fields must be filled in')
    
    } else {
        Array.from(form.elements).forEach(element => {
            if (element.name) {
              result[element.name] = element.value;
            }
          });
          console.log(result)
          form.reset()
    }
    
});
