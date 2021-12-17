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
            console.log(data);  
            document.getElementById("id_fname").value = data[0].fullname;
            document.getElementById("id_category_username").innerHTML = data[0].username;
            document.getElementById("id_category_username2").innerHTML = data[0].username;
            if(data[0].image !== null){
                document.getElementById("myimg").src = data[0].image;
                document.getElementById("myimg2").src = data[0].image;
                document.getElementById("myimg3").src = data[0].image;
            }
            document.getElementById("id_email").value = data[0].email;
            document.getElementById("id_phone").value = data[0].phone,
            document.getElementById("id_birth").value = data[0].birth;
            document.getElementById("id_address").value = data[0].address;
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
                        if(data.key == "Success"){
                            alert("Update successfully!!!");
                            window.location.href = "user.html";
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