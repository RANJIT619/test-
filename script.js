const submitBtn = document.getElementById('submit');

const groceryForm = document.getElementById('groceryForm');

const list = document.querySelector('.list');



groceryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.input').value;
    if(inputValue == ""){
        list.innerHTML = "There is a problem somewhere"  
    }else{
        list.innerHTML = inputValue;
    }
})


const displayAlert = (text, action) => {
alert.textContent = text;
alert.classList.add(`alert-${action}`);
setTimeout(function() {
alert.textContent = ""
alert.classList.remove(`alert-${action}`)
}, 1000);
}