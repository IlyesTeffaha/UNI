
import React, { useContext, useEffect, useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { AuthContext } from "../ContextApi/AuthContext";
import axios from 'axios'
import AccordionComponent from "./AccordionComponent";
import {  Country, State, City  } from "country-state-city";

export const GeneralInfoForm = () => {
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");

  const [occupation, setOccupation] = useState("");

  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");

  const [PhoneNumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [PostalCode, setPostalcode] = useState("");
  const [scorebac, setScorebac] = useState("");

const [state,setState]=useState(State.getStatesOfCountry("TN"));
const [cities,setCities]=useState([]);
const [chosenstate,setChosenstate]=useState("");
const[image,setImage]=useState("");




  const {authState}=useContext(AuthContext);
  console.log(authState)
  // console.log(state[4])
  // console.log(City.getCitiesOfState("TN","11"))

  // console.log(authState.id)

  // setId(authState.id);

  // const updateuser=()=>{
  // const data={email:email,username:username,birthday:birthday,address:address,PostalCode:PostalCode,PhoneNumber:PhoneNumber,gender:gender,occupation:occupation}; 

  //   axios.put(`http://localhost:3001/auth/update/${authState.id}`,data).then((response)=>{
  //     if(response.data.error){ console.log("error")} 
  //     else{

  //   )};
  const [userdata,setUserdata]= useState([]);
 

const id=authState.id;






  useEffect(()=>{
    axios.get(`http://localhost:3001/auth/getuser/${id}`,{headers:{accessToken:localStorage.getItem("accessToken")},
}).then((response)=>{
        setUserdata(response.data)
       
        setAddress(response.data.address)
        setBirthday(response.data.birthday)
        setEmail(response.data.email)
        setGender(response.data.gender)
        setOccupation(response.data.occupation)
        setPhonenumber(response.data.PhoneNumber)
        setPostalcode(response.data.PostalCode)
        setUsername(response.data.username)
        setScorebac(response.data.scorebac)
        setImage(response.data.image)
        
    })
},[id]);

console.log(authState)

const [chosencity, setChosencity] = useState("");



    const updateuser=()=>{
      
      const data={username,birthday,occupation,PostalCode,gender,email,PhoneNumber,address,image:authState.image,city:chosencity,state:idn[0]};
 
      axios.put(`http://localhost:3001/auth/update/${authState.id}`,data).then((response)=>{
        if(response.data.error){console.log("error")} 
        else{
        console.log("success") }
          
          
        },
      )
      }  
       
      // const genderSelect=()=>{
      //   if(gender==="Male"){
      //     return 2;
      
      //   }else{
      //     if(gender==="Female")
      //     return 1;
      //   }
      // }

      const[oldpass,setOldpass]=useState();
      const[newpass,setNewpass]=useState();
      const[passmsg,setPassmsg]=useState("");

      const changepassword = () =>{
  


        if(oldpass!=null&&newpass!=null){
            if(oldpass===newpass){
                return setPassmsg('new pass should be different')
            }else{
    
        axios.put('http://localhost:3001/auth/changepassword',{
            oldpass:oldpass,
            newpass:newpass,
        },
        
        {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            
    
        } 
        ).then((response) => {
            if (response.data.error) {
              return({msg:response.data.error});
            }else{
                return setPassmsg("password updated successfully")
            }
          });}
    }
    
    
      
    }
    


  
    
   ///the get cities method require the second parameter to be a string anf for that i transormed the idn[1] value that i sent via even.target into the chosen state then seperated the string using $ sign , this transformation is necessarry because in the first render idn returns undefined which makes the tostring function return a unescapable error we are doing this because we faced a problem when getting the cities by state in real time 

    const idn=chosenstate.split("$")
    const nn=idn[1]+"";
    const bn=nn.toString();
    console.log(bn)

    useEffect(()=>{

      setCities(City.getCitiesOfState("TN",bn))
  },[idn[1]]);

console.log(cities)
    
    // console.log(chosenstate.split("$"))


  return (


         

    <Card border="light"  className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName" >
              <Form.Label>Username</Form.Label>
                <InputGroup  onChange={(e)=>{setUsername(e.target.value)}}>
                
                <Form.Control value={username} required type="text" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName"  >
                <Form.Label>Occupation</Form.Label>
                <InputGroup  onChange={(e)=>{setOccupation(e.target.value)}}>
                <Form.Control value={occupation} required type="text"   />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday" >
                <Form.Label>Birthday</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup onChange={(e)=>{setBirthday(e.target.value)}}>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={new Date(birthday)}
                        
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0" placeholder={gender}>
                  <option value="0" >{gender}</option>
                  <option value={gender==="Female"} onChange={(e)=>{setGender(e.target.value)}}>Female</option>
                  <option value={gender==="Male"} onChange={(e)=>{setGender(e.target.value)}}>Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal" >
                <Form.Label>Email</Form.Label>
                <InputGroup onChange={(e)=>{setEmail(e.target.value)}}>
                <Form.Control required type="email"  value={email} />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone" >
                <Form.Label>Phone</Form.Label>
                <InputGroup onChange={(e)=>{setPhonenumber(e.target.value)}}>
                <Form.Control required type="number" value={PhoneNumber} />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address" >
                <Form.Label>Address</Form.Label>
                <InputGroup onChange={(e)=>{setAddress(e.target.value)}}>
                <Form.Control required type="text" value={address} />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm={9} className="mb-3">
              <Form.Group id="address" >
                <Form.Label>{scorebac}</Form.Label>
                
                
              </Form.Group>
            </Col>

            {/* <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            {/* <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col> */}
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select onChange={(e)=>setChosenstate(e.target.value)}>
                {state.map((items , index)=>{
                  return(
  <option value={items.name+"$"+items.isoCode} key={index}>{items.name} </option>
                  )
})}
                </Form.Select>


                
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group id="zip" >
                {/* <Form.Label>ZIP</Form.Label>
                <InputGroup onChange={(e)=>{setPostalcode(e.target.value)}}>
                <Form.Control required type="tel" value={PostalCode} />
                </InputGroup> */}
                <Form.Label>Select City</Form.Label>
                <Form.Select onChange={(e)=>setChosencity(e.target.value)}>
                {cities.map((items , index)=>{
                  return(
  <option value={items.name} key={index}>{items.name} </option>
                  )
})}
                </Form.Select>
              </Form.Group>
            </Col>
         
           
          </Row>
          <Row className="mb-5">
              <Col sm={4}>
              <Form.Label>ZIP</Form.Label>
                <InputGroup  onChange={(e)=>{setPostalcode(e.target.value)}}>
                <Form.Control sm={4} required type="tel" value={PostalCode} />
                </InputGroup>
              </Col>
            </Row>
          <div className="mt-3">
            <Button variant="primary" onClick={updateuser}>Save All</Button>
          </div>
         
        </Form>
        <h5 className="my-4">Change Your Password</h5>
      <Row>
        <Col sm={9} className="mb-3">
          <Form.Group id="address">
            <Form.Label>Your old password</Form.Label>
            <InputGroup  onChange={(event) => {
          setOldpass(event.target.value)}}>
            <Form.Control required type="text"  />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col sm={9} className="mb-3">
          <Form.Group id="address">
            <Form.Label>Your new password</Form.Label>
            <InputGroup  onChange={(event) => {
          setNewpass(event.target.value)}}  >
            <Form.Control required type="text"  />
            </InputGroup>
            <span></span>
          </Form.Group>
        </Col>
       
      </Row>
      <div className="mt-3">
        <Button variant="primary" onClick={changepassword}>Change Password</Button>
      </div>
      </Card.Body>
 
      
  
      
    </Card>

   
  );
// })}

// </div>)

};
