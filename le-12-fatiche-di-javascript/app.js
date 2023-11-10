const input = document.querySelector('input');
const array = []; //From null to empty array

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return; // The value of length should not be a string, but a number 

    array.push(input.value); //Changed add with push

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value; //Changed text with inner text
    document.querySelector('ul').append(li); //Push only works with elements inside JS, use append to add something to HTML

    let counter = 0; //If we want "counter" to increase, we need it to be a number and not a string
    let item    = array[0];
    let max   = 1; // "max"'s value should increase, but that's impossible if it's a const
    const elems = [];

    for (let i = 0; i < array.length; i++) { //Needed a .length after array
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { //Changed "i" with "j", to not increase "i" multiple times per loop
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){
                    max  = counter;
                    item = array[i];
            }
                
            }
        }

        counter = 0;
    }

    const alert = document.querySelectorAll('.alert')[0]; //Changed getElementsByClassName with queryselector

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); //Changed quotes to backticks
});