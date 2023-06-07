import React, { useState } from 'react';
import './formStyle.css';
import img from '../img/fondo-seccion-formulario.webp';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier lógica adicional con los datos ingresados antes de enviar el formulario
    // Por ejemplo, puedes hacer una petición a un servidor API para guardar los datos

    // Después de enviar el formulario, establecemos submitted en true para mostrar el mensaje de confirmación
    setSubmitted(true);
  };

  return (
    <section className="form">
      <img className="background-img" src={img} alt="" />
      <div className="container">
        <div className="row">
          <aside className="aside">
            <div className="aside__post">
              <div>
                <h1 className="aside__title">¡No pierdas la oportunidad de participar en esta experiencia transformadora!</h1>
              </div>
              <div>
                <p className="aside__content">Regístrate ahora y prepárate para sumergirte en un mundo de innovación, colaboración y desafíos emocionantes. Al unirte a nuestro Hack4Challenge, tendrás la oportunidad única de poner a prueba tus habilidades, aprender de expertos y trabajar en proyectos que pueden cambiar el panorama tecnológico.</p>
              </div>
            </div>
          </aside>
          <div className="form__container">
            <div className="flat__title">
              <div className="form__title">
                <h2 className="title">
                  Insribete y pon a prueba tus habilidades
                </h2>
              </div>
              <div>
                {submitted ? (
                  <div className="confirmation-message">
                    <p className="info__final">Su inscripción ha sido completada.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} method="post" action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        name="cnombre"
                        value={nombre}
                        placeholder="Nombre"
                        required
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        name="capellido"
                        value={apellido}
                        placeholder="Apellido"
                        required
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="inputAddress"
                        name="ccelular"
                        value={celular}
                        placeholder="Celular"
                        required
                        onChange={(e) => setCelular(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="inputAddress2"
                        name="cemail"
                        value={email}
                        placeholder="Correo"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <div className="contenedor-terminos">
                        <input type="checkbox" className="form-check-input" id="Check1" required />
                        <label className="form-check-label" htmlFor="Check1">
                          Acepto términos y condiciones
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" className="form-check-input" id="Check2" required />
                        <label className="form-check-label" htmlFor="Check2">
                          {' '}
                          <a className="terminos" target="_blank" href="https://www.taxislibres.com.co/taxidisponible/PoliticaTratamientoDatos.pdf" rel="noreferrer">
                            Acepto política de tratamiento de datos
                          </a>
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="flat-btn btn-color btn-normal" id="envmail" disabled="">
                      Enviar
                    </button>
                    <input type="hidden" name="continuar" id="continuar" value="SII" />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
