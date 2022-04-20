import React, { useState } from "react";

function CartCheckOut({
  dataForm,
  setDataForm,
  validateEmail,
  setValidateEmail,
  generarOrden,
}) {
  const [imputsValidates, setImputsValidates] = useState(false);
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
    //Valido que los cmapos no sean nulos
    if (
      dataForm.name !== "" &&
      expresiones.nombre.test(dataForm.name) &&
      dataForm.phone !== "" &&
      expresiones.telefono.test(dataForm.phone) &&
      dataForm.phone !== "" &&
      dataForm.email !== "" &&
      validateEmail.campo !== ""
    )
      setImputsValidates(true);

    //Valido que el mail sea optimo
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
    <div className="container">
      <form className="mt-5">
        <div className="d-inline-flex flex-column bd-highlight mb-3">
          <label htmlFor="name">Full name</label>
          <input
            className=" "
            type="text"
            name="name"
            placeholder="Name"
            value={dataForm.name}
            onChange={handleChange}
            onKeyUp={validateInput}
            onBlur={validateInput}
          />
        </div>
        <br />
        <div className="d-inline-flex flex-column bd-highlight mb-3">
          <label htmlFor="phone"> Your phone</label>
          <input
            className=""
            type="text"
            name="phone"
            placeholder="Phone: 7 --> 14 num"
            value={dataForm.phone}
            onChange={handleChange}
            onKeyUp={validateInput}
            onBlur={validateInput}
          />
        </div>
        <br />

        <div className="d-inline-flex flex-column bd-highlight mb-3">
          <label htmlFor="email"> Your E-mail</label>
          <input
            className=""
            type="email"
            name="email"
            placeholder="Tu e-mail"
            value={dataForm.email}
            onChange={handleChange}
            onKeyUp={validateInput}
            onBlur={validateInput}
          />
        </div>
        <br />
        <div className="d-inline-flex flex-column bd-highlight mb-3">
          <label htmlFor="campo"> Repeat E-mail</label>
          <input
            className=""
            type="email"
            name="campo"
            placeholder="Repetir E-Mail"
            value={validateEmail.campo}
            onChange={setEmail}
            onKeyUp={validateInput}
            onBlur={validateInput}
          />
        </div>
        {!validateEmail.valido ? (
          <p className="text-danger">El mail no es valido o no coicide</p>
        ) : (
          <p className="text-success">Los mails conciden</p>
        )}
        <br />
        {/* Me queda definir la logica para que todos los campos esten llenos y luego aceptar */

        imputsValidates && validateEmail.valido ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={generarOrden}
          >
            ¡Comprar Ahora!
          </button>
        ) : (
          <p>Termine de llenar el formulario, para realizar la compra</p>
        )}
      </form>
    </div>
  );
}

export default CartCheckOut;
