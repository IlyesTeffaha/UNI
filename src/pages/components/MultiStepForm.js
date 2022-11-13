import React, { useContext, useState } from 'react'
import { BacEcoScore, BacLettreScore, BacMathScore, BacScienceScore, BacSportScore, BacTechScore } from './BacScore';
import CompleteSignup from './CompleteSignup';
import RegistrationCompleted from './RegistrationCompleted';
import '../css/MultiStepForm.css'
import { AuthContext } from '../../ContextApi/AuthContext';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';


function MultiStepForm() {


    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      birthday: "",
      address: "",
      PostalCode: "",
      PhoneNumber: "",
      scorebac: "",
      bacsection:"",
      
    });
  
    const FormTitles = ["Complete Sign Up", "Enter Grades", "Registration Completed"];



console.log(formData.bacsection)



    const PageDisplay = () => {
        if (page === 0) {
          return <CompleteSignup formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
        if(formData.bacsection==="Lettre") {
            return <BacLettreScore formData={formData} setFormData={setFormData} />;
             }else{
                 if (formData.bacsection==="Math") {
                return <BacMathScore formData={formData} setFormData={setFormData} />;
                
                     }else{
                        if (formData.bacsection==="Science") {
                    return <BacScienceScore formData={formData} setFormData={setFormData} />;
                            
                        } else {
                            if (formData.bacsection==="Economie") {
                        return <BacEcoScore formData={formData} setFormData={setFormData} />;
                                
                            } else {
                                if (formData.bacsection==="Technique") {
                            return <BacTechScore formData={formData} setFormData={setFormData} />;
                                    
                                } else {
                                    if (formData.bacsection==="Sport") {
                                return <BacSportScore formData={formData} setFormData={setFormData} />;
                                        
                                    }
                                }
                            }
                        }
                     }
         }
       
       
       
       
       
        } else {
          return <RegistrationCompleted formData={formData} setFormData={setFormData} />;
        }
      };

const {authState}=useContext(AuthContext);
console.log(authState.id)


      const updateuser=()=>{
      
         const data={address:formData.address,birthday:formData.birthday,section:formData.bacsection,PostalCode:formData.PostalCode,PhoneNumber:formData.PhoneNumber,scorebac:formData.scorebac};
   
        axios.put(`http://localhost:3001/auth/update/${authState.id}`,data).then((response)=>{
          if(response.data.error){console.log("error")} 
          else{
          console.log("success") }
            
            
          },
        )
        }  

        let history=useHistory();


  return (
    <div className="App">
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                updateuser()
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }if(page === FormTitles.length -1){
                history.push(Routes.PersonalityTestUi.path)
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Done" : "Next"}
            {/* {page === FormTitles.length  ? history.push(Routes.Settings.path) : ""} */}



          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MultiStepForm