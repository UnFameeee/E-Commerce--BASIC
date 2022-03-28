import { URL } from './URL.js';

window.addEventListener('load', function(){
    $.ajax({
        type: 'GET',
        url: URL + '/order/showDetailOrder',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            // console.log(data)
            // console.log(data[0])
            // console.log(data[0].product_name)
            // console.log(document.querySelector("#id_name"))
            document.getElementById("id_name").innerText = 'Tên sản phẩm: '+ data[0].product_name;
            if(data[0].product_image !== null){
                document.getElementById("id_image").src = data[0].product_image;
            }
            // document.getElementById("id_id").innerText = data[0].id,
            document.getElementById("id_date").innerText = 'Ngày mua hàng:'+data[0].date;
            document.getElementById("id_quantity").innerText ='Số lượng: ' +data[0].quantity;
            document.getElementById("id_amount").innerText ='Tiền: '+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data[0].amount);
            
            document.getElementById("id_fullname").innerText = 'Tên người mua: ' + data[0].fullname;
            document.getElementById("id_email").innerText = 'Email: ' + data[0].email;
            document.getElementById("id_phone").innerText = 'Số điện thoại: '+data[0].phone,
            document.getElementById("id_gender").innerText = 'Giới tính: '+ data[0].gender;
            document.getElementById("id_birth").innerText = 'Ngày sinh: '+ data[0].birth;
            document.getElementById("id_address").innerText = 'Địa chỉ: ' + data[0].address;
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
})