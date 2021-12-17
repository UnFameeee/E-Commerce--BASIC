/* CART */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.querySelectorAll('.operation button');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.querySelector('.cart__product-list')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartRows = document.querySelectorAll('.cart__product-item')
    var total = 0
    var quantityTotal = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.querySelector('.price')
        var quantityElement = cartRow.querySelector('.quantity') 
        var quantityinputElement
        if(quantityElement){
            quantityinputElement = quantityElement.querySelector('.quantity-input')
        }
        var price = 0
        if(priceElement){
            price = parseFloat(priceElement.innerText.replace('đ', '').replace('.', ''))
        }
        var quantity = 0
        if(quantityinputElement){
            quantity = quantityinputElement.value
        }
        quantityTotal += parseInt(quantity)
        total = total + (price * quantity)
    }
    total = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(total * 100) / 100)
    document.querySelectorAll('.total-price h3')[0].innerText = total
    document.querySelectorAll('.total-quantity')[0].innerText = '(' + quantityTotal + ' sản phẩm):'
}
updateCartTotal()

