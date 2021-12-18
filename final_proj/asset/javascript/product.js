import { listDataArray } from "./allProductArray.js";

console.log(listDataArray)
var id = localStorage.getItem('product-id')
var i = 0

for(i; i < listDataArray.length; i++){
    if(listDataArray[i].id==id){
        break;
    }
}

function render() {
    var imgElement = document.querySelector('.product__img img')
    imgElement.src = listDataArray[i].product_image

    document.querySelector('.header__name').innerText = listDataArray[i].product_name

    var oldPrice = listDataArray[i].price
    var newPrice = oldPrice - oldPrice*10/100

    var oldPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPrice)
    var newPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)

    document.querySelector('.price__old').innerText = oldPriceString
    document.querySelector('.price__new').innerText = newPriceString
    
    document.querySelector('.description__info').innerText = listDataArray[i].product_description

    document.querySelector('.warranty__time').innerText = listDataArray[i].guarantee    
}
render()