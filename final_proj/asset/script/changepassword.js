import { URL } from './URL.js';

window.addEventListener('load', function(){
    $.ajax({
        type: 'GET',
        url: URL + '/account/getUsernameAndImage',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            document.getElementById("id_category_username").innerHTML = data[0].username;
            document.getElementById("id_username").innerHTML = data[0].username;
            if(data[0].image !== null){
                document.getElementById("myimg2").src = data[0].image;
            }
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
})


const btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener("click", (Event) => {
    Event.preventDefault();

    if(document.getElementById("id_pass").value != "" &&
        document.getElementById("id_newpass").value != "" &&
        document.getElementById("id_renewpass").value != "" ){
            if(document.getElementById("id_newpass").value == document.getElementById("id_renewpass").value){
                var Model = {
                    id: "",
                    username: document.getElementById("id_username").innerHTML,
                    password: document.getElementById("id_newpass").value,
                    role: ""
                };
                var oldPass = document.getElementById("id_pass").value;
                var requestJSON = JSON.stringify(Model);
    
                $.ajax({
                    type: 'PUT',
                    url: URL + '/account/update' + "?oldPass=" + oldPass,
                    dataType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: requestJSON,
                    success: function(data) {
                        alert(data.key);
                        if(data.key == "Success"){
                            window.location.href = "user.html";
                        }
                    },
                    error: function() {
                        console.log("The following error occured: ");
                    }
                });
            }else{
                alert("New password and Re-new password doesn't match!!!");
            }
        }else{
            alert("Please insert full information");
        }
}, false);