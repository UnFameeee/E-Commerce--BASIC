import { URL } from './URL.js';

//Edit - lưu xuống db xử lý xong đổi qua form khác
const btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener("click", (Event) => {
    Event.preventDefault();
        var Model = {
            id: ""
        };

        var requestJSON = JSON.stringify(Model);

        $.ajax({
            type: 'POST',
            url: URL + '/product/saveIDproduct' + "/" + Model.id,
            dataType: 'json',
            headers: {
                "Content-Type": "application/json",
            },
            data: requestJSON,
            success: function(data) {
                window.location.href = "editProduct.html";
            },
            error: function() {
                console.log("The following error occured: ");
            }
        });

}, false);

//Xóa sp
const btn_delete = document.getElementById("btn_delete");
btn_delete.addEventListener("click", (Event) => {
    Event.preventDefault();

    var Model = {
        id: ""
    };

    var requestJSON = JSON.stringify(Model);

    $.ajax({
        type: 'DELETE',
        url: URL + '/product/delete' + "/" + Model.id,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: requestJSON,
        success: function(data) {
            if(data.key == "Success"){
                alert("");
                window.location.href = "productList.html";
            }
            
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
            
}, false);