if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.querySelectorAll('.header__cart-item-remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButtons = document.querySelectorAll('.button__add-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.querySelector('.product-item__name').innerText
    var price = shopItem.querySelector('.product-item__price-current').innerText
    var image = shopItem.querySelector('.product-item__img')
    var imageSrc = image.style.backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "")
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('header__cart-item')
    var cartItems = document.querySelector('.header__cart-list-item')
    var cartItemNames = cartItems.querySelectorAll('.header__cart-item-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <img src="${imageSrc}" alt="" class="header__cart-item-img">

        <div class="header__cart-item-info">
            <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">${title}</h5>
                
                <div class="header__cart-item-price-wrap">
                    <span class="header__cart-item-price">${price}</span>
                    <!-- <span class="header__cart-item-mul">x</span>
                    <span class="header__cart-item-quantity">2</span> -->
                </div>
            </div>

            <div class="header__cart-item-body">
                <span class="header__cart-item-description">
                    Phân loại: Bạc
                </span>
                <span class="header__cart-item-remove">Xoá</span>
            </div>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelector('.header__cart-item-remove').addEventListener('click', removeCartItem)
}