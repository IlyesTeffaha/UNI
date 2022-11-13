const express = require("express");
const router = express.Router();
const { sequelize,Question,Answer,Tag} = require("../models");
const { QueryTypes } = require('sequelize');
const Answers = require("../models/Answer");
// const Tags = require("../models/Tags");

// const app=express();


//add questions///////////

router.post("/add-questions",async (req, res) => {

    // const{i}=req.body
    
    const data= { title,i} = req.body;
    
    for (let index = 0; index < i; index++) {
    // console.log(title[index].options)
    // console.log(title[index])


    // Questions.create({
    //     title:title[index].title
  
    
    //   })
const question = await Question.create({title:title[index].title,image:title[index].image})


      for(let j=0;j<title[index].options.length;j++){
        // console.log(title[index].options[j].value)
        const answer = await Answer.create({value:title[index].options[j].answertitle,score:title[index].options[j].score})
        await question.addAnswers(answer)
        const recivedtag=title[index].options[j].tag.split("$")
        console.log(recivedtag[1])
        const findtag= await Tag.findAll({
            where: {
              
              id:recivedtag[1]
            }
          });
        console.log(findtag[0])
        console.log(recivedtag[1])

       await answer.setTag(recivedtag[1])
      // const addscore =  await ScoreAnswerTag.create({value:title[index].options[j].score})
    //   const answerid=title[index].options[j].id;
      console.log(answer.id)
    //  await addscore.setAnswer(answer.id)
        // console.log("questions "+title[index].title+" has these answers "+title[index].options[j].value)
        
        // ScoreAnswerTag
      }
       
        
    }

             
        
          
          res.json({message:"Test created successfully"});  
        
    
      
      });


      //////Get question's answers////
      router.get("/all-answers-per-question/:id",async (req, res) => {
    const id=req.params.id
// var array=""

      const answers = await Answer.findAll({
        where: {
          
          QuestionId:id
        }
      },{include:Tag})


      // console.log(questions[index].id+":"+answers)
      // array=answers
      
     

//      for (let index = 0; index < questions.length; index++) {
   
// for (let j = 0; j < array.length; j++) {
//   // const element = array[index];
//   if(array[j].QuestionId===questions[index].id){
//   // console.log(questions[index]+":"+array[j]):
//   console.log("question number"+array[j].QuestionId+"has these answers"+array[j])

//   }
  
// }
//     }

        // const answers = await Answer.findAll({
        //     where: {
              
        //       QuestionId:1
        //     }
        //   })
        //   const list = await question.getAnswers()         
        // const answers = await Answers.create({value:"e5ddeeeel"})
          
// const question = await Questions.create({title:"noice"})

        // await questions.addAnswers({value:"yeeeeaaah"})

        // const answers = question.getAnswers()


        res.json(answers)


      })

      
      //////Get questions////
      router.get("/all-questions",async (req, res) => {

        const questions = await Question.findAll({include:Answer})
        //   const list = await question.getAnswers()         
        // const answers = await Answers.create({value:"e5ddeeeel"})
          
// const question = await Questions.create({title:"noice"})

        // await questions.addAnswers({value:"yeeeeaaah"})

        // const answers = question.getAnswers()
        // console.log(answers)


        res.json(questions)


      })




        
      //////Get single questions////
      router.get("/single-question/:id",async (req, res) => {
          const id=req.params.id;
        const questions = await Question.findAll({
          where: {
            
            id:id
          }
        },{include:Answer})
        //   const list = await question.getAnswers()         
        // const answers = await Answers.create({value:"e5ddeeeel"})
          
// const question = await Questions.create({title:"noice"})

        // await questions.addAnswers({value:"yeeeeaaah"})

        // const answers = question.getAnswers()
        // console.log(answers)


        res.json(questions[0])


      })
    








         //////Get answers////
         router.get("/all-answers",async (req, res) => {

          const answers = await Answer.findAll({include:Tag})
 
          res.json(answers)
  
  
        })
    
      module.exports = router;