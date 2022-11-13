import React, { Component, useEffect, useState } from "react";
// import NavBar from "../Layout/NavBar";
import Question from "./Question";
// import Emoji from "../Layout/Emoji";
// import QuizService from "../../service/QuizService";
import { Redirect, useHistory } from "react-router-dom";
import "../pages/css/quiz.css"
import axios from 'axios'
import { Routes } from "../routes";
import { Alert } from '@themesberg/react-bootstrap';


export const QuizBuilder = () => {

    const [state,setState]=useState(
        {
          
            questions: [
                
            ],

        }
    )




   const handleResetAll = (e) => {
        setState({  questions: [] });
      };


    
    //  const handleTypeChange = (e) => {
    //     setState({ type: e.target.value });
    //   };

     const handleAddQuestion = (e) => {
        //how the hell does this work !!!!!
        const { questions } = state;
        const id =
          questions.length === 0 ? 0 : questions[questions.length - 1].id + 1;
        const title = "";
        const options = [];
        const answer = Number(0);
        const image="";
        questions.push({ id, title, options, answer ,image});
        setState({ questions: questions });
      };
    
     const copyQuestion = (question) => {
        const { id, title, answer,image } = question;
        const options = [...question.options];
        return { id, title, answer, options,image };
      };


      
  // question form control
  const handleQuestionTitleChange = (id, value) => {
    const { questions } = state;
    const index = questions.findIndex((question) => question.id === id);
    questions[index].title = value;
    setState({ questions: questions });
  };

  const handleimagechange =(id,image)=>{
    const {questions}=state;
    const index = questions.findIndex((question) => question.id === id);
    questions[index].image = image;
    setState({ questions: questions });
  }

  const handleQuestionAnswerChange = (id, value) => {};

  const handleRemoveQuestion = (id) => {
    const newQuestions = state.questions.filter(
      (question) => question.id !== id
    );
    setState({ questions: [...newQuestions] });
  };





  const handleQuestionAddOption = (q_id) => {
    const { questions } = state;
    const index = questions.findIndex((question) => question.id === q_id);
    const question = { ...questions[index] };
    const { options } = question;
    const opt_id =
      options.length === 0 ? 0 : options[options.length - 1].id + 1;
    const option = { id: opt_id,
    answertitle:"",
score:0,
tag:""};
    options.push(option);
    question.options = [...options];
    questions[index] = { ...question };
    setState({ questions: questions });
  };
 

  const handleOptionChange = (q_id, opt_id,answertitle,score,tag) => {
    // console.log(q_id, opt_id, value);
    const { questions } = state;
    const index = questions.findIndex((question) => question.id === q_id);
    const question = { ...questions[index] };
    const { options } = question;
    const option_index = options.findIndex((option) => option.id === opt_id);
    // options[option_index].value = value;
    options[option_index].answertitle = answertitle;
    options[option_index].score = score;
    options[option_index].tag = tag;

    question.options = [...options];
    questions[index] = { ...question };
    setState({ questions: questions });
  };

  const handleRemoveOption = (q_id, opt_id) => {
    // console.log("Question", q_id, "Option", opt_id);
    const { questions } = state;
    const index = questions.findIndex((question) => question.id === q_id);
    const question = { ...questions[index] };
    const { options } = question;
    // const newOptions = options.filter((option) => option.id !== opt_id);
    const newOptions = [];
    let counter = 0;
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      if (option.id === opt_id) continue;
      option.id = counter++;
      newOptions.push(option);
    }
    question.options = [...newOptions];
    questions[index] = { ...question };
    setState({ questions: questions });
  };

  const handleSelectAnswer = (q_id, opt_id) => {
    const { questions } = state;
    const index = questions.findIndex((question) => question.id === q_id);
    const question = { ...questions[index] };
    question.answer = opt_id;
    questions[index] = { ...question };
    setState({ questions: questions });
  };


  let history = useHistory()


  const [errorexist,setErrorexist]=useState(false);
  const [errmsg,setErrmsg]=useState("");

  const[nbc,setNbc]=useState(100)
  const[nbc1,setNbc1]=useState(100)

  for (let index = 0; index < state.questions.length; index++) {
    for (let i = 0; i < state.questions[index].options.length; i++) {
      // setNbc1(100-state.questions[index].options[i].score)
      console.log(state.questions[index].options[i])

      
    }
 

  }
  

  const handleSubmitQuiz = () => {

const data ={title:state.questions,i:state.questions.length}
axios.post("http://localhost:3001/questions/add-questions",data).then((response)=>{
  if(response.data.message){
    setErrorexist(true)

    setErrmsg(response.data.message)
setTimeout(() => { history.push(Routes.PersonalityTest.path)}, 2000);

} 

  
}
 
)
    console.log(data)


};



