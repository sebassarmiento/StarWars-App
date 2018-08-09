import React, { Component } from 'react';

class Contacto extends Component {
  render() {
    return (

      console.log("Soy el contacto"),

      <div style={{width: '80%', margin: 'auto', textAlign: 'center'}} className="contact-padding-top">
        <h2>Contacto</h2>
        <br />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName" style={{ width: "100%"}}>
                <input type="text" className="form-control" id="firstName" placeholder="Nombre" />
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email" style={{width: "100%"}}>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="comments" style={{width: "100%"}}>
                <textarea className="form-control" id="comments" placeholder="Comentarios" rows="3"></textarea>
              </label>
            </div>
          </div>
          <button type="button" className="btn btn-dark" style={{width: "100%"}} disabled id="submitButton">Enviar info</button>
        </form>

      </div>

    );
  }
}

export default Contacto;