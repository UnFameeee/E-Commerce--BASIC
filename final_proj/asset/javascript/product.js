import { listDataArray } from "./allProductArray.js";

console.log(listDataArray)
var id = localStorage.getItem('product-id')
var i = 0

for(i; i < listDataArray.length; i++){
    if(i==id){
        break;
    }
}

function render() {
    var imgElement = document.querySelector('.product__img img')
    imgElement.src = listDataArray[i - 1].product_image

    document.querySelector('.header__name').innerText = listDataArray[i - 1].product_name

    var oldPrice = listDataArray[i - 1].price
    var newPrice = oldPrice - oldPrice*10/100

    var oldPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPrice)
    var newPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)

    document.querySelector('.price__old').innerText = oldPriceString
    document.querySelector('.price__new').innerText = newPriceString
    
    document.querySelector('.description__info').innerText = listDataArray[i - 1].product_description

    document.querySelector('.warranty__time').innerText = listDataArray[i - 1].guarantee    
}
render()