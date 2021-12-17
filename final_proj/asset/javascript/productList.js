import { listDataArray } from './allProductArray.js';
import { URL } from '../script/URL.js';

var temp = 0

var addBtn = document.getElementById("add-product-button")

if(addBtn){
    addBtn.addEventListener('click', function () {
        temp = 0        
        localStorage.setItem('test', temp)
        window.location.href = './addProduct.html'
    })
}

var removeCartItemButtons
var updateBtn

function renderProduct() {
    let html = '';

    if (listDataArray.length > 0) {
        for (let i = 0; i < listDataArray.length; i++) {
            html += `            
            <li class="cart__product-item">
            <span class="product">
                <a href="" class="product__link">
                    <img src="${listDataArray[i].product_image}" alt="">
                    <div class="product__des">
                        <span>${listDataArray[i].product_name}</span>
                    </div>
                </a>
            </span>
            <span id="product-id" >${listDataArray[i].id}</span>
            <span class="quantity">
                <span class="quantity-input">${listDataArray[i].quantity}</span>
            </span>
            <span class="price">${listDataArray[i].price}</span>
            <span class="operation">
                <button class="operation__remove">Xoá</button>                                               
                <button class="operation__buy">Sửa</button>
            </span>
        </li>`;
        }
    }

    document.getElementById('product-list').innerHTML = html;
    removeCartItemButtons = document.querySelectorAll('.operation__remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    updateBtn = document.getElementsByClassName("operation__buy")
    for(var i = 0; i < updateBtn.length; i++) {
        var button = updateBtn[i]
        button.addEventListener('click', forwardCheck)
    }
}
renderProduct();

updateBtn = document.getElementsByClassName("operation__buy")
for(var i = 0; i < updateBtn.length; i++) {
    var button = updateBtn[i]
    button.addEventListener('click', forwardCheck)
}

//Sửa - edit
function forwardCheck(event) {
    temp = 1;
    localStorage.setItem('test', temp)

    var buttonClicked = event.target
    var item = buttonClicked.parentElement.parentElement
    var test = item.querySelector('#product-id').innerText
    console.log(test)

    $.ajax({
        type: 'POST',
        url: URL + '/product/saveIDproduct' + "/" + test,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            window.location.href = "editProduct.html";
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });

    // window.location.href = './editProduct.html'
}


removeCartItemButtons = document.querySelectorAll('.operation__remove');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

// console.log(listDataArray)

//Xóa - delete
function removeCartItem(event) {
    var buttonClicked = event.target
    // buttonClicked.parentElement.parentElement.remove()
    var item = buttonClicked.parentElement.parentElement
    var test = item.querySelector('#product-id').innerText
    console.log(test)

    $.ajax({
        type: 'DELETE',
        url: URL + '/product/delete' + "/" + test,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            if(data.key == "Success"){
                alert("Delete successfully!!!");
                window.location.href = "productList.html";
            }
            
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
}
