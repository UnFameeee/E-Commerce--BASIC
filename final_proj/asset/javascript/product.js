import { check } from './productList.js'

if(localStorage.getItem('test')) {
    $('.button__add').addClass('button__add--disabled')
    $('.button__update').removeClass('button__update--disabled')
    localStorage.removeItem('test')
}
else {
    $('.button__update').addClass('button__update--disabled')
    $('.button__add').removeClass('button__add--disabled')
    localStorage.removeItem('test')
}
