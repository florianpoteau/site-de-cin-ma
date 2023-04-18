// Constante film

const film1 = document.querySelector(".film1");
const film2 = document.querySelector(".film2");
const film3 = document.querySelector(".film3");
const film6 = document.querySelector(".film6");
const film7 = document.querySelector(".film7");
const film8 = document.querySelector(".film8");
const film11 = document.querySelector(".film11");
const film12 = document.querySelector(".film12");
const film13 = document.querySelector(".film13");

// Constante texte des films

const texte1 = document.querySelector(".texte1");
const texte2 = document.querySelector(".texte2");
const texte3 = document.querySelector(".texte3");
const texte4 = document.querySelector(".texte4");
const texte5 = document.querySelector(".texte5");
const texte6 = document.querySelector(".texte6");
const texte7 = document.querySelector(".texte7");
const texte8 = document.querySelector(".texte8");
const texte9 = document.querySelector(".texte9");

function film (film, texte){
    film.addEventListener("click", () =>{
        texte.style.visibility = "visible";
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

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");

function bouton (bouton, texte){
    bouton.addEventListener("click", () =>{
        texte.style.visibility = "visible";
    })
}

bouton(btn1, texte1);
bouton(btn2, texte2);
bouton(btn3, texte3);
bouton(btn4, texte4);
bouton(btn5, texte5);
bouton(btn6, texte6);
bouton(btn7, texte7);
bouton(btn8, texte8);
bouton(btn9, texte9);