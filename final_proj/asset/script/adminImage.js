import { URL } from './URL.js';

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

var namebox;
var extlab;                                       
var proglab; 
var myimg = document.getElementById('myimg');           
var UpBtn = document.getElementById('upload_btn');
var SelBtn = document.getElementById('select_btn');
var input = document.createElement('input');

input.type = 'file';
input.onchange = e => {
    files = e.target.files;

    var extension = GetFileExt(files[0]);
    var name = GetFileName(files[0]);

    namebox = name;
    extlab = extension;

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
function UploadProcess(){
    var ImgToUpload = files[0];

    var ImgName = namebox + extlab;

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
        proglab = "Upload " + progress + "%";
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
async function SaveURLtoRealtimeDB(URL){
    var name = namebox;
    var ext = extlab;

    set(ref(realdb, "ImagesLinks/"+ name),{
        ImageName: (name + ext),
        ImgUrl: URL
    });
}

async function GetURLfromRealtimeDB(){
    var name;
    if(namebox != null){
        name = namebox;
    }else {name = "";}
    var dbRef = ref(realdb);

    get(child(dbRef, "ImagesLinks/" + name)).then((snapshot)=>{
        if(snapshot.exists()){
                var Model = {
                    id: "",
                    fullname: "",
                    image: snapshot.val().ImgUrl,
                    gender: "",
                    email: "",
                    phone: "",
                    birth: "", 
                    address: "",
                };
        
                var requestJSON = JSON.stringify(Model);
    
            $.ajax({
                type: 'PUT',
                url: URL + '/user/updateImage',
                dataType: 'json',
                headers: {
                    "Content-Type": "application/json",
                },
                data: requestJSON,
                success: function(data) {
                    alert("Update picture successfully!!!");
                    window.location.href = "admin.html";
                },
                error: function() {
                    console.log("The following error occured: ");
                }
            });
        }
    })

}
//Can't not contain ".", "#", "$", "[" and "]"
function ValidateName(){
    var regex = /[\.#$\[\]]/
    if(namebox != null)
        return !(regex.test(namebox));
    return 1;
}

UpBtn.addEventListener("click", (Event) => {
    Event.preventDefault();
    UploadProcess();
    const timeLimit = 1;
    let i = 0;
    const timer = setInterval(function(){
        i++;
        if(i === timeLimit){
            clearInterval(timer);
            GetURLfromRealtimeDB();
        }
    }, 1000);
})