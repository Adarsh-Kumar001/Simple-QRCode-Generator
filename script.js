console.log("This is qr code generator");

/*API:  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example*/

let qrImage = document.getElementById("qr-image");
let downloadBtn = document.getElementById("downloadbtn");
let generateBtn = document.getElementById("generatebtn");


generateBtn.addEventListener("click",()=>{
    let inputQr = document.getElementById("inputValue").value;
    
    if(inputQr.trim() === ""){
        downloadBtn.style.opacity = "0";
        qrImage.style.opacity = "0";
        alert("Please enter any text or URL to generate!");
    }
    else{
        generateQR(inputQr);
    }

});

function generateQR(textORimg){
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textORimg}`;
    downloadBtn.style.opacity = "1";
    qrImage.style.opacity = "1";
}


downloadBtn.addEventListener("click",()=>{
    const imageUrl = qrImage.getAttribute("src"); 
    const imageName = 'qrCode.jpg';  

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});