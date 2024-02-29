import React from 'react'

const Form = () => {

    const [, set] = useState({
        nombre: '',
        obraSocial: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    console.log(paciente)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (paciente.nombre.length > 3 && paciente.obraSocial.length > 2) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

  return (
    <div>Form</div>
  )
}

export default Form