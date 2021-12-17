

// $('.info-img__image-content').filter(function(index){return $(this).attr('src')==='';}).hide();

// $('.user-category__img').filter(function(index){return $(this).attr('src')==='';}).hide();


// async function showImg() {
//     await $('.info-img__image-content').filter(function(index){return $(this).attr('src')==='';}).show();   
// }


var temp = 0

var addBtn = document.getElementById("add-product-button")

if(addBtn){
    addBtn.addEventListener('click', function () {
        temp = 0
        window.location.href = './addProduct.html'
    })
}


var updateBtn = document.getElementsByClassName("operation__buy")

for(var i = 0; i < updateBtn.length; i++) {
    var button = updateBtn[i]
    button.addEventListener('click', forwardCheck)
}

function forwardCheck() {
    temp = 1;
    localStorage.setItem('test', temp)
    window.location.href = './addProduct.html'
}

export const check = temp

