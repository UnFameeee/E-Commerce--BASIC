import { URL } from './URL.js';

async function getProductID(){
    var value = 
    await $.ajax({
        type: 'GET',
        url: URL + '/product/getIDproduct',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            value = data.key;
        },
        error: function(jqXHR) {
            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return value;
}
var prodID = await getProductID();

$.ajax({
    type: 'GET',
    url: URL + '/product/singleById',
    dataType: 'json',
    headers: {
        "Content-Type": "application/json",
    },
    data: "",
    success: function(data) {
        console.log(data)
        document.getElementById("id_product_name").value = data.product_name;       
        document.getElementById("id_product_description").value = data.product_description;
        document.getElementById("id_price").value = data.price;           
        document.getElementById("id_brand").value = data.brand;
        document.getElementById("id_guarantee").value = data.guarantee;
        document.getElementById("id_quantity").value = data.quantity;
        if(data.product_image !== null){
            document.getElementById("myimg").src = data.product_image;
        }
        
    },
    error: function() {
        console.log("The following error occured: ");
    }
});



const btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener("click", (Event) => {
    Event.preventDefault();

    if(document.getElementById('myimg').getAttribute('src') != "" &&
    document.getElementById("id_product_name").value != "" &&         
    document.getElementById("id_product_description").value != "" &&    
    document.getElementById("id_price").value != "" &&                    
    document.getElementById("id_brand").value != ""){
        var Model = {
            id: "",
            product_name: document.getElementById("id_product_name").value,         
            product_description: document.getElementById("id_product_description").value,       
            product_image: "",
            quantity: document.getElementById("id_quantity").value,
            price: document.getElementById("id_price").value,               
            guarantee: document.getElementById("id_guarantee").value,       
            brand: document.getElementById("id_brand").value
        };

        var requestJSON = JSON.stringify(Model);

        $.ajax({
            type: 'PUT',
            url: URL + '/product/update',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json",
            },
            data: requestJSON,
            success: function(data) {
                if(data.key == "Success"){
                    alert("Update successfully!!!");
                    window.location.href = "productList.html";
                }
                
            },
            error: function() {
                console.log("The following error occured: ");
            }
        });
    }
    else{
        alert("Please insert full information")
    }
}, false);