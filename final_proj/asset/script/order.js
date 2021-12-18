import { allOrders } from "./exportAllOrder.js"


var orderElement

function renderProduct() {
    let html = '';

    if (allOrders.length > 0) {
        for (let i = 0; i < allOrders.length; i++) {
            html += `            
            <li class="cart__product-item">          
            <span class="product">
                <div class="product__des">
                    <span>${allOrders[i]}.id</span>
                </div>
            </span>
            <span id="order-id" style="display:none"></span>
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
    var order = btnClicked.parenElement.parenElement
    var id = order.querySelector('#order-id').innerText
    console.log(id)

    
    // window.location.href='./orderDetail.html'
}