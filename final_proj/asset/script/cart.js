import { URL } from './URL.js';

const btn_search = document.getElementById("btn_search");
btn_search.addEventListener("click", (Event) => {
    Event.preventDefault();

    var Model = {
        value: document.getElementById("id_search_input").value,
    };

    var requestJSON = JSON.stringify(Model);

    $.ajax({
        type: 'POST',
        url: URL + '/account/search' + "?" + Model.value,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: requestJSON,
        success: function(data) {
            console.log('ok');
            window.location.href = "index.html";
        },
        error: function() {
            
            console.log("The following error occured: ");
        }
    });
}, false);
