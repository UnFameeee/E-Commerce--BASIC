import { URL } from './URL.js';

async function getUsernameImage(){
    var role = [] 
    await $.ajax({
        type: 'GET',
        url: URL + '/account/getUsernameAndImage',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            role = data;
        },
        error: function() {
            console.log("The following error occured: ");
        }
    });
    return role;
}
var usernameimage = await getUsernameImage();
export const usernameimageItem = usernameimage;