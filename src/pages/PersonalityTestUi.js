import React, { Component, useContext, useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import '../pages/css/PersonalityTestUi.css'
import { Badge, Button, Card } from '@themesberg/react-bootstrap';
import img from '../media/tenor.gif'
import img1 from '../media/saitama.png'
import img2 from '../media/another.gif'
import video from '../media/quizui.mp4'
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";
import { AuthContext } from "../ContextApi/AuthContext";



function PersonalityTestUi() {









///1st step :get all questions and answers

    const[questions,setQuestions]=useState([{title:"",id:"",Answers:[{value:"",id:""}]}])

    useEffect(() => {
        const getQuestions = async () => {
          const res = await axios.get("http://localhost:3001/questions/all-questions");
          setQuestions(res.data);
        // console.log(res.data)
    
        };
        getQuestions();
        // console.log(tags)
      }, []);
      console.log(questions)









      //2nd step : store selected answers inside answers in the form of object with different attributes , the attributes being the questions ids and the value is the selected answer then we use object.values to create an array of the chosen answers ids

    const [answers,setAnswers]=useState({})
    console.log(answers)
    const array=Object.values(answers)
    // console.log(array)



    //3rd step we get all questions each with its respective tag in order to filter them all and match them with the chosen answers via the ids , the reason why we didn't just get the tags with the already chosen answers is that you can't request 3 seperate tables and filter them according to chosen answers simultaneously

    const[reponses,setReponses]=useState([])

    useEffect(() => {
        const getAnswers = async () => {
          const res = await axios.get("http://localhost:3001/questions/all-answers");
          setReponses(res.data);
        // console.log(res.data)
    
        };
        getAnswers();
        // console.log(tags)
      }, []);
//
    let result = reponses.filter(function(item) {
        return array.indexOf(item.id) != -1;
      });

    //   console.log(result)



  ///4th step: we created a new array in which we will match each tag withe score stored in the chosen answer
const newarray=[{}]
const [choice,setChoice]=useState()
for (let index = 0; index < result.length; index++) {
    

    // if (result[index].Tag.name==result[index+1].Tag.name) {
    //  console.log()   
    // }
    // console.log(result[index].score)
    newarray.push({tagname:result[index].Tag.name,
        score:result[index].score})

    // // console.log(newarray)

    // const count = {};
    // newarray.forEach(element => {
    //     count[element] = (count[element] || 0) + 1;

    //   });

  
    // console.log(count+"lkkk");



    
}




///5th step we accumulate the scores that their respective tag is mentioned more than once and then sort them according to the score


  const[table,setTable]=useState([])

// console.log(newarray[1..newarray.length])
let count = {};

newarray.forEach(element => {
    count[element.tagname] = (count[element.tagname] || 0) + 1+element.score-1
    ;
 
  });

  console.log(count+"count")
  const keys=Object.entries(count).sort(([, v1], [, v2]) => v2 - v1)
  .reduce((obj, [k, v]) => ({
    ...obj,
    [k]: v
  }), {})
//   const filtered=Object.values(count).sort(function(a, b) {
//     return a - b;
//   });


//keys is an object that has all the chosen and repeated tags as attributes sorted by accumulated score 
const finaltable=Object.keys(keys)
  

//finaltable has only the sorted tags inside an array
  console.log(keys)

const {authState}=useContext(AuthContext)

  const userid=authState.id

console.log(userid)


 const[filtereddiplomes,setFiltereddiplomes]=useState([]);
  const SendSortedTags = async () => {
    const data={finaltable,userlog:answers,userid}
    const res=  await axios.post("http://localhost:3001/get-filtered-diplomes",data);
    setFiltereddiplomes(res.data)
    console.log(res.data)
  
console.log(finaltable)
  };

const [qtindex,setQtindex]=useState(0);


const qts=questions;

let history=useHistory()

const SkipTest=()=>{
history.push(Routes.Settings.path)
}



console.log(answers)

  return (
    <div className="contaiiner-xl" >

    <video loop muted autoPlay playsInline className="backgroundvideo">
        <source src={video} type="video/mp4"/>
       
    </video>


{/* <img className="qtimage" src={img2} alt=""/> */}
        
{/* <img className="qtimage" src={img1} alt=""/> */}
<div className="Container">
   
      
   
    <img className="qtimage" src={questions[qtindex].image}/>
  
   
    {/* {questions.map((value,key) => (    */}

<div key={qtindex} >
  <div className="questions" >
  {/* <Badge bg="light" text="dark" >{value.title}</Badge> */} 
      <Card   className="fw-normal">
      {questions[qtindex].title}
      </Card>
  </div>


<div className="answersflex">

{questions[qtindex].Answers.map((item) => (  
   
   <label className="answers" style={{ backgroundColor:answers[questions[qtindex].id]===item.id ?  'green':'black' }} >
   <input
  
    checked={answers[questions[qtindex].id]===item.id}
     type="checkbox"
     name={questions[qtindex].id}
   onChange={()=>{setAnswers((answer)=>({
    ...answer,[questions[qtindex].id]:item.id
   }))}}
   
   
   />
     &nbsp;&nbsp;{item.value}

   </label>
     ))} 

</div>


  {/* <td className="border-0 text-danger">
    <span className="fw-bold">5</span>
  </td> */}
    
  {/* <Button href={`/single-question/${value.id}`} variant="info" size="sm" className="me-1">View More</Button> */}
  

  

</div>
 {/* ))} */}
  
 <div className="prevnext" style={{ justifyContent:qtindex===0 ?  'flex-end':'space-between' }}>

 
  <Button onClick={()=>setQtindex(qtindex-1)} disabled={qtindex===0} style={{ display: qtindex===0 ? 'none' : 'inline-block' }}>
    previous
  </Button>
  <Button   onClick={() => {
              if (qtindex === 3) {
                SendSortedTags()
                
              } else {
                setQtindex(qtindex+1)
              }
              // if(page === FormTitles.length -1){
              //   history.push(Routes.Settings.path)
              // }
            }}> 
  {qtindex === 3 ? "Submit" : "Next"}
  </Button>
  </div>
  <div className="submitbtn">
  <a onClick={SkipTest}>Skip Test</a>
  </div>
 
  </div>
{/* <img className="qtimage" src={img} alt=""/> */}
    </div>
    
  )
}

export default PersonalityTestUi