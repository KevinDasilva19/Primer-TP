const formulario = document.getElementById("form-contacto");

// Esta linea verifica que el formulario exista para que node error
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
    if (!email.includes("@")) {
      cajaFeedback.classList.add("alert", "alert-danger");
      cajaFeedback.textContent = "Error: ingresá un correo electrónico válido con @.";
      return;
    }

    cajaFeedback.classList.add("alert", "alert-success");
    cajaFeedback.textContent = `¡Gracias ${nombre}! Tu consulta fue enviada correctamente. Te responderemos a ${email}.`;

    // vacia los campos del formulario
    formulario.reset();
  });
}