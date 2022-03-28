import { allOrders } from "./exportAllOrder.js"
import { URL } from './URL.js';

var orderElement

function renderProduct() {
    let html = '';

    if (allOrders.length > 0) {
        for (let i = 0; i < allOrders.length; i++) {
            html += `            
            <li class="cart__product-item">          
            <span class="product">
                <div class="product__des">
                    <span>${allOrders[i].id}</span>
                </div>
            </span>
            <span id="order-id" style="display:none">${allOrders[i].id}</span>
             <span class="quantity">
                 ${allOrders[i].date}
            </span>
            <span style="flex: 1" class="operation">
                 <button class="operation__buy">Chi tiết</button>
            </span>
         </li>`;
        }
    }

    document.getElementById('order-list').innerHTML = html;

    orderElement = document.querySelectorAll('.operation__buy')
    for(var i = 0; i < orderElement.length; i++) {
        var button = orderElement[i]
        button.addEventListener('click', orderDetail)
    }
}
renderProduct();


orderElement = document.querySelectorAll('.operation__buy')
for(var i = 0; i < orderElement.length; i++) {
    var button = orderElement[i]
    button.addEventListener('click', orderDetail)
}

function orderDetail(event) {
    var btnClicked = event.target
    var order = btnClicked.parentElement.parentElement
    var id = order.querySelector('#order-id').innerText
    console.log(id)

    $.ajax({
        type: 'POST',
        url: URL + '/order/saveOrderID' + "/" + id,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            window.location.href = "orderDetail.html";
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
    
    // window.location.href='./orderDetail.html'
}