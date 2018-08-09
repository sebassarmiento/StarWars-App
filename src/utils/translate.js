

function genderTranslate(gender){
    switch (gender) {
      case 'male':
        return 'Masculino'
        break
      case 'female':
        return 'Femenino'
        break
      case 'n/a':
        return 'No aplica'
        break
      default:
        return 'No se'
        break
    }
  }

  function eyeColorTranslate (eyeColor) {
    switch (eyeColor) {
      case 'blue':
        return 'Azul'
        break
      case 'yellow':
        return 'Amarillo'
        break
      case 'red':
        return 'Rojo'
        break
      case 'brown':
        return 'Marron'  
      default:
        return eyeColor
        break
    }
  }

  export { genderTranslate, eyeColorTranslate }