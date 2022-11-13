
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
import { Alert } from '@themesberg/react-bootstrap';
import data from '../data/universities-data.json'
import '../pages/css/Tags.scss'
import { Routes } from "../routes";
import { useHistory } from "react-router-dom";

export const AddDiplomes = () => {
  const [title, setTitle] = useState("");
  const [faculty, setFaculty] = useState("");

  const [category, setCategory] = useState("");

  const [tags, setTags] = useState("");



  const [section, setSection] = useState("");
  const [capacite, setCapacite] = useState("");
  const [scorebac, setScorebac] = useState("");

  const [state,setState]=useState(State.getStatesOfCountry("TN"));
const [cities,setCities]=useState([]);
const [chosencity, setChosencity] = useState("");

const [chosenstate,setChosenstate]=useState("");


const [cats, setCats] = useState([]);



  const {authState}=useContext(AuthContext);
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
  const [diplomedata,setDiplomedata]= useState([]);
 

const id=authState.id;
const[categorie,setCategorie]=useState("")

useEffect(() => {
  const getCats = async () => {
    const res = await axios.get("http://localhost:3001/all-categories");
    setCats(res.data);
  };
  getCats();
}, []);



//   useEffect(()=>{
//     axios.get(`http://localhost:3001/getdiplome/${id}`,{headers:{accessToken:localStorage.getItem("accessToken")},
// }).then((response)=>{
//     setDiplomedata(response.data)
       
//         setTitle(response.data.title)
//         setFaculty(response.data.faculty)
//         setCapacite(response.data.capacite)
//         setCategory(response.data.category)
//         setOccupation(response.data.occupation)
//         setTags(response.data.tags)
//         setSection(response.data.section)
//         setState(response.data.state)
//         setCity(response.data.city)
        
//     })
// },[id]);



    // const updateuser=()=>{
      
    //   const data={username,birthday,occupation,PostalCode,gender,email,PhoneNumber,address};
 
    //   axios.put(`http://localhost:3001/auth/update/${authState.id}`,data).then((response)=>{
    //     if(response.data.error){console.log("error")} 
    //     else{
    //     console.log("success") }
          
          
    //     },
    //   )
    //   }  
       
  
    //   const[oldpass,setOldpass]=useState();
    //   const[newpass,setNewpass]=useState();
    //   const[passmsg,setPassmsg]=useState("");

    //   const changepassword = () =>{
  


    //     if(oldpass!=null&&newpass!=null){
    //         if(oldpass===newpass){
    //             return setPassmsg('new pass should be different')
    //         }else{
    
    //     axios.put('http://localhost:3001/auth/changepassword',{
    //         oldpass:oldpass,
    //         newpass:newpass,
    //     },
        
    //     {
    //         headers: {
    //             accessToken: localStorage.getItem("accessToken"),
    //           },
            
    
    //     } 
    //     ).then((response) => {
    //         if (response.data.error) {
    //           return({msg:response.data.error});
    //         }else{
    //             return setPassmsg("password updated successfully")
    //         }
    //       });}
    // }
    
    
      
    // }
    


  const [uni,setUni]=useState("aa$1");
  const[fac,setFac]=useState(data[0])
//   console.log(uni)

  const facs=uni.split("$")
//  console.log(facs[1])
 const[ranguni,setRanguni]=useState(0)

 const [chosentags,setChosentags]=useState([]);
 

//  console.log(data[2])

const facssrang=facs[1]-1

 useEffect(()=>{
 
        setRanguni(facssrang)
        setFac(data[ranguni])
    


},);

// console.log(fac.faculties)

//  setFac(data[])

    
   ///the get cities method require the second parameter to be a string anf for that i transormed the idn[1] value that i sent via even.target into the chosen state then seperated the string using $ sign , this transformation is necessarry because in the first render idn returns undefined which makes the tostring function return a unescapable error we are doing this because we faced a problem when getting the cities by state in real time 
  // console.log(chosenstate)

    const idn=chosenstate.split("$")
    const nn=idn[1]+"";
    const bn=nn.toString();
  

    useEffect(()=>{

      setCities(City.getCitiesOfState("TN",bn))
  },[idn[1]]);


    
    // console.log(chosenstate.split("$"))

    const [errorexist,setErrorexist]=useState(false);
    const [errmsg,setErrmsg]=useState("");
    const[chosenfaculty,setChosenfaculty]=useState("")
    












  const TagsInput = (props) => {
const [isDisabled, setIsDisabled] = useState(false);
const [placeholder, setPlaceholder] = useState("Press enter to add tags" );


const [tags, setTags] = React.useState(props.tags);
const [length, setlength] = useState(tags.length);

	const removeTags = (indexToRemove) => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    setlength(length-1)
	};
	const addTags = (event) => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}

	};
  // console.log(tags.length)
  // console.log(length)



 


  //   useEffect(()=>{

  //     if(length>=3){
  //       console.log("maximum number of tags reached")
    
  //       setIsDisabled(true)
  //       setPlaceholder("Maximum number of tags reached")
  //       }else{
  //         setIsDisabled(false)
  //       setPlaceholder("Press enter to add tags")

  //       }
  //       // console.log(isDisabled)

  // },);

	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className="tag-title">{tag}</span>
						<span className="tag-close-icon" onClick={() => removeTags(index)}  >
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
				placeholder="Press enter to add tags"
        disabled={isDisabled}
			/>
		</div>
	);
};





