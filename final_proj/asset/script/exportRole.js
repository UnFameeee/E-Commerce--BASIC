import { URL } from './URL.js';

async function checkRole(){
    var role = 
    await $.ajax({
        type: 'GET',
        url: URL + '/account/getRole',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            role = data;
        },
        error: function(jqXHR) {
            
            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return role;
}
var roleCheck = await checkRole();
export const checkRoleItem = roleCheck;