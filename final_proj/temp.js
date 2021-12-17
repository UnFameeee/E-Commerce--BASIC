$.ajax({
    type: 'POST',
    url: URL + '/product/create',
    dataType: 'json',
    headers: {
        "Content-Type": "application/json",
    },
    data: requestJSON,
    success: function(data) {
        if(data.key == "Success"){
            alert("Acc product successfully");
            window.location.href = "addProduct.html";
        }
        else{
            alert(data.key);
        }
    },
    error: function() {
        console.log("The following error occured: ");
    }
});