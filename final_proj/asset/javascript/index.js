import { URL } from '../script/URL.js';
async function selectAllProduct(){
    var dataArray = []
    await $.ajax({
        type: 'GET',
        url: URL + '/product/all',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            dataArray = data;
        },
        error: function(jqXHR) {
            
            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return dataArray;
}

var item = await selectAllProduct();
console.log(item);

async function checkRole(){
    var role = 
    await $.ajax({
        type: 'GET',
        url: URL + '/account/getRole',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            role = data;
        },
        error: function(jqXHR) {
            
            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return role;
}
var roleCheck = await checkRole();
console.log(roleCheck);

const product = [
    {id: 1, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 2, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 3, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 4, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 5, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 6, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 7, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 8, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 9, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 10, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 11, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "TEST"},
    {id: 12, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 13, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 14, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 15, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 16, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 17, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 18, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 19, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 20, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 21, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 22, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 23, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 24, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 25, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 26, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 27, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 28, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 29, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "Áo Hoodie Nam Nữ Happy, Áo sweater form rộng unisex HT60"},
    {id: 30, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "TEST"},
    {id: 31, img: "https://cf.shopee.vn/file/de0a73e6578642d74a85db29f5722935_tn", name: "TEST"},
]
const btnNext = document.querySelector('.fa-angle-right');
const btnPrevious = document.querySelector('.fa-angle-left');

let perPage = 10;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(product.length / perPage);

function renderProduct() {
    html='';

    const content = product.map((item, index) => {
        if(index >= start && index < end){
            html +=`            
            <div style="position: relative;" class="col l-2-4 m-4 c-6">                                   
            <a href="" class="product-item">
                <div class="product-item__img" style="background-image: url(${item.img});"></div>
                <h4 class="product-item__name">${item.name}</h4>
                
                <div class="product-item__price">
                    <span class="product-item__price-old">1.200.000đ</span>
                    <span class="product-item__price-current">990.000đ</span>
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
    
                    <div class="product-item__sold">88 đã bán</div>
                </div>
    
                <!-- Xuất xứ -->
                <div class="product-item__origin">
                    <span class="product-item__brand">Whoo</span>
                    <span class="product-item__origin-name">Nhật Bản</span>
                </div>  
    
                <!-- Nhãn yêu thích
                <div class="product-item__favorite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div> -->
    
                <!-- Nhãn giảm giá -->
                <div class="product-item__sale-off">
                    <div class="product-item__sale-off-percent-wrapper">
                        <span class="product-item__sale-off-percent">43%</span>
                    </div>
                    <span class="product-item__sale-off-label">GIẢM</span>
                </div>
            </a>

            <!-- Add to cart -->
            <div class="product-item__add-cart">
                <button class="button__add-cart">
                    <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="icon-add-to-cart">
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

            return html;
        }
    })

    document.getElementById('product').innerHTML = html;
}

function renderListPage() {
    html='';
    html+=`
    <li class="pagination-item pagination-item--active">
        <a href="#" class="pagination-item__link">${1}</a>
    </li>`;

    for(let i = 2; i <= totalPages; i++){
        html+=`
        <li class="pagination-item">
        <a href="#" class="pagination-item__link">${i}</a>
        </li>`;
    }

    document.getElementById('page').innerHTML = html;
}

function changePage() {
    let current = document.querySelectorAll('.pages li');
    for(let i = 0; i < current.length; i++){
        current[i].addEventListener('click', () => {
            currentPage = i + 1;
            $('.pages li').removeClass('pagination-item--active');
            current[i].classList.add('pagination-item--active');
            if(currentPage===1){                
                $('.page-icon-left').addClass('disabled');
                $('.page-icon-right').removeClass('disabled');
            }
            if(currentPage===totalPages){
                $('.page-icon-right').addClass('disabled');
                $('.page-icon-left').removeClass('disabled');
            }
            if(currentPage > 1 && currentPage < totalPages){
                $('.page-icon-left').removeClass('disabled');
                $('.page-icon-right').removeClass('disabled');
            }
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

btnNext.addEventListener('click', () => {
    currentPage++;
    if(currentPage > totalPages){
        currentPage = totalPages;
    }  

    if(currentPage === totalPages){
        $('.page-icon-right').addClass('disabled');
    }

    $('.page-icon-left').removeClass('disabled');
    $(`.pages li`).removeClass('pagination-item--active');
    $(`.pages li:eq(${currentPage-1})`).addClass('pagination-item--active');

    getCurrentPage(currentPage);
    renderProduct();
})

btnPrevious.addEventListener('click', () => {
    currentPage--;
    if(currentPage < 1){
        currentPage = 1;
    }

    if(currentPage === 1){
        $('.page-icon-left').addClass('disabled');
    }

    $('.page-icon-right').removeClass('disabled');    
    $(`.pages li`).removeClass('pagination-item--active');
    $(`.pages li:eq(${currentPage-1})`).addClass('pagination-item--active');

    getCurrentPage(currentPage);
    renderProduct();
})

window.onload = function() {
    renderProduct();
    renderListPage();
    $('.page-icon-left').addClass('disabled');
    changePage();
}

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