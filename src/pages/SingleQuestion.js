
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Col, Row, Card, Form, Button, InputGroup, Container } from '@themesberg/react-bootstrap';
import { Routes } from "../routes";




export const SingleQuestion = () => {


    const[answers,setAnswers]=useState([])
    let {id} = useParams()
    
console.log(id)

    useEffect(()=>{
       

        axios.get(`http://localhost:3001/questions/all-answers-per-question/${id}`).then((response)=>{

            setAnswers(response.data)
           
           
            
        })
    },[id]);



    const[question,setQuestion]=useState()
    const[questionimg,setQuestionimg]=useState()


    useEffect(()=>{
        const data=id
        axios.get(`http://localhost:3001/questions/single-question/${id}`).then((response)=>{
            setQuestion(response.data.title)
            setQuestionimg(response.data.image)
           
           
            
        })
    },[id]);


    console.log(answers)

    // const DeleteQuestion = () => {

    //     const data ={title:state.questions,i:state.questions.length}
    //     axios.post("http://localhost:3001/questions/add-questions",data).then((response)=>{
    //       if(response.data.message){
    //         setErrorexist(true)
        
    //         setErrmsg(response.data.message)
    //     setTimeout(() => { history.push(Routes.PersonalityTest.path)}, 2000);
        
    //     } 
        
          
    //     }
         
    //     )
    //         // console.log(state.questions)
        
        
    //     };


    return(
   
        <Container className="mt-5">
          
    <Card border="light"  className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName" >
              <Form.Label>Question</Form.Label>
                <InputGroup  >
                
                <Form.Control value={question} required type="text" />
                </InputGroup>
              </Form.Group>
            </Col>
            </Row>
           
        <Form.Label>Answers</Form.Label>

            {answers.map((item,key) => (  
        <Col key={key} md={6} className="mb-3">
        <Form.Group>

        <Form.Control value={item.value} required type="text" />

         
    
        </Form.Group>
      </Col>
     
   ))}
   {/* {answers.map((item,key) => (
    <div>{item.value}</div>

))} 
            */}
            <Button variant="warning" className="m-1">Delete Question</Button>
       
            </Form>
            </Card.Body>
            </Card>

            <div><img src={questionimg} /></div>
           
            </Container>
    )
}