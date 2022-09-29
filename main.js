console.log("hola");

let img = document.getElementsByClassName("Imagenes")// clase de cada imagen en en cajaImgChicas
let idImage = document.querySelectorAll("#ImagFig") //id de figure 
let cajaImgChicas = document.querySelector(".cajaImgChicas") //box-imagenes
let cajaGrande = document.querySelector(".cajaGrande")//contentImagenes
let cajaImgGrande = document.querySelector(".cajaImgGrande")//boxLargeImagen
let imgGrande =document.getElementById("imgGrande")//boxImagen
let body = document.querySelector(".body")
let close = document.querySelector(".Close")



for( const idimagen of idImage){
    idimagen.addEventListener("click", (envet) => {
        cajaImgChicas.classList.add('resize-box-imagenes');
        cajaGrande.classList.add('content-image-resize');
        cajaImgGrande.classList.add('block-imagen');
       body.classList.add('resize-body');
    })
}

let n = 0;
function seleccionar(n){
    let obj = img.item(n);
    imgGrande.src = obj.src;
}

close.addEventListener("click", (envet)=>{
    cajaImgChicas.classList.remove('resize-box-imagenes');
        cajaGrande.classList.remove('content-image-resize');
        cajaImgGrande.classList.remove('block-imagen');
       body.classList.remove('resize-body');

})