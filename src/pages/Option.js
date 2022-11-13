import React, { useEffect, useState } from "react";
// import Emoji from "../Layout/Emoji";
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import axios from 'axios'


const Option = (props) => {


  const[answertitle,setAnswertitle]=useState("");
  const[score,setScore]=useState(0);
  const[tag,setTag]=useState("");
  const[tags,setTags]=useState([]);





  useEffect(() => {
    const getTags = async () => {
      const res = await axios.get("http://localhost:3001/all-tags");
      setTags(res.data);
    // console.log(res.data)

    };
    getTags();
    // console.log(tags)
  }, []);
 

  useEffect(()=>{
    // props.onChange(props.id,answertitle,score,tag);
    const handleOptionChange = (e) => {
      props.onOptionChanged(props.id,answertitle,score,tag);
     
    };
      // console.log(isDisabled)
      handleOptionChange()
},[score,answertitle,tag]);
  // const handleOptionChange = (e) => {
  //   props.onOptionChanged(props.id, answertitle,score,"new tag");
  // };
// console.log(score)
  const handleOptionRemove = (e) => {
    props.onDelete(props.id);
  };

  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-12">
          <div className="row option-section">
            {/* <div className="card">
              <label className="option-label">{props.id + 1}</label>
            </div> */}
            {/* <div className="card">
              <input
                className="option-input"
                type="text"
                placeholder="Enter an answer"
                // value={props.answertitle}
                onChange={(e)=>{setAnswertitle(e.target.value)}}
                // onChange={handleOptionChange}
              />
            </div> */}
            <Form.Group className="mb-3" >
              <Form.Label>Answer number {props.id + 1}</Form.Label>
                <InputGroup onChange={(e)=>{setAnswertitle(e.target.value)}}>
                
                <Form.Control placeholder="Enter an answer" required type="text" />
                </InputGroup>
              </Form.Group>
            {/* <select  onChange={(e)=>{setTag(e.target.value)}}>
              <option >tag1</option>
              <option>tag2</option>

            </select> */}
            <Form.Group className="mb-3" >

            <Form.Label>Select Tag</Form.Label>
             <Form.Select onChange={(e)=>setTag(e.target.value)}>
             {tags.map((items , index)=>{
               return(
<option value={items.name+"$"+items.id} key={index}>{items.name} </option>
               )
})}
             </Form.Select>
             </Form.Group>
            {/* <div className="card">
              <input
                className="option-input"
                type="number"
                placeholder="Enter a score for the tag"
                // value={score}
                // onChange={handleOptionChange}
                
                onChange={(e)=>{setScore(e.target.value)}}
                // value={props.score}
               
                // onChange={handleOptionChange}

              />
            </div> */}
            <Form.Group className="mb-3" >
            <Form.Label>Assigned points</Form.Label>

              {/* <Form.Label>Title</Form.Label> */}
                <InputGroup onChange={(e)=>{setScore(e.target.value)}}>
                
                <Form.Control placeholder="Assign score to answer and tag" required type="number" />
                </InputGroup>
              </Form.Group>
            
            <div className="card">
              <button
                className="remove-option-button"
                onClick={handleOptionRemove}
              >
                ⛔️ Remove Answer
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