//   console.log(state.questions[0])
//   console.log("it is this long "+state.questions.length)

//   console.log(state.questions[0].options)


//   console.log(state.questions[0].title)
const [qtstate,setQtstate]=useState([])

useEffect(()=>{
    // state.questions.map((qt)=>{
    //     // setQtstate(qt.options)
    //     console.log(qt)
    // })
    console.log(state.questions)

})
  return (
    <React.Fragment>
  
      <div className="container-fluid maincontainer">
    
        <div className="row mt-5">
          {state.questions.map((question) => (
            
            <Question
              key={question.id}
              question={question}
              onTitleChange={handleQuestionTitleChange}
              onImageChange={handleimagechange}
              onRemove={handleRemoveQuestion}
              onAddOption={handleQuestionAddOption}
              onOptionChange={handleOptionChange}
              onOptionRemove={handleRemoveOption}
              onSelectAnswer={handleSelectAnswer}
            />
          ))
          }
        </div>

        {/* add quiz button  */}
        <div className="row mt-4 mb-4">
          <div
            className="col-sm-12"
            style={{
              textAlign: "center",
            }}
          >
            <button className="tool-button" onClick={handleAddQuestion}>
              ➕ Add Question
            </button>
            <button className="tool-button" onClick={handleResetAll}>
             🔁 Reset Quiz
            </button>
            <button className="tool-button" onClick={handleSubmitQuiz}>
            ✅Submit Quiz
            </button>
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
        </div>
      </div>
    </React.Fragment>
  );











}
// class QuizBuilder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       type: "",
//       questions: [],
//     };
//   }

//   handleResetAll = (e) => {
//     this.setState({ title: "", description: "", type: "", questions: [] });
//   };

//   handleTitleChange = (e) => {
//     this.setState({ title: e.target.value });
//   };

//   handleDescriptionChange = (e) => {
//     this.setState({ description: e.target.value });
//   };

//   handleTypeChange = (e) => {
//     this.setState({ type: e.target.value });
//   };

//   handleAddQuestion = (e) => {
//     const { questions } = this.state;
//     const id =
//       questions.length === 0 ? 0 : questions[questions.length - 1].id + 1;
//     const title = "";
//     const options = [];
//     const answer = Number(0);
//     questions.push({ id, title, options, answer });
//     this.setState({ questions: questions });
//   };

//   copyQuestion = (question) => {
//     const { id, title, answer } = question;
//     const options = [...question.options];
//     return { id, title, answer, options };
//   };

//   // question form control
//   handleQuestionTitleChange = (id, value) => {
//     const { questions } = this.state;
//     const index = questions.findIndex((question) => question.id === id);
//     questions[index].title = value;
//     this.setState({ questions: questions });
//   };

//   handleQuestionAnswerChange = (id, value) => {};

//   handleRemoveQuestion = (id) => {
//     const newQuestions = this.state.questions.filter(
//       (question) => question.id !== id
//     );
//     this.setState({ questions: [...newQuestions] });
//   };

//   handleQuestionAddOption = (q_id) => {
//     const { questions } = this.state;
//     const index = questions.findIndex((question) => question.id === q_id);
//     const question = { ...questions[index] };
//     const { options } = question;
//     const opt_id =
//       options.length === 0 ? 0 : options[options.length - 1].id + 1;
//     const option = { id: opt_id, value: "" };
//     options.push(option);
//     question.options = [...options];
//     questions[index] = { ...question };
//     this.setState({ questions: questions });
//   };

