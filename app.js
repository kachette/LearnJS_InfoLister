const input = document.querySelector('#informationInput');
const submit = document.querySelector('.submit');
const screen = document.querySelector('.display');

const filtration = document.querySelector('.filtration');

filtration.addEventListener('click', filterInformation)

submit.addEventListener('click', collectInformation)
    //deleteButton.addEventListener('click', deleted)

screen.childNodes[0].remove();


const data = [
    { text: 'I want to be free' },
    { text: 'Become stronger physically' },
    { text: 'Read a book a day' }
];


function collectInformation() {
    if (input.value === '') {
        console.log('input is empty')
    } else {
        data.push({ text: input.value })
        createInformationContainer(input.value)
        input.value = '';


    }
};

function deleted(e) {
    const item = e.target;
    const a = item.parentElement
    console.log(a)

    if (item.classList[0] === 'delete') {
        item.parentElement.classList.add('fall')
        const info = item.parentElement;
        info.addEventListener('transitionend', function() {
            info.remove()
        })

    } else {
        const info = item.parentElement;
        info.classList.remove('incomplete')
        info.classList.add('done')

    }
};

function createInformationContainer(data) {
    //create delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.innerText = 'x'
    deleteButton.addEventListener('click', deleted)

    //create completed button
    const completedButton = document.createElement('button')
    completedButton.classList.add('completed')
    completedButton.innerText = '+'
    completedButton.addEventListener('click', deleted)

    //create container
    const a = document.createElement('a');
    a.classList.add('incomplete')
    a.innerText = data + ' ';

    //appending to the 'a' container
    a.append(completedButton)
    a.append(deleteButton)
    screen.appendChild(a);

}


data.forEach(function(element) {
    createInformationContainer(element.text)
});

function filterInformation(e) {

    const information = screen.childNodes;
    information.forEach(function(element) {
        switch (e.target.value) {
            case "all":
                element.style.display = "block"
                break;
            case "complete":
                if (element.classList.contains("done")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
                break
            case "incomplete":
                console.log(e.target.value)
                console.log(element.classList)
                if (element.classList.contains("incomplete")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
                break
        }
    });
}