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

function updateCartTotal() {
    var cartRows = document.querySelectorAll('.cart__product-item')
    var total = 0
    var quantityTotal = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity')[0]
        var quantityinputElement = quantityElement.getElementsByClassName('quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('đ', '').replace('.', ''))
        var quantity = quantityinputElement.value
        quantityTotal += parseInt(quantity)
        total = total + (price * quantity)
    }
    total = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(total * 100) / 100)
    document.querySelectorAll('.total-price h3')[0].innerText = total
    document.querySelectorAll('.total-quantity')[0].innerText = '(' + quantityTotal + ' sản phẩm):'
}
updateCartTotal()