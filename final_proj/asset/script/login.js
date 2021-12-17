import { URL } from './URL.js';

window.addEventListener('load', function(){
    $.ajax({
        type: 'POST',
        url: URL + '/account/logout',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
})




const btnAdd = document.getElementById("btn_login");
btnAdd.addEventListener("click", (Event) => {
    Event.preventDefault();

    var Model = {
        id: "",
        username: document.getElementById("id_user").value,
        password: document.getElementById("id_pass").value,
        role: "user"
    };

    var requestJSON = JSON.stringify(Model);

    $.ajax({
        type: 'POST',
        url: URL + '/account/login',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: requestJSON,
        success: function(data) {
            if (data.key == "Success" && data.UserRole == "user") {
                window.location.href = "index.html";
            } else if (data.key == "Success" && data.UserRole == "admin") {
                window.location.href = "index.html";
            } else{
                alert("Wrong Username or Password!!!")
            }
        },
        error: function() {
            
            console.log("The following error occured: ");
        }
    });
}, false);