//   handleOptionChange = (q_id, opt_id, value) => {
//     // console.log(q_id, opt_id, value);
//     const { questions } = this.state;
//     const index = questions.findIndex((question) => question.id === q_id);
//     const question = { ...questions[index] };
//     const { options } = question;
//     const option_index = options.findIndex((option) => option.id === opt_id);
//     options[option_index].value = value;
//     question.options = [...options];
//     questions[index] = { ...question };
//     this.setState({ questions: questions });
//   };

//   handleRemoveOption = (q_id, opt_id) => {
//     // console.log("Question", q_id, "Option", opt_id);
//     const { questions } = this.state;
//     const index = questions.findIndex((question) => question.id === q_id);
//     const question = { ...questions[index] };
//     const { options } = question;
//     // const newOptions = options.filter((option) => option.id !== opt_id);
//     const newOptions = [];
//     let counter = 0;
//     for (let i = 0; i < options.length; i++) {
//       const option = options[i];
//       if (option.id === opt_id) continue;
//       option.id = counter++;
//       newOptions.push(option);
//     }
//     question.options = [...newOptions];
//     questions[index] = { ...question };
//     this.setState({ questions: questions });
//   };

//   handleSelectAnswer = (q_id, opt_id) => {
//     const { questions } = this.state;
//     const index = questions.findIndex((question) => question.id === q_id);
//     const question = { ...questions[index] };
//     question.answer = opt_id;
//     questions[index] = { ...question };
//     this.setState({ questions: questions });
//   };

// //   handleSubmitQuiz = () => {
// //     QuizService.submit(this.state).then((response) => {
// //       if (response === false) {
// //         // if the quiz is invalid
// //       } else {
// //         const { _id } = response;
// //         this.props.history.push({
// //           pathname: "/quiz-done",
// //           state: { quiz_id: _id },
// //         });
// //       }
// //     });
// //   };

//   render() {
  
//     return (
//       <React.Fragment>
    
//         <div className="container-fluid">
//           <div className="row mt-5">
//             <div className="col-sm-8 offset-sm-2 section">
//               <input
//                 className="profile-name input-quiz-title"
//                 placeholder="Legendary Quiz Title"
//                 value={this.state.title}
//                 onChange={this.handleTitleChange}
//               />
//               <input
//                 className="profile-email input-quiz-desc mt-1"
//                 placeholder="Legendary Quiz Description"
//                 value={this.state.description}
//                 onChange={this.handleDescriptionChange}
//               />
//               <div className="row mt-5 pl-3">
//                 <select
//                   className="option-dropdown"
//                   value={this.state.type}
//                   onChange={this.handleTypeChange}
//                 >
//                   <option value="" disabled hidden>
//                     Quiz Type
//                   </option>
//                   <option value="AMATEUR">Amateur</option>
//                   <option value="TIME_TRIAL" disabled>
//                     Time Trial (Pro)
//                   </option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-5">
//             {this.state.questions.map((question) => (
//               <Question
//                 key={question.id}
//                 question={question}
//                 onTitleChange={this.handleQuestionTitleChange}
//                 onRemove={this.handleRemoveQuestion}
//                 onAddOption={this.handleQuestionAddOption}
//                 onOptionChange={this.handleOptionChange}
//                 onOptionRemove={this.handleRemoveOption}
//                 onSelectAnswer={this.handleSelectAnswer}
//               />
//             ))}
//           </div>

//           {/* add quiz button  */}
//           <div className="row mt-4 mb-4">
//             <div
//               className="col-sm-12"
//               style={{
//                 textAlign: "center",
//               }}
//             >
//               <button className="tool-button" onClick={this.handleAddQuestion}>
//                 💣 Add Question
//               </button>
//               <button className="tool-button" onClick={this.handleResetAll}>
//                 ✂️ Reset Quiz
//               </button>
//               <button className="tool-button" onClick={this.handleSubmitQuiz}>
//                 🔨Submit Quiz
//               </button>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default QuizBuilder;
