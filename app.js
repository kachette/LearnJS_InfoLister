const input = document.querySelector('#informationInput');
const submit = document.querySelector('.submit');
const screen = document.querySelector('.display');



submit.addEventListener('click', collectInformation)
    //deleteButton.addEventListener('click', deleted)


let updatedData = true;


const data = [
    { text: 'I want to be free' },
    { text: 'Become stronger physically' },
    { text: 'Read a book a day' }
];


function collectInformation() {
    if (input.value === '') {
        console.log('input is empty')
    } else {
        updatedData = true;
        data.push({ text: input.value })
        console.log(data)
        const ul = document.createElement('ul');
        const a = document.createElement('a');
        a.innerText = input.value;
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerText = 'x'
        deleteButton.addEventListener('click', deleted)
        a.append(deleteButton)
        ul.appendChild(a)
        screen.appendChild(ul);
        ul.style.margin = '2rem';


    }
};

function deleted(e) {
    console.log(e)
    const item = e.target;
    if (item.classList[0] === 'delete') {
        const info = item.parentElement;
        info.remove();
    }
};


data.forEach(function(element) {
    const ul = document.createElement('ul');
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.innerText = 'x'
    deleteButton.addEventListener('click', deleted)
    ul.style.margin = '2rem';
    const a = document.createElement('a');
    a.innerText = element.text
    a.append(deleteButton)
    ul.appendChild(a)
    screen.appendChild(ul);
    //ul.innerHTML =
    //`<a>${element.text} <button class='completed'>+</button></a>`

});