import { URL } from './URL.js';

async function exportAllOrders(){
    var value = []
    await $.ajax({
        type: 'GET',
        url: URL + '/order/showAllOrder',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function(data) {
            value = data;
        },
        error: function(jqXHR) {
            
            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return value;
}
var all = await exportAllOrders();
export const allOrders = all;