import { URL } from './URL.js';

window.addEventListener('load', function(){
    $.ajax({
        type: 'GET',
        url: URL + '/user/profile',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            console.log('ok');
            document.getElementById("id_fname").value = data.fullname;
            document.getElementById("myimg").src = data.image;
            document.getElementById("myimg2").src = data.image;
            document.getElementById("id_email").value = data.email;
            document.getElementById("id_phone").value = data.phone,
            document.getElementById("id_birth").value = data.birth;
            document.getElementById("id_address").value = data.address;
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
})