console.log(document);

const titulo = document.querySelector("h1");
console.log(titulo);

const itemsMenu = document.querySelectorAll("li");
console.log(itemsMenu);

const infoExtra = document.querySelector(".info .clima");
console.log(infoExtra);

const test = document.querySelector("nav ul li");
console.log(test);

const articulos = document.querySelectorAll("article");

for (let i = 0; i < articulos.length; i++) {
  console.log(articulos[i]);
}

articulos.forEach((articulo) => {
  const titulo = articulo.querySelector("h2").innerText;
  console.log(titulo);
});

const cuerpoHtml = document.querySelector("body");

console.log(cuerpoHtml.classList);

cuerpoHtml.classList.toggle("dark");
console.log(cuerpoHtml.classList);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna:
// https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview
