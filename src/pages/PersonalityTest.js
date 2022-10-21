import React, { Component, useEffect, useState } from "react";
// import NavBar from "../Layout/NavBar";
import Question from "./Question";
// import Emoji from "../Layout/Emoji";
// import QuizService from "../../service/QuizService";
import { Redirect } from "react-router-dom";
import "../pages/css/quiz.css"
import axios from 'axios'
// import {  Nav, Card, Image, Table, ProgressBar, Pagination } from '@themesberg/react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Badge, Card } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@themesberg/react-bootstrap';



export const PersonalityTest = () => {


const[questions,setQuestions]=useState([])

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

      const [answerdata,setAnswerdata]= useState([]);



      // let {id} = useParams()
      const QuestionId=2
      
      useEffect(()=>{
  
          axios.get("http://localhost:3001/questions/all-answers-per-question").then((response)=>{
        setAnswerdata(response.data)
          })
        
        
      },[]);
      // console.log(answerdata)

      
      
      // function getanswers(id) {
      //   for (let index = 0; index < answerdata.length; index++) {
      //     if (answerdata[index].QuestionId==id) {
      //       console.log(answerdata[index])
      //     }
          
      //   }
      // }
      
     
// return(
//     <div>
//           {questions.map((value, key) => {
//  return (
//     <div>{value.title}</div>
//  )

//           })}

        
//         hoi
//     </div>
// )
// return(

//     <div>
//         hello
//     </div>
// )

// return (
//     <Table className="table">
//       <thead>
//         <tr>
//           <th>Title</th>
//           {/* <th>Genre</th>
//           <th>Stock</th>
//           <th>Rate</th> */}
//         </tr>
//       </thead>
//       <thead>
//         <tr>
//           <th>Answers</th>
//           {/* <th>Genre</th>
//           <th>Stock</th>
//           <th>Rate</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {questions.map((value,key) => (
//           <tr key={key}>
//             <td>{value.title}
//             </td>
//             {/* <td>{movie.genre}</td>
//             <td>{movie.numberInStock}</td>
//             <td>{movie.dailyRentalRate}</td> */}
//           </tr>
//         ))}
//       </tbody>
//       <tbody>
//         {questions.map((value,key) => (
//           <tr key={key}>
//             <td>{value.id}
//             </td>
//             {/* <td>{movie.genre}</td>
//             <td>{movie.numberInStock}</td>
//             <td>{movie.dailyRentalRate}</td> */}
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );










const [istrue,setIstrue]=useState(false)
return(
  <div>
<Table striped bordered hover variant="dark" className="mt-5">
  <thead >
  <label>CURRENT QUIZ</label>
    <tr >
      <th className="border-0 ">Questions</th>
  
      <th className="border-0">Answers</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="mt-5">
{questions.map((value,key) => (   

    <tr key={key}>
      <td >
      {/* <Badge bg="light" text="dark" >{value.title}</Badge> */} 
          <Card.Link style={{ color:'white'}} as={Link}  to={`/single-question/${value.id}`} className="fw-normal">
          {value.title}
          </Card.Link>
      </td>

 


{value.Answers.map((item,key) => (  
       
        <div>
        <td  className="border-0 fw-bold">{item.value}</td>
        </div>
         ))}  

   
      {/* <td className="border-0 text-danger">
        <span className="fw-bold">5</span>
      </td> */}
        
      {/* <Button href={`/single-question/${value.id}`} variant="info" size="sm" className="me-1">View More</Button> */}
      

      <td>
        <a href={`/single-question/${value.id}`}>
      <Badge bg="light" text="dark" className="badge-lg">View More</Badge>
      </a>
      </td>
    
    </tr>
    ))}

    
    </tbody>
    </Table>




</div>
)
}