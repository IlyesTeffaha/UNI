import { Container,Image } from '@themesberg/react-bootstrap'
import React, { useEffect } from 'react'
import image from '../media/verified.png'
import '../pages/css/MultiStepForm.css'
import axios from'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Routes } from '../routes'

function AccountConfirmed() {
    const activationcode=useParams();
    console.log(activationcode.activationcode)
let history =useHistory();
 
//  setInterval(()=>{
//     history.push(Routes.Signin.path)

//  },2000)
    
 setTimeout(() => { history.push(Routes.Signin.path)}, 2000);
     
axios.put(`http://localhost:3001/auth/activateuser/${activationcode.activationcode}`).then((response)=>{

        console.log(response)
}
)

  return (
    <div className='backg'>
       <h1 className='mt-3'>Account verified</h1> 

        <Container className='regcomplete'>

            <Image src={image} />
        </Container>
    </div>
  )
}

export default AccountConfirmed