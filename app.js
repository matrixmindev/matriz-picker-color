const colorList = [
  "121212",
  "3ECF8E",
  "006239",
  "2F2F2F",
  "29903B",
  "FAFAFA",
  "363636",
  "5E5E5E",
];

const grid = document.querySelector(".container-grid");
const h1 = document.querySelector("h1");
const btnMode = document.getElementById("btn-mode");
const h2 = document.querySelectorAll("h2");

//inicializacion del estdado
let darkMode = true; //estado

// return html function
const containerColor = (hex) => {
  return (
    `<div class="container-color" style="background-color: #${hex}">
      <small class="container-small"  style="color: #3ECF8E;">
      #${ hex ? hex : "next"} 
       </small>
    </div>`
  )
};

for (let i = 0; i < 100; i++) {
  grid.innerHTML += containerColor(colorList[i]);
}

btnMode.addEventListener("click", (e) => {
  if (darkMode) {
    document.body.style.backgroundColor = "#121212";
    h1.style.color = "#FAFAFA";
    h2[0].textContent = "#121212";
    h2[0].style.color = "#FAFAFA";
    btnMode.textContent = "Light";

    h2[1].style.color = "#3ECF8E";
    h2[1].textContent = "RGB";

    h2[2].textContent = "Hex";
    h2[2].style.color = "#3ECF8E";

    darkMode = false;
  } else {
    document.body.style.backgroundColor = "white";
    btnMode.textContent = "Dark";
    h1.style.color = "black";
    h2[0].textContent = "#FFFFFF";
    h2[0].style.color = "#121212";

    h2[1].textContent = "RGB";
    h2[1].style.color = "#3ECF8E";

    h2[2].textContent = "Hex";
    h2[2].style.color = "#3ECF8E";

    darkMode = true;
  }
});

//select all container color
const colorContainer = document.querySelectorAll(".container-color");

for (let i = 0; i < colorContainer.length; i++) {
  colorContainer[i].addEventListener("click", (e) => {
    console.log(colorContainer[i]);
    
    //accediendo al elemento small y su texto
    const smallTextHex = colorContainer[i].firstElementChild.textContent;
    document.body.style.backgroundColor = `${smallTextHex}`;
  });
}


const btnRgb = document.getElementById("btn-rgb");

//declaracion de colores 
let red;
let green;
let blue;

//create random number entre 0 y 255
const numRandom = () => {
  return Math.floor(Math.random() * 255);
};

btnRgb.addEventListener("click", () => {
   red = numRandom();
   green = numRandom();
   blue = numRandom();
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  h2[1].textContent = `R:${red} G:${green} B:${blue}`;
  h2[1].style.color = "#FAFAFA";

  h2[0].textContent = btnMode.textContent;
  h2[0].style.color = "#3ECF8E";


  h2[2].textContent = 'Hex';
  h2[2].style.color = "#3ECF8E";

});

const numeroAleatorio2 = (list) => {
  return Math.floor(Math.random() * colorList.length);
};
console.log(numeroAleatorio2(colorList));

//
const btnHex = document.getElementById("btn-hex");
btnHex.addEventListener("click", () => {

  const idxRandom = numeroAleatorio2(colorList);
  document.body.style.backgroundColor = `#${colorList[idxRandom]}`;

  h2[2].textContent = `#${colorList[idxRandom]}`;
  h2[2].style.color = "white";

  h2[0].textContent = btnMode.textContent;
  h2[0].style.color = "#3ECF8E";

  h2[1].textContent = "RGB";
  h2[1].style.color = "#3ECF8E";

});
