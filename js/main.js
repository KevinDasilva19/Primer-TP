
const formulario = document.getElementById("form-contacto");

// esta linea verifica que el formulario exista para que no de error
if (formulario) {
  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const inputMensaje = document.getElementById("mensaje");
  const cajaFeedback = document.getElementById("mensaje-feedback");

  formulario.addEventListener("submit", (event) => {
    // frena el envio por defecto y evita que se recargue la pagina
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const mensaje = inputMensaje.value.trim();

    // limpia clases anteriores del cartel de aviso
    cajaFeedback.className = "mt-3";

    // valida no haya quedado un campo sin completar
    if (nombre === "" || email === "" || mensaje === "") {
      cajaFeedback.classList.add("alert", "alert-danger");
      cajaFeedback.textContent = "Error: por favor completá todos los campos antes de enviar.";
      return;
    }

    // valida que el email ingresado en el campo cumpla con el formato de un mail
    const partesEmail = email.split("@");
    if (partesEmail.length !== 2 || partesEmail[0] === "" || !partesEmail[1].includes(".")) {
      cajaFeedback.classList.add("alert", "alert-danger");
      cajaFeedback.textContent = "Error: ingresá un correo electrónico válido (ej: nombre@dominio.com).";
      return;
    }

    cajaFeedback.classList.add("alert", "alert-success");
    cajaFeedback.textContent = `¡Gracias ${nombre}! Tu consulta fue enviada correctamente. Te responderemos a ${email}.`;

    // vacia los campos del formulario
    formulario.reset();
  });
}

// filtro en tiempo real en lugares.html
const buscadorLugares = document.getElementById("buscador-lugares");

if (buscadorLugares) {
  const tarjetasDestinos = document.querySelectorAll(".destino-item");

  buscadorLugares.addEventListener("input", () => {
    const textoBuscado = buscadorLugares.value.toLowerCase().trim();

    tarjetasDestinos.forEach((tarjeta) => {
      const contenido = tarjeta.textContent.toLowerCase();
      tarjeta.classList.toggle("d-none", !contenido.includes(textoBuscado));
    });
  });
}

// Seccion del INDEX
// guardo el boton con el id
const boton = document.getElementById("btn-modo");

// Escucho el clic en el botón
boton.addEventListener("click", () => {
    // Agrega o quita la clase "oscuro" en el <body>
    document.body.classList.toggle("oscuro");
    // Cambia el texto del botón segun la clase que tenga el body
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
});


