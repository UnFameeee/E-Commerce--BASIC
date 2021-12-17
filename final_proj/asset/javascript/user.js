// var maleBtn = $('radio-btn-male')
// var femaleBtn = $('radio-btn-female')

var sexBtn = document.getElementsByClassName("radio-btn__group")

var male = sexBtn[0]
var female = sexBtn[1]

male.addEventListener('click', () => {
    male.classList.add('radio-btn__button--checked')
    female.classList.remove('radio-btn__button--checked')
})

female.addEventListener('click', () => {
    female.classList.add('radio-btn__button--checked')
    male.classList.remove('radio-btn__button--checked')
})