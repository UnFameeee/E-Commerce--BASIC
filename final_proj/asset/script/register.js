import { URL } from './URL.js';

const btnAdd = document.getElementById("btn_submit");

btnAdd.addEventListener("click", (Event) => {
    Event.preventDefault();

    var Model = {
        username: document.getElementById("id_user").value,
        password: document.getElementById("id_pass").value,
        role: "user",
    };

    var requestJSON = JSON.stringify(Model);

    $.ajax({
        type: 'POST',
        url: URL + '/account/register',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: requestJSON,
        success: function(data) {
            if(data.key == "Success"){
                alert("Create account success");
                window.location.href = "Login.html";
            }
            else{
                alert(data.key);
            }
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
}, false);