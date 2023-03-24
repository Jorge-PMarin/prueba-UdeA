const nombre = document.querySelector('.app__form__nombre');
const edad = document.querySelector('.app__form__edad');
const btn = document.querySelector('.app__form__btn');

function esApto(nombre, edad) {
  let output = '';
  if (edad >= 18) {
    output = `¡Felicidades, ${nombre}! ¡Cumples con los requisitos necesarios para participar!`;
  } else {
    output = `Lo sentimos, ${nombre}. No cumples con los requisitos necesarios para participar.`;
  }

  return output;
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let textoNombre = nombre.value;
  let numEdad = edad.value;
  alert(esApto(textoNombre, numEdad));
  edad.value = '';
  nombre.value = '';
});
