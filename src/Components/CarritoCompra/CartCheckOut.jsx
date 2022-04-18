import React from "react";

function CartCheckOut({
  dataForm,
  setDataForm,
  validateEmail,
  setValidateEmail,
  generarOrden,
}) {
  //Quedan validar los inputs y ver el tema del id de la compra final..
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const setEmail = (e) => {
    setValidateEmail({
      ...validateEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    if (
      expresiones.correo.test(validateEmail.campo) &&
      dataForm.email === validateEmail.campo
    ) {
      setValidateEmail({ ...validateEmail, valido: true });
    } else {
      setValidateEmail({ ...validateEmail, valido: false });
    }
  };

  return (
    <>
      <form className="mt-5">
        <input
          className="m-2"
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={dataForm.name}
          onChange={handleChange}
        />
        <br />

        {
          //Queda definir el campo del apellido
          // <input
          //   className="m-2"
          //   type="text"
          //   name="apellido"
          //   placeholder=" Tu apellido"
          //   value={dataForm.apellido}
          //   onChange={handleChange}
          // />
          // <br />
        }
        <input
          className="m-2"
          type="text"
          name="phone"
          placeholder="Tu telefono"
          value={dataForm.phone}
          onChange={handleChange}
        />
        <br />
        <input
          className="m-2"
          type="email"
          name="email"
          placeholder="Tu e-mail"
          value={dataForm.email}
          onChange={handleChange}
        />
        <br />
        <input
          className="m-2"
          type="email"
          name="campo"
          placeholder="Repetir E-Mail"
          value={validateEmail.campo}
          onChange={setEmail}
          onKeyUp={validateInput}
          onBlur={validateInput}
        />
        {!validateEmail.valido ? (
          <p className="text-danger">El mail no es valido o no coicide</p>
        ) : (
          <p className="text-success">Los mails conciden</p>
        )}
        <br />
        {/* Me queda definir la logica para que todos los campos esten llenos y luego aceptar */}
        <button
          type="button"
          className="btn btn-success"
          onClick={generarOrden}
        >
          ¡Comprar Ahora!
        </button>
      </form>
    </>
  );
}

export default CartCheckOut;
