import React, { Component } from 'react';

class Guardado extends Component {
  constructor(){
    super()
    this.state = {}

    this.saved = []
  }

  componentDidMount(){
    this.getLocalStorage()
  }

  getLocalStorage(){
    let localList = localStorage.getItem('guardados')
    let parsedList = JSON.parse(localList)
    console.log(parsedList)
    this.setState({
      data: parsedList
    })
    this.saved = parsedList
  }

  removeLocal(persona){
    console.log(persona)
    
    for(let i = 0 ; i < this.saved.length ; i++){
      if(this.saved[i].name === persona.name){
        this.saved.splice(i, 1)
      }
    }
    let newList = JSON.stringify(this.saved)
    localStorage.setItem('guardados', newList)

    this.setState({
      data: this.saved
    })
  }

  render() {
    return (

      <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Género</th>
            <th scope="col">Altura</th>
            <th scope="col">Peso</th>
            <th scope="col">Color de ojos</th>
            <th scope="col">Guardar</th>
          </tr>
        </thead>
        <tbody id="tableBody">

          {
            this.state.data ? (this.number = 0, this.state.data.map(data => {
              return (
                console.log(data),
                this.number++ ,
                <tr key={data.url} >
                  <td>{this.number} </td>
                  <td> {data.name} </td>
                  <td> {data.gender} </td>
                  <td> {data.height} </td>
                  <td>  {data.mass} </td>
                  <td> {data.eye_color} </td>
                  <td> <button className="btn btn-danger" onClick={() => this.removeLocal(data)} >Eliminar</button></td>
                </tr>
              )
            })) : console.log('No entra')
          }

        </tbody>
      </table>
      
    </div>

          );
  }
}

export default Guardado;