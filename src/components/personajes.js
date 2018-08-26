import React, { Component } from 'react';
import { genderTranslate, eyeColorTranslate } from '../utils/translate';

const API_URL = 'https://swapi.co/api/people/'

class Personajes extends Component {
  constructor() {
    super()
    this.state = {}
    this.number = 0

    this.list = []
    this.saved = []
    this.next = null

    this.getData = this.getData.bind(this)
    this.getMoreData = this.getMoreData.bind(this)
  }

  componentDidMount() {
    this.getData(API_URL)
    this.getLocalData()
  }

  getLocalData(){
    let localList = localStorage.getItem('guardados')
    if(localList){
      let parsedList = JSON.parse(localList)
    this.saved = parsedList
    }
  }

  getData(url) {
    fetch(url).then(d => d.json()).then(resp => {
      resp.results.map(each => {
        this.list.push(each)
      })
      this.next = resp.next
    }).then(data => this.setState({
      data: this.list,
      next: this.next
    }))
  }

  getMoreData() {
    this.getData(this.state.next)
  }

  saveLocal(persona) {
    let condition = true
    for (let i = 0; i < this.saved.length; i++) {
      if (this.saved[i].name === persona.name) {
        condition = false
      }
    }

    if (condition) {
      this.saved.push(persona)
      let newItem = JSON.stringify(this.saved)
      localStorage.setItem('guardados', newItem)
    }

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].url === persona.url) {
        this.list.splice(i, 1)
      }
    }
    this.setState({
      data: this.list
    })
  }

  render() {
    return (

      <div className="m-5 p-5" >
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
                  this.number++ ,
                  <tr key={data.url} >
                    <td>{this.number} </td>
                    <td> {data.name} </td>
                    <td> {genderTranslate(data.gender)} </td>
                    <td> {data.height !== 'unknown' ? data.height + ' cm' : data.height } </td>
                    <td>  {data.mass !== 'unknown' ? data.mass + ' kg' : data.mass } </td>
                    <td> {eyeColorTranslate(data.eye_color)} </td>
                    <td> <button className="btn btn-success" onClick={() => this.saveLocal(data)} >Guardar</button></td>
                  </tr>
                )
              })) : console.log('No entra')
            }

          </tbody>
        </table>
        <div className="text-center" >
          {
            this.state.next !== null ? <button type="button" className="btn btn-primary m-5" onClick={this.getMoreData} id="ver-mas" >Ver más</button> : <button type="button" className="btn btn-primary m-5 disabled" id="ver-mas" >Ver más</button>
          }
        </div>
      </div>

    );
  }
}

export default Personajes;