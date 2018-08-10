import React, { Component } from 'react';

class Contacto extends Component {

  constructor(){
    super()
    this.state = {
      inputName: '',
      enviar: false
    }
  }

  inputTextChange = (e) => {
      let inputNode = document.getElementById(e.target.id)
      if(e.target.value){
      console.log(e.target.id)
      inputNode.classList.remove('is-invalid')
      inputNode.classList.add('is-valid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }

    let valid = document.getElementsByClassName('is-valid')
    valid.length === 3 ? this.setState({enviar: true}) : this.setState({enviar: false})
  }


  contactSubmit = () => {
    console.log('Enviado')
  }

  render() {
    return (

      <div style={{width: '80%', margin: 'auto', textAlign: 'center'}} className="contact-padding-top">
        <h2 className="star mt-5 text-light" >Contacto</h2>
        <br />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName" style={{ width: "100%"}}>
                <input type="text" className="form-control" id="firstName" placeholder="Nombre" name={this.state.inputName} onChange={this.inputTextChange} />
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email" style={{width: "100%"}}>
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.inputTextChange} />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="comments" style={{width: "100%"}}>
                <textarea className="form-control" id="comments" placeholder="Comentarios" rows="3" onChange={this.inputTextChange} ></textarea>
              </label>
            </div>
          </div>
          {
            this.state.enviar ? <button type="button" className="btn btn-dark" style={{width: "100%"}} id="submitButton" onClick={this.contactSubmit} >Enviar info</button> : <button type="button" className="btn btn-dark" style={{width: "100%"}} disabled id="submitButton">Enviar info</button>
          }
        </form>

      </div>

    );
  }
}

export default Contacto;