
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt ,faUser,faMale,faFemale} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../css/Signup.css'
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import axios from "axios"
import { Alert } from '@themesberg/react-bootstrap';



export default () => {
  let history= useHistory();

const [email,setEmail]= useState("");
const [password,setPassword]=useState("");
const [username,setUsername]=useState("");
const [birthday,setBirthday]=useState("");
const [address,setAddress]=useState("");
const [PostalCode,setPostalCode]=useState("");
const [PhoneNumber,setPhoneNumber]=useState("");
const [gender,setGender]=useState("");
const [errorexist,setErrorexist]=useState(false);
const [sucessMsg,setSucessMsg]=useState("a");
const [errmsg,setErrmsg]=useState("");

const[sucessexist,setSuccessexist]=useState(false)



const signup=()=>{
  const data={email:email,password:password,username:username,gender:gender}; 
  axios.post("http://localhost:3001/auth",data).then((response)=>{
    if(response.data.message){
      setErrorexist(true)

      setErrmsg(response.data.message)
      console.log(response.data.message)

   
    }else if(response.data.success){
      setSucessMsg(response.data.success)
      
        setSuccessexist(true)
     
      console.log(response.data.success)
    console.log(response.data.success.length)




    } 


    // else{
    //   history.push(Routes.Signin.path)
    //   // localStorage.setItem("accessToken",response.data.token)
    //   //set authstate to true to make login and registration dissapear
    //   // setAuthState({username:response.data.username,id:response.data.id,status:true,});
    //   // if (response.data.role==="admin") {
        
    //   //   Navigate('/adminhome');
    //   //   window.location.reload()
    //   // } else {
        
    //   //   Navigate('/home');
    //   //   window.location.reload()

        
    //   // }
      
    // }
    
  }
   
  )
};


// console.log(sucessMsg.length)
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup onChange={(e)=>{setEmail(e.target.value)}}>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup onChange={(e)=>{setPassword(e.target.value)}}>
                      <InputGroup.Text  >
                        <FontAwesomeIcon icon={faUnlockAlt} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>


                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Username</Form.Label>
                    <InputGroup onChange={(e)=>{setUsername(e.target.value)}}>
                      <InputGroup.Text  >
                      <FontAwesomeIcon icon={faUser} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="Enter a username" />
                    </InputGroup>
                  </Form.Group>


                  
                  {/* <Form.Group id="birthday" className="mb-4">
                    <Form.Label>Birthday</Form.Label>
                    <InputGroup onChange={(e)=>{setBirthday(e.target.value)}}>
                      <InputGroup.Text  >
                      <FontAwesomeIcon icon={faUser} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="date"  />
                    </InputGroup>
                  </Form.Group> */}


                  
                  {/* <Form.Group id="address" className="mb-4">
                    <Form.Label>Address</Form.Label>
                    <InputGroup onChange={(e)=>{setAddress(e.target.value)}}>
                      <InputGroup.Text  >
                      <FontAwesomeIcon icon={faUser} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="Enter your address" />
                    </InputGroup>
                  </Form.Group> */}

{/* <div className="form-row">
                  <div className="form-group col-md-5">
                  <Form.Group id="postalcode" className="mb-4">
                    <Form.Label>Postal Code</Form.Label>
                    <InputGroup onChange={(e)=>{setPostalCode(e.target.value)}}>
                      <InputGroup.Text  >
                      <FontAwesomeIcon icon={faUser} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="number" placeholder="Enter your 4 digits postal code" />
                    </InputGroup>
                  </Form.Group></div>


                  <div className="form-group col">
                  <Form.Group id="phonenumber" className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup onChange={(e)=>{setPhoneNumber(e.target.value)}}>
                      <InputGroup.Text  >
                      <FontAwesomeIcon icon={faUser} />
                        
                      </InputGroup.Text>
                      <Form.Control required type="number" placeholder="Enter your phone number" />
                    </InputGroup>
                  </Form.Group></div>
                  </div> */}

                  
                 
                    <label className=" mb-3" for='gender'>Gender</label>
                    <div role="group" className="gender mb-5" id='gender' aria-labelledby="my-radio-group" >
            <div>
            <label>
              <input type="radio" name="gender" value="Male" id='gender' onChange={(e)=>{setGender(e.target.value)}} />
              <FontAwesomeIcon icon={faMale} />
             
              <br/>
              Male

            </label>
            </div>


            <div>
            <label>
              <input type="radio" name="gender" value="Female" id='gender' onChange={(e)=>{setGender(e.target.value)}}/>
              <FontAwesomeIcon icon={faFemale} />
              <br/>
              Female


             

            </label>
            </div>
            </div>
                        
                     
                      
                    
                  
                  {/* <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group> */}
                  {/* <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck> */}
       {sucessexist?(
                        <>
                                            <Alert variant="success"   >
    {sucessMsg}
  </Alert>
    




                        </>
                      ):(
                        <>
                        </>
                      )}
       {errorexist&&errmsg?(
                        <>
                                            <Alert variant="danger"   >
    {errmsg}
  </Alert>
    




                        </>
                      ):(
                        <>
                        </>
                      )}




 
                  <Button variant="primary" onClick={signup} className="w-100 mt-3">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