const selectedTags = (tags) => {
  // console.log(tags)
    setChosentags(tags)  
    
// console.log(chosentags.length)

  



};

// if(chosentags.length>=3){
//   console.log("maximum number of tags reached")
  
//   }

// const i= chosentags.length;
console.log(chosentags[0]+"jjj")

let history = useHistory()

const addDiplome=()=>{
  const data={title:title,capacite:capacite,state:idn[0],city:chosencity,categorie:categorie,university:facs[0],faculty:chosenfaculty,i:chosentags.length};
  const names=[]
  // const data={}

for (let index = 0; index < chosentags.length; index++) {
  // names[i]=chosentags[i]
// name=names[i]
  // data.push(name[i])
  // const data = Object.assign({}, olddata, {name: chosentags[i]})

  const namex="name"+`${index}`

const tagsobject={
  [namex]:chosentags[index]

  
}
  const datas = Object.assign(data, tagsobject);

  // const data = Object.assign({}, olddata, {index: chosentags[i]})

  
}
console.log(data)


  axios.post("http://localhost:3001/add-diplome",data).then((response)=>{
    if(response.data.message){
      setErrorexist(true)

      setErrmsg(response.data.message)
setTimeout(() => { history.push(Routes.DiplomesList.path)}, 2000);

  } 
 
    
  }
   
  )
};


// console.log(chosentags[1])



  return (


         

    <Card border="light"  className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName" >
              <Form.Label>Title</Form.Label>
                <InputGroup  onChange={(e)=>{setTitle(e.target.value)}}>
                
                <Form.Control placeholder="Enter Title" required type="text" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Capacity</Form.Label>
                <InputGroup  onChange={(e)=>{setCapacite(e.target.value)}}>
                <Form.Control  required type="number"   />
                </InputGroup>
              </Form.Group>
            </Col>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="lastName"  >
                <Form.Label>Faculty</Form.Label>
                <InputGroup  onChange={(e)=>{setFaculty(e.target.value)}}>
                <Form.Control  required type="text"   />
                </InputGroup>
              </Form.Group>
            </Col> */}
          </Row>
          <Row className="align-items-center">
            {/* <Col md={6} className="mb-3">
              <Form.Group id="birthday" >
                <Form.Label>Category</Form.Label>
                <InputGroup  onChange={(e)=>{setCategory(e.target.value)}}>
                <Form.Control  required type="text"   />
                </InputGroup>
              </Form.Group>
            </Col> */}
            {/* <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Capacity</Form.Label>
                <InputGroup  onChange={(e)=>{setCapacite(e.target.value)}}>
                <Form.Control  required type="text"   />
                </InputGroup>
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Col className="mb-3">
            <Form.Group id="zip" >
              
              <Form.Label>Select Categorie</Form.Label>
             <Form.Select onChange={(e)=>setCategorie(e.target.value)}>
             {cats.map((items , index)=>{
               return(
<option value={items.title} key={index}>{items.title} </option>
               )
})}
             </Form.Select>
           </Form.Group>    
            </Col>
            <Col className="mb-3">
            
            <Form.Label>Choose tags</Form.Label>
            {/* <label className="mb-3">Choose tags</label> */}
			<TagsInput selectedTags={selectedTags}  tags={[...chosentags]}   />
		
            </Col>
           
          </Row>

       
          <Row>
            
            <Col  className="mb-3">
              

              <Form.Group className="mb-2">
                <Form.Label>Select University</Form.Label>
                <Form.Select onChange={(e)=>setUni(e.target.value)} >
                {data.map((items , index)=>{
                  return(
  <option value={items.universityname+"$"+items.universitid}
   key={index}>{items.universityname} </option>
                  )
})}
                </Form.Select>


                
              </Form.Group>
            </Col>

           <Col>
            <Form.Group className="mb-2"> 
                <Form.Label>Select Faculty</Form.Label>
                <Form.Select onChange={(e)=>setChosenfaculty(e.target.value)} >
                {fac.faculties.map((items , index)=>{
                  return(
  <option value={[items.facultyname]} key={index}>{items.facultyname} </option>
                  )
})}
                </Form.Select>


                
              </Form.Group> 
           </Col>
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
          <Row>
          {/* <div className="mx-3 my-5">
            <label className="mb-3">Choose tags</label>
			<TagsInput selectedTags={selectedTags}  tags={[...chosentags]}   />
		</div> */}
          </Row>
      
          <div className="mt-3 mb-3">
            <Button variant="primary" onClick={addDiplome}>Add Diplome </Button>
          </div>
          {errorexist?(
                        <>
                                            <Alert variant="success"   >
    {errmsg}
  </Alert>
                        </>
                      ):(
                        <>
                        </>
                      )}
         
        </Form>
      
      </Card.Body>
 
      
      <Form.Group id="address" >
                <Form.Label>{scorebac}</Form.Label>
                
                
              </Form.Group>
      


         

      
    </Card>

   
  );
// })}

// </div>)

};
