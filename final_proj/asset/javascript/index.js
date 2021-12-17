import { URL } from '../script/URL.js';
import { checkRoleItem } from '../script/exportRole.js';

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

var listData = await selectAllProduct();
console.log(listData);


const btnNext = document.querySelector('.fa-angle-right');
const btnPrevious = document.querySelector('.fa-angle-left');

let perPage = 10;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(listData.length / perPage);

function renderProduct() {
    let html='';
    let startIndex=start;
    let endIndex=end

    if(endIndex > listData.length) {
        endIndex = listData.length
    }

    if(listData.length > 0) {
        for(let i = startIndex; i < endIndex; i++){
                html +=`            
                <div style="position: relative;" class="col l-2-4 m-4 c-6">                                   
                    <a href="" class="product-item">
                        <div class="product-item__img" style="background-image: url(${listData[i].product_image});"></div>
                        <h4 class="product-item__name">${listData[i].product_name}</h4>
                        
                        <div class="product-item__price">
                            <span class="product-item__price-old">${listData[i].price}</span>
                            <span class="product-item__price-current">${listData[i].price}</span>
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
            
                            <div class="product-item__sold">88 đánh giá</div>
                        </div>
            
                        <!-- Xuất xứ -->
                        <div class="product-item__origin">
                            <span class="product-item__brand">${listData[i].brand}</span>
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
}
renderProduct();
function renderListPage() {
    let html='';
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
renderListPage();
$('.page-icon-left').addClass('disabled');
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
changePage();
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


async function getUsernameImage(){
    var role = [] 
    await $.ajax({
        type: 'GET',
        url: URL + '/account/getUsernameAndImage',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            role = data;
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
    return role;
}
var usernameimage = await getUsernameImage();

console.log(usernameimage)  


/* CHECK USER */
var navbarUser = document.querySelectorAll('.header__navbar-user')
var navbarNone =  document.querySelectorAll('.header__navbar-item--strong')
var test = 1
console.log(checkRoleItem)
if(checkRoleItem){
    $('.header__navbar-user').removeClass('header__navbar--user-info')
    $('.header__navbar-item--strong').addClass('header__navbar--had-user')
    if(usernameimage[0].image !== null){
        document.getElementById("myimg2").src = usernameimage[0].image
    }
    document.querySelectorAll('.header__navbar-user-name')[0].innerText = usernameimage[0].username

    if(checkRoleItem.UserRole == "user"){
        document.getElementById("id_linktoacc").href = "user.html";
    }else if(checkRoleItem.UserRole == "admin"){
        document.getElementById("id_linktoacc").href = "admin.html";
    }
}
else{
    $('.header__navbar-user').addClass('header__navbar--user-info')
    $('.header__navbar-item--strong').removeClass('header__navbar--had-user')
}