/* CART */

var array = sessionStorage.getItem('arrayCart')
var realArray = JSON.parse(array)
console.log(realArray)

var removeCartItemButtons
var quantityInputs
var buyBtn

async function renderProduct() {
    let html = '';

    if (realArray.length > 0) {
        for (let i = 0; i < realArray.length; i++) {
            html += `                  
            <li class="cart__product-item">          
               <span class="product">
                    <a href="#" class="product__link">
                        <img src="${realArray[i].image}" alt="">
                        <div class="product__des">
                            <span>${realArray[i].name} </span>
                        </div>
                    </a>
                </span>
                <span id="my-cart-id" style="display:none">${realArray[i].id}</span>
                <span class="quantity">
                    <input class="quantity-input" type="number" min="1" max="100" value="1">
                </span>
                <span class="price">${realArray[i].price}</span>
                <span class="operation">
                    <button class="operation__buy">Mua hàng</button>
                </span>
            </li>`;
        }
    }

    document.querySelector('.cart__product-list').innerHTML = html;
    removeCartItemButtons = document.querySelectorAll('.operation__remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    quantityInputs = document.getElementsByClassName('quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    buyBtn = document.querySelectorAll(".operation__buy")
    for (var i = 0; i <  buyBtn.length; i++) {
        var button =  buyBtn[i]
        button.addEventListener('click', await buyProduct)
    }
}
renderProduct();


removeCartItemButtons = document.querySelectorAll('.operation__remove');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

quantityInputs = document.getElementsByClassName('quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

buyBtn = document.querySelectorAll(".operation__buy")
for (var i = 0; i < buyBtn.length; i++) {
    var button = buyBtn[i]
    button.addEventListener('click', buyProduct)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function removeCartItem(event) {
    var buttonClicked = event.target
    var parent = buttonClicked.parentElement.parentElement
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
    if (document.querySelector('.cart__product-item')) {
        var cartItems = document.querySelector('.cart__product-list')
        alert('Delete Successfully!!!')
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        sessionStorage.removeItem('arrayCart')
        updateCartTotal()
    }
    else {
        alert('You haven\'t add any product to cart yet!!!')
    }
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
        if (quantityElement) {
            quantityinputElement = quantityElement.querySelector('.quantity-input')
        }
        var price = 0
        if (priceElement) {
            price = parseFloat(priceElement.innerText.replace('đ', '').replace('.', ''))
        }
        var quantity = 0
        if (quantityinputElement) {
            quantity = quantityinputElement.value
        }
        quantityTotal += parseInt(quantity)
        total = total + (price * quantity)
    }
    total = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(total * 100) / 100)
    var totalPrice = document.querySelectorAll('.total-price h3')
    var totalQuantity = document.querySelectorAll('.total-quantity')

    if (totalPrice) {
        document.querySelectorAll('.total-price h3')[0].innerText = total
    }
    if (totalQuantity) {
        document.querySelectorAll('.total-quantity')[0].innerText = '(' + quantityTotal + ' sản phẩm):'
    }
}
updateCartTotal()

function buyProduct(event) {
    var buttonClicked = event.target
    var parent = buttonClicked.parentElement.parentElement

    var id = parent.querySelector('#my-cart-id').innerText
    var quantity = parent.querySelector('.quantity-input').value

    console.log(id, quantity)
    // updateCartTotal()
}