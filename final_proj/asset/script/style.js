import { URL } from './URL.js';
import { checkRoleItem } from './exportRole.js';
import { usernameimageItem } from './exportUsernameImage.js';

document.getElementById("id_category_username").innerHTML = usernameimageItem[0].username;
document.getElementById("id_category_username2").innerHTML = usernameimageItem[0].username;
if(usernameimageItem[0].image !== null){
    document.getElementById("myimg3").src = usernameimageItem[0].image;
    document.getElementById("myimg2").src = usernameimageItem[0].image;
}
if(checkRoleItem.UserRole == "user"){
    document.getElementById("id_linktoacc").href = "user.html";
}else if(checkRoleItem.UserRole == "admin"){
    document.getElementById("id_linktoacc").href = "admin.html";
}


// window.addEventListener('load', function(){
//     $.ajax({
//         type: 'GET',
//         url: URL + '/order/showDetailOrder',
//         dataType: 'json',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: "",
//         success: function(data) {
//             document.getElementById("id_product_name").value = data[0].product_name;
//             if(data[0].image !== null){
//                 document.getElementById("id_product_image").src = data[0].product_image;
//             }
//             document.getElementById("id_id").value = data[0].id,
//             document.getElementById("id_date").value = data[0].date;
//             document.getElementById("id_quantity").value = data[0].quantity;
//             document.getElementById("id_amount").value = data[0].amount;
            
//             document.getElementById("id_fname").value = data[0].fullname;
//             document.getElementById("id_email").value = data[0].email;
//             document.getElementById("id_phone").value = data[0].phone,
//             document.getElementById("id_gender").value = data[0].gender;
//             document.getElementById("id_birth").value = data[0].birth;
//             document.getElementById("id_address").value = data[0].address;
//         },
//         error: function() {
//             console.log("The following error occured: ");
//         }
//     });
// })


// $.ajax({
//     type: 'POST',
//     url: URL + '/order/saveOrderID' + "/" + id,
//     dataType: 'json',
//     headers: {
//         "Content-Type": "application/json",
//     },
//     data: "",
//     success: function(data) {
//         window.location.href = "orderDetail.html";
//     },
//     error: function() {
//         console.log("The following error occured: ");
//     }
// });