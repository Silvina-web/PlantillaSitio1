console.log("hola");

let img = document.getElementsByClassName("Imagenes")
let idImage = document.querySelectorAll("#ImagFig")
let cajaImgChicas = document.querySelector(".cajaImgChicas")
let cajaGrande = document.querySelector(".cajaGrande")
let cajaImgGrande = document.querySelector(".cajaImgGrande")
let imgGrande =document.getElementById("imgGrande")
let body = document.querySelector(".body")
let close = document.querySelector(".Close")



for( const idimagen of idImage){
    idimagen.addEventListener("click", (envet) => {
        cajaImgChicas.classList.add('resize-box-imagenes');
        cajaGrande.classList.add('content-image-resize');
        cajaImgGrande.classList.add('block.imagen');
        body.classList.add('resize-body');
    })
}

let n = 0;
function seleccionar(n){
    let obj = img.item(n);
    cajaImgChicas.src = obj.src
}