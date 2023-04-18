const film1 = document.querySelector(".film1");
const film2 = document.querySelector(".film2");
const film3 = document.querySelector(".film3");

const film6 = document.querySelector(".film6");
const film7 = document.querySelector(".film7");
const film8 = document.querySelector(".film8");

const film11 = document.querySelector(".film11");
const film12 = document.querySelector(".film12");
const film13 = document.querySelector(".film13");

const texte1 = document.querySelector(".texte1");
const texte2 = document.querySelector(".texte2");
const texte3 = document.querySelector(".texte3");
const texte4 = document.querySelector(".texte4");
const texte5 = document.querySelector(".texte5");
const texte6 = document.querySelector(".texte6");
const texte7 = document.querySelector(".texte7");
const texte8 = document.querySelector(".texte8");
const texte9 = document.querySelector(".texte9");

const texteb = document.querySelector(".texteb")

console.log(texteb);

function film (film, texte){
    film.addEventListener("click", () =>{
        texte.style.visibility = "visible";
        texteb.style.border = "solid 1px"
    })
}

film(film1,texte1)
film(film2,texte2)
film(film3, texte3)
film(film6, texte4)
film(film7, texte5)
film(film8, texte6)
film(film11, texte7)
film(film12, texte8)
film(film13, texte9)

// film(film2, film01)
// film(film1, film00)