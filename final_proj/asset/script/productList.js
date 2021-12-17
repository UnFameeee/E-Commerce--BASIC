import { URL } from './URL.js';
import { checkRoleItem } from './exportRole.js';
import { usernameimageItem } from './exportUsernameImage.js';

document.getElementById("id_category_username").innerHTML = usernameimageItem[0].username;
document.getElementById("id_category_username2").innerHTML = usernameimageItem[0].username;
if(usernameimageItem[0].image !== null){
    document.getElementById("myimg2").src = usernameimageItem[0].image;
    document.getElementById("myimg3").src = usernameimageItem[0].image;
}
if(checkRoleItem.UserRole == "user"){
    document.getElementById("id_linktoacc").href = "./user.html";
}else if(checkRoleItem.UserRole == "admin"){
    document.getElementById("id_linktoacc").href = "./admin.html";
}