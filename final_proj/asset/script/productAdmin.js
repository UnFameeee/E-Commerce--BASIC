import { URL } from './URL.js';

const btnAdd = document.getElementById("btn_submit");

btnAdd.addEventListener("click", (Event) => {
    Event.preventDefault();

    var Model = {
        id: "",
        product_name: document.getElementById("id_product_name").value,         //
        product_description: document.getElementById("id_product_description").value,       //
        product_image: document.getElementById("myimg").value,
        quantity: document.getElementById("id_quantity").value,
        price: document.getElementById("id_price").value,               //
        guarantee: document.getElementById("id_guarantee").value,       //
        brand: document.getElementById("id_brand").value                //
    };

    var requestJSON = JSON.stringify(Model);

    $.ajax({
        type: 'POST',
        url: URL + '/product/create',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: requestJSON,
        success: function(data) {
            if(data.key == "Success"){
                alert("Acc product successfully");
                window.location.href = "productAdmin.html";
            }
            else{
                alert(data.key);
            }
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
}, false);