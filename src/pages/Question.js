import React, { useEffect, useState } from "react";
// import Emoji from "../Layout/Emoji";
import Option from "./Option";
import './css/TestBuilderQuestion.css'

const Question = (props) => {


  const[questionimage,setQuestionimage]=useState({url:'',public_id:''})


const[loaded,setLoaded]=useState(false)

function handleopenwidget(){

  var myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'ilyesoo7', 
    uploadPreset: 'xyplyxtc'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 

        setQuestionimage({url:result.info.url,public_id:result.info.public_id})
        setImage(result.info.url)

      }
    }
  )
  myWidget.open();
}

function imgbtnclicked(){
  setLoaded(true)
  handleopenwidget()
}

const[image,setImage]=useState('');

useEffect(()=>{
  // props.onChange(props.id,answertitle,score,tag);
  const handleimagechange = () => {
    props.onImageChange(props.question.id,image);
  };
    // console.log(isDisabled)
    handleimagechange()

},[image]);






// console.log(image.length+"hhh")
// console.log(questionimage)

const[test,setTest]=useState()

  const handleTitleChange = (e) => {
    props.onTitleChange(props.question.id, e.target.value);
  };


 
  const handleOptionChange = (opt_id, answertitle,score,tag) => {
    props.onOptionChange(props.question.id, opt_id,answertitle,score,tag);
    // setTest(value)
  };
// console.log("hello "+test)
  const handleOptionRemove = (opt_id) => {
    props.onOptionRemove(props.question.id, opt_id);
  };

  const handleSelectAnswer = (e) => {
    props.onSelectAnswer(props.question.id, parseInt(e.target.value));
  };

  // console.log(loaded)


  const { question } = props;
  return (
    <div className="col-sm-8 offset-sm-2 section mt-4">
      <div className="row">
        <div className="col-sm-10">
          <input
            type="text"
            className="profile-name input-question-title"
            placeholder="Question ?"
            value={question.title}
            onChange={handleTitleChange}
          />
             {/* <input
            type="text"
            
            placeholder="image"
            value={question.image}
            onChange={handleimagechange}
          /> */}
          <div className="row pt-3">
            {question.options.map((option) => (
              <Option
                key={option.id}
                id={option.id}
                answertitle={option.answertitle}
                score={option.score}
                tag={option.tag}

                onOptionChanged={handleOptionChange}
                onDelete={handleOptionRemove}
              />
            ))}
          </div>
          <div className="row pt-3">
            {/* <div className="col-sm-12">
              <label className="option-label">[Answer]</label>
              <select
                defaultValue=""
                className="option-dropdown"
                style={{
                  width: "max-content",
                  marginTop: ".2em",
                  marginLeft: ".5em",
                  color: "var(--quizden-bg-dark)",
                }}
                onChange={handleSelectAnswer}
              >
                <option value="" disabled hidden>
                  Select Answer
                </option>
                {question.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.id + 1 + ": " + option.value}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
        </div>
        <div className="col-sm-2">
          <button id="upload-widget" className="cloudinary-button" onClick={()=>imgbtnclicked()} >
          Add a picture
          </button>
          <button
            className="remove-button"
            onClick={() => props.onRemove(question.id)}
          >
           🗑️ Remove Question
          </button>
          <button
            className="add-button"
            onClick={() => props.onAddOption(question.id)}
          >
           ✍️ Add Answers
          </button>
        </div>
        <div className="image-preview">
          <img  src={questionimage.url} style={{ display: loaded ? 'inline-block' : 'none' }}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
