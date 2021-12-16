import { URL } from './URL.js';

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
            console.log('ok');
            if (data.key == "Success" && data.UserRole == "user") {
                window.location.href = "index.html";
            } else if (data.key == "Success" && data.UserRole == "admin") {
                window.location.href = "admin.html";
            } 
        },
        error: function() {
            
            console.log("The following error occured: ");
        }
    });
}, false);
