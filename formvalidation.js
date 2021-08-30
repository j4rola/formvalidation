//Conditional form example 

let conEmail = document.getElementById('con-email')
let conName = document.getElementById('con-name') 
let conAge = document.getElementById('con-age')
let conAgeValue = conAge.value
let conResult = document.getElementById('con-result')
let conForm = document.getElementById('con-form')
let conAddress = document.getElementById('con-address')


let conEvent = conForm.addEventListener('submit', (e) => {

    e.preventDefault()
    if (conAge.value < 21) {
        conResult.innerHTML = 'Sorry! You are not 21.'; 
    } else {conResult.innerHTML = 'Enjoy your booze!'}


    if (conName.value == '' || conAge.value == '' || conEmail == '' || conAddress.value == '') {
        alert('Please fill out all fields.')
        conResult.innerHTML = ''; 
    }
})



class Person {
    constructor(name, email, address, age) {
        this.name = name
        this.email = email
        this.address = address
        this.age = age
    }

    static msg(){polyResult.innerHTML = 'test'} 

}


