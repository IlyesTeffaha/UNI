import { Container, Image } from '@themesberg/react-bootstrap'
import React from 'react'
import image from '../../media/registrationcomplete.png'
import '../css/MultiStepForm.css'

function RegistrationCompleted({ formData, setFormData }) {
  return (
    <div><Container className='regcomplete'><Image fluid src={image} /></Container></div>
  )
}

export default RegistrationCompleted