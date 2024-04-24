function validateForm(object, array) {
  const missingInput =
    Object.values(object).some((value) => !value) ||
    array.length === 0;
  if (missingInput) {
    alert("Falta completar información");
    return "error";
  }
  if (object.inputYear.toString().length != 4) {
    alert("El año debe se un número de cuatro dígitos");
    return "error";
  }
  if (
    !(
      object.inputUrl.endsWith(".jpg") ||
      object.inputUrl.endsWith(".jpeg") ||
      object.inputUrl.endsWith(".png") ||
      object.inputUrl.endsWith(".gif") ||
      object.inputUrl.endsWith(".svg")
    )
  ) {
    alert(
      "Formato de imagen inválido. Formatos aceptados .jpg, .jpeg, .png, .gif o .svg"
    );
    return "error";
  }
  if (object.inputRate < 0 || object.inputRate > 10) {
    alert("La calificación debe ser un número entre 0 y 10");
    return "error";
  }
}

module.exports = {
    validateForm,
}