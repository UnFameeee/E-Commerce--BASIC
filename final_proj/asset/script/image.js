// function uploadImage() {
//     document.getElementById("input").click();
// }


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCm3Q2qTzinzVe6HsHzRrxhxRGAUEp1I1w",
    authDomain: "finalcntt.firebaseapp.com",
    databaseURL: "https://finalcntt-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "finalcntt",
    storageBucket: "finalcntt.appspot.com",
    messagingSenderId: "1066656021546",
    appId: "1:1066656021546:web:c70915cd7e2d7f501e1753",
    measurementId: "G-0S2CEV27XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//--- selfconfig ---//
import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"

// Firebase Realtime Database
import {getDatabase, ref, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"
const realdb = getDatabase();

//--- Variables and References ---//
var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');

var SelBtn = document.getElementById('selbtn');
var UpBtn = document.getElementById('upbtn');
var DownBtn = document.getElementById('downbtn');

var input = document.createElement('input');

input.type = 'file';
input.onchange = e => {
    files = e.target.files;

    var extension = GetFileExt(files[0]);
    var name = GetFileName(files[0]);

    namebox.value = name;
    extlab.innerHTML = extension;

    reader.readAsDataURL(files[0]);
}
reader.onload = function(){
    myimg.src = reader.result;
}
//--- Selection ---//
SelBtn.onclick = function(){
    input.click();
}

function GetFileExt(file){
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length-1), (temp.length));
    return '.' + ext[0];
}

function GetFileName(file){
    var temp = file.name.split('.');
    var fname = temp.slice(0, -1).join('.');
    return fname;
}   

//--- Upload Process ---//
async function UploadProcess(){
    var ImgToUpload = files[0];

    var ImgName = namebox.value + extlab.innerHTML;

    //Validate file name
    if(!ValidateName()){
        alert('name can\'t contain ".", "#", "$", "[" and "]"');
    }

    const metaData = {
        contentType: ImgToUpload.type
    }

    const storage = getStorage();

    const storageRef = sRef(storage, "Images/"+ ImgName);

    const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

    UploadTask.on('state-changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        proglab.innerHTML = "Upload " + progress + "%";
    },

    (error) => {
        alert("Error: image not uploaded!!!");
    },

    ()=>{
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
            SaveURLtoRealtimeDB(downloadURL);
        });
    }

    );
}

//--- Function for realtime DB ---//
function SaveURLtoRealtimeDB(URL){
    var name = namebox.value;
    var ext = extlab.innerHTML;

    set(ref(realdb, "ImagesLinks/"+ name),{
        ImageName: (name + ext),
        ImgUrl: URL
    });
}

function GetURLfromRealtimeDB(URL){
    var name = namebox.value;

    var dbRef = ref(realdb);

    get(child(dbRef, "ImagesLinks/"+name)).then((snapshot)=>{
        if(snapshot.exists()){
            myimg.src = snapshot.val().ImgUrl;
        }
    })

}
//Can't not contain ".", "#", "$", "[" and "]"
function ValidateName(){
    var regex = /[\.#$\[\]]/
    return !(regex.test(namebox.name));
}

UpBtn.onclick = UploadProcess;
DownBtn.onclick = GetURLfromRealtimeDB;