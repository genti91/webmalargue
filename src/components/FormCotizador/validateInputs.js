import { formCotiza } from './formCotiza'

export const validateInputs = (form) => {
  let errors = {}

  formCotiza.forEach((input) => {
    if (input.inputProps.name === 'email' && form.email) {
      if (!form.email.includes('@') || !form.email.includes('.')){
        errors = { ...errors, email: 'Email invalido' }
        return true
      } 
    }
    if (input.inputProps.name === 'tel' && form.tel) {
      if (isNaN(form.tel)) {
        errors = { ...errors, tel: 'Teléfono invalido' }
        return true
      }
    }
  })

  return errors
}

