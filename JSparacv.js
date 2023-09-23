/**document.getElementById('boton_borrar').addEventListener('click', function() {
    document.getElementById('escrito').innerHTML= "";
});


document.getElementById ('boton_restablecer').addEventListener ('click', function() {
    document.getElementById('escrito').innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam blanditiis ea odio. Tempora unde porro nulla provident, nihil cum sunt ea nam quasi corrupti ipsa numquam dignissimos illum sapiente sit.";
});
*/
function modificar(numero) {
    const escritoElement = document.getElementById('escrito_' + numero);
    escritoElement.innerText = 'El texto fue modificado';
  }

  function borrar(numero) {
    const escritoElement = document.getElementById('escrito_' + numero);
    escritoElement.innerText = '';
  }

  function restablecer(numero) {
    const escritoElement = document.getElementById('escrito_' + numero);
    escritoElement.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam blanditiis ea odio. Tempora unde porro nulla provident, nihil cum sunt ea nam quasi corrupti ipsa numquam dignissimos illum sapiente sit.';
  }

  document.getElementById('boton_modificar_1').addEventListener('click', () => modificar(1));
  document.getElementById('boton_borrar_1').addEventListener('click', () => borrar(1));
  document.getElementById('boton_restablecer_1').addEventListener('click', () => restablecer(1));

  document.getElementById('boton_modificar_2').addEventListener('click', () => modificar(2));
  document.getElementById('boton_borrar_2').addEventListener('click', () => borrar(2));
  document.getElementById('boton_restablecer_2').addEventListener('click', () => restablecer(2));

  document.getElementById('boton_modificar_3').addEventListener('click', () => modificar(3));
  document.getElementById('boton_borrar_3').addEventListener('click', () => borrar(3));
  document.getElementById('boton_restablecer_3').addEventListener('click', () => restablecer(3));

  document.getElementById('boton_modificar_4').addEventListener('click', () => modificar(4));
  document.getElementById('boton_borrar_4').addEventListener('click', () => borrar(4));
  document.getElementById('boton_restablecer_4').addEventListener('click', () => restablecer(4));
