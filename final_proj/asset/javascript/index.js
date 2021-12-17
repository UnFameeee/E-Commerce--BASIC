import { URL } from '../script/URL.js';
import { listDataArray } from './allProductArray.js';

async function checkRole() {
    var role =
        await $.ajax({
            type: 'GET',
            url: URL + '/account/getRole',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json",
            },
            data: "",
            success: function (data) {
                role = data;
            },
            error: function (jqXHR) {

                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    return role;
}
var roleCheck = await checkRole();
console.log(roleCheck);

const btnNext = document.querySelector('.fa-angle-right');
const btnPrevious = document.querySelector('.fa-angle-left');

let perPage = 10;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(listDataArray.length / perPage);

var removeCartItemButtons
var addToCartButtons

function renderProduct() {
    let html = '';
    let startIndex = start;
    let endIndex = end

    if (endIndex > listDataArray.length) {
        endIndex = listDataArray.length
    }

    if (listDataArray.length > 0) {
        for (let i = startIndex; i < endIndex; i++) {
            var oldPrice = listDataArray[i].price
            var newPrice = oldPrice - oldPrice*10/100

            var oldPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPrice)
            var newPriceString = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)

            html += `            
                <div style="position: relative;" class="col l-2-4 m-4 c-6">                                   
                    <a href="" class="product-item">
                        <div class="product-item__img" style="background-image: url(${listDataArray[i].product_image});"></div>
                        <h4 class="product-item__name">${listDataArray[i].product_name}</h4>
                        
                        <span id="item-id" style="display: none;">${listDataArray[i].id}</span>

                        <div class="product-item__price">
                            <span class="product-item__price-old">${oldPriceString}</span>
                            <span class="product-item__price-current">${newPriceString}</span>
                        </div>
            
                        <!-- Thả tim và rate sao -->
                        <div class="product-item__action">
                            <span class="product-item__like product-item__like--liked">
                                <i class="product-item__like-icon-empty far fa-heart"></i>
                                <i class="product-item__like-icon-fill fas fa-heart"></i>
                            </span>
            
                            <span class="product-item__rating">
                                <i class="product-item__rating-star--gold fas fa-star"></i>
                                <i class="product-item__rating-star--gold fas fa-star"></i>
                                <i class="product-item__rating-star--gold fas fa-star"></i>
                                <i class="product-item__rating-star--gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>
            
                            <div class="product-item__sold">${listDataArray[i].quantity} đánh giá</div>
                        </div>
            
                        <!-- Xuất xứ -->
                        <div class="product-item__origin">
                            <span class="product-item__brand">${listDataArray[i].brand}</span>
                        </div>  
            
                        <!-- Nhãn yêu thích
                        <div class="product-item__favorite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div> -->
            
                        <!-- Nhãn giảm giá -->
                        <div class="product-item__sale-off">
                            <div class="product-item__sale-off-percent-wrapper">
                                <span class="product-item__sale-off-percent">10%</span>
                            </div>
                            <span class="product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
    
                    <!-- Add to cart -->
                    <div class="product-item__add-cart">
                        <button class="button__add-cart">
                            <svg style="pointer-events: none;" enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="icon-add-to-cart">
                                <g>
                                    <g>
                                        <polyline fill="none" points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                                        <circle cx="6" cy="13.5" r="1" stroke="#d00033"></circle><circle cx="11.5" cy="13.5" r="1" stroke="#d00033"></circle>
                                    </g>
                                    <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="7.5" x2="10.5" y1="7" y2="7"></line>
                                    <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="9" x2="9" y1="8.5" y2="5.5"></line>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>`;
        }
    }

    document.getElementById('product').innerHTML = html;

    removeCartItemButtons = document.querySelectorAll('.header__cart-item-remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    addToCartButtons = document.querySelectorAll('.button__add-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}
renderProduct();
function renderListPage() {
    let html = '';
    html += `
    <li class="pagination-item pagination-item--active">
        <a href="#" class="pagination-item__link">${1}</a>
    </li>`;

    for (let i = 2; i <= totalPages; i++) {
        html += `
        <li class="pagination-item">
        <a href="#" class="pagination-item__link">${i}</a>
        </li>`;
    }

    document.getElementById('page').innerHTML = html;
}
renderListPage();
$('.page-icon-left').addClass('disabled');
function changePage() {
    let current = document.querySelectorAll('.pages li');
    for (let i = 0; i < current.length; i++) {
        current[i].addEventListener('click', () => {
            currentPage = i + 1;
            $('.pages li').removeClass('pagination-item--active');
            current[i].classList.add('pagination-item--active');
            if (currentPage === 1) {
                $('.page-icon-left').addClass('disabled');
                $('.page-icon-right').removeClass('disabled');
            }
            if (currentPage === totalPages) {
                $('.page-icon-right').addClass('disabled');
                $('.page-icon-left').removeClass('disabled');
            }
            if (currentPage > 1 && currentPage < totalPages) {
                $('.page-icon-left').removeClass('disabled');
                $('.page-icon-right').removeClass('disabled');
            }
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage();
function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    if (currentPage === totalPages) {
        $('.page-icon-right').addClass('disabled');
    }

    $('.page-icon-left').removeClass('disabled');
    $(`.pages li`).removeClass('pagination-item--active');
    $(`.pages li:eq(${currentPage - 1})`).addClass('pagination-item--active');

    getCurrentPage(currentPage);
    renderProduct();
})

btnPrevious.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }

    if (currentPage === 1) {
        $('.page-icon-left').addClass('disabled');
    }

    $('.page-icon-right').removeClass('disabled');
    $(`.pages li`).removeClass('pagination-item--active');
    $(`.pages li:eq(${currentPage - 1})`).addClass('pagination-item--active');

    getCurrentPage(currentPage);
    renderProduct();
})

function pagination(c, m) {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

/* CART */
removeCartItemButtons = document.querySelectorAll('.header__cart-item-remove');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

addToCartButtons = document.querySelectorAll('.button__add-cart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
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
    var imageSrc = image.style.backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "")
    var id = shopItem.querySelector('#item-id').innerText
    addItemToCart(id, title, price, imageSrc)
}

function addItemToCart(id, title, price, imageSrc) {
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

                <span id="cart-id" style="display: none;">${id}</span>
                
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

$('.header__cart-view').click(() => {
    var array = []
    var itemElement = $('.header__cart-item')

    class items {
        constructor(image, price, name) {
            this.image = image;
            this.price = price;
            this.name = name;
        }
    }

    for (var i = 0; i < itemElement.length; i++) {
        var imgSrc = itemElement[i].querySelector('.header__cart-item-img').src
        var name = itemElement[i].querySelector('.header__cart-item-name').innerText
        var price = itemElement[i].querySelector('.header__cart-item-price').innerText
        var temp = new items(imgSrc, price, name)
        array.push(temp)
    }

    sessionStorage.setItem('arrayCart', JSON.stringify(array))
    window.location.href = './cart.html'
})


/* CHECK USER */
var navbarUser = document.querySelectorAll('.header__navbar-user')
var navbarNone = document.querySelectorAll('.header__navbar-item--strong')
var test = 1

if (roleCheck) {
    $('.header__navbar-user').removeClass('header__navbar--user-info')
    $('.header__navbar-item--strong').addClass('header__navbar--had-user')
    document.querySelectorAll('.header__navbar-user-name')[0].innerText = 'vu2872001'
}
else {
    $('.header__navbar-user').addClass('header__navbar--user-info')
    $('.header__navbar-item--strong').removeClass('header__navbar--had-user')
}