

let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");

const generate=()=>{
    if(qrText.length>0){
    qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value; 
    imgBox.classList.add("show-img");
    qrText.value=""; 
    }
} 

