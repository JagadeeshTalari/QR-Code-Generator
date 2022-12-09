let input = document.getElementById("input");
let submit = document.getElementById("submit");
let image = document.getElementById("img");
let newDiv = document.createElement("div");

submit.addEventListener( 'click', () => {
let link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
if(input.value){
fetch(link)
.then((response) => {
    image.style.display = "block";
    image.style.marginTop = "6rem";
    newDiv.style.display = "none";
    return image.src = response.url;
    
})
.catch( (e) => console.log(e))

}

else{
    image.style.display = "none";
    newDiv.style.display = "block";
    let text = document.createTextNode("Please - Enter the data to generate QR Code ");
    newDiv.appendChild(text);
    newDiv.style.fontSize = "20px";
    newDiv.style.fontWeight = "700";
    newDiv.style.marginTop = "3rem";
    return document.body.appendChild(newDiv);
}

})
