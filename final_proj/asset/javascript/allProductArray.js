import { URL } from '../script/URL.js';
async function selectAllProduct() {
    var dataArray = []
    await $.ajax({
        type: 'GET',
        url: URL + '/product/all',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json",
        },
        data: "",
        success: function (data) {
            dataArray = data;
        },
        error: function (jqXHR) {

            console.log("The following error occured: " + textStatus, errorThrown);
        }
    });
    return dataArray;
}

var listData = await selectAllProduct();
export const listDataArray = listData;