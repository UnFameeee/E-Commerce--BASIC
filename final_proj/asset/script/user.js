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
            document.getElementById("id_fname").value = data.fullname;
            if(data.image != null  || data.image != "" ){
                document.getElementById("myimg").src = data.image;
                document.getElementById("myimg2").src = data.image;
            }
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

const btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener("click", (Event) => {
    Event.preventDefault();

    if(document.getElementById("id_fname").value != "" &&
            document.getElementById("id_email").value != "" &&
            document.getElementById("id_phone").value != "" &&
            document.getElementById("id_birth").value != "" &&
            document.getElementById("id_address").value != ""){
                var Model = {
                    id: "",
                    fullname: document.getElementById("id_fname").value,
                    image: "",
                    gender: "Nam",
                    email: document.getElementById("id_email").value,
                    phone: document.getElementById("id_phone").value,
                    birth: document.getElementById("id_birth").value, 
                    address: document.getElementById("id_address").value,
                };
        
                var requestJSON = JSON.stringify(Model);
    
                $.ajax({
                    type: 'PUT',
                    url: URL + '/user/update',
                    dataType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: requestJSON,
                    success: function(data) {
                        window.location.href = "user.html";
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