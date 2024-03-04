const images = [
   "/assets/consegna/img/01.webp",
   "/assets/consegna/img/02.webp",
   "/assets/consegna/img/03.webp",
   "/assets/consegna/img/04.webp",
   "/assets/consegna/img/05.webp",
]


const itemwrapper = document.querySelector(".carusel-image")
const tumbWrapper = document.querySelector(".tumb-col")

let counterItem = 0

const prev = document.querySelector(".arrow.up")
const next = document.querySelector(".arrow.down")

itemwrapper.innerHTML = ""
tumbWrapper.innerHTML = ""

for (let i = 0; i < images.length; i++){
   const imagePath = images[i]
   itemwrapper.innerHTML +=  `<img class="item hide" src="${imagePath}">`
   tumbWrapper.innerHTML += `<img class="thumb" src="${imagePath}">`
}

// salvo le img e le tumb dentro una constante
const imagesElements = document.querySelectorAll(".item")
const thumbElements = document.querySelectorAll(".thumb")
console.log(imagesElements, thumbElements)

imagesElements[counterItem].classList.remove("hide")
thumbElements[counterItem].classList.add("active")

// click del bottone sotto
next.addEventListener("click", showNext)


// click del bottone sopra
prev.addEventListener("click", showPrevious)

// funtions //

// setInterval (showNext(), 1000 )

function showPrevious(){
   imagesElements[counterItem].classList.add("hide");
   thumbElements[counterItem].classList.remove("active");   
   counterItem--;
   // se il contatore è inferiore a 0 prendo  l' ultimo elemento dell' array
   if( counterItem === -1){
      counterItem = images.length -1
   }
   imagesElements[counterItem].classList.remove("hide");
   thumbElements[counterItem].classList.add("active");
}


function showNext(){
   imagesElements[counterItem].classList.add("hide");
   thumbElements[counterItem].classList.remove("active");   
   counterItem++;
   // se il contatore arriva alla fine dell' array il ontatore diventa 0
   if( counterItem === images.length){
      counterItem = 0
   }
   imagesElements[counterItem].classList.remove("hide");
   thumbElements[counterItem].classList.add("active");
}