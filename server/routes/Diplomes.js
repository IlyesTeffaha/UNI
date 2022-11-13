const express = require("express");
const router = express.Router();
const { Diplome, sequelize,Tag,Categories,Question,Users ,UserQuizzes} = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")
const {validateToken} = require('../middlewares/AuthMiddleware')
const { QueryTypes } = require('sequelize');

const app=express();




//add diplome///////////

router.post("/add-diplome",async (req, res) => {

const{i}=req.body

const data= { title,capacite,state,city,categorie,university,faculty} = req.body;


    
const diplome = await Diplome.create({
  title: data.title,
  capacite:data.capacite,
  state:data.state,
  city:data.city,
  categorie:data.categorie,
  university:data.university,
  faculty:data.faculty,
  i:i


// Tags:[{
//   name:name
// }]

  
},{include:Tag})


for (let index = 0; index < i; index++) {
  const name="name"+`${index}`
const dataq = Object.assign({}, data, {names: name})
 
const array=Object.values(data)
// const datas = Object.assign(data, tagsobject);
  
  const Tagss= await Tag.create({name:array[8+index]});

      await diplome.addTags(Tagss)
}




 
  // const Tagss= await Tags.create({name:req.body.name});
  // const Tagss= await Tags.bulkCreate([
  //   { name: name1 },
  //   { name: name2 },
  //   { name: name3 }

    
  // ])
 

    
    // const diplome = await Diplomes.create({
    //     title: title,
    //     capacite:capacite,
    //     state:state,
    //     city:city,
    //     categorie:categorie,
    //     university:university,
    //     faculty:faculty,
    //     i:i


    //   // Tags:[{
    //   //   name:name
    //   // }]

        
    //   },{include:Tags})


      // for (let index = 0; index < 1; index++) {
      //     const name="name"+`${index}`
      //   const Tagss= await Tags.create({name:req.body.name+`${0}`});
      // //   const Tagss= await Tags.bulkCreate([
      // //     { name: req.body.name }
      // //     // { name: name2 },
      // //     // { name: name3 }
      
          
      // //   ])
      // // await diplome.addTags(Tagss)
      // // res.json("name"+`${index}`);  
      

      // // const index=0
      // // const Tagss= await Tags.create({name:req.body.name+`${index}`});

      // await diplome.addTags(Tagss)
        
      // }
   

// for (let index = 0; index < i; index++) {

//   const Tagss= await Tags.create({});

//       await diplome.addTags(Tagss)

// }
     
    
      
      res.json({message:"successfully added"});  
    

  
  });
////////////get diplomes//////////

router.get("/all-diplomes",async (req,res)=>{

const diplomes= await Diplome.findAll({include:[Tag]});
// diplomes.forEach(element => {
//   element.Tags.forEach(tag=>{
//     console.log(tag.Diplomes_Tags.DiplomeId)



//   })
  
// });

for (let index = 0; index < diplomes.length; index++) {
  // console.log(diplomes[index])
  for (let i = 0; i < diplomes[index].Tags.length; i++) {
    
  }
}
res.json(diplomes)

})
///////////////////////////////////

router.post("/add-tags", (req, res) => {
  const { name} = req.body;


  
  Tag.create({
      name:name

  
    })
    res.json({message:"tag with success"});  
  


});

// const testtag=  Tags.create({
//   name:"new tag"
// });


//return single Diplome for the admin

router.get("/getdiplome/:id",validateToken,async (req,res)=>{
  const id = req.params.id;
  const singlediplome = await Diplome.findAll({
    where: {
      
      id:id
    }
  });

  res.json(singlediplome[0]);
})

  module.exports = router;

  //////////////////////Categories///////////////////////



  router.post("/add-categories",  (req, res) => {
   const {title}=req.body;

   Categories.create({title:title})

      res.json("categorie added");
    
  });
  





  router.get("/all-categories", async (req, res) => {
     const listcat = await Categories.findAll();
     res.json(listcat)
    });
  
    
    /////////Tags////
    router.get("/all-tags", async (req, res) => {
      const taglist = await Tag.findAll();
      taglist.forEach(tag=>{
        console.log(tag.name)
      })

    

      res.json(taglist)
     });

      ///////// filtered Tags////
    router.post("/get-filtered-diplomes", async (req, res) => {
      const data= {finaltable,userlog,userid}=req.body;
    //   const taglist = await Tag.findAll();
    //   // taglist.forEach(tag=>{
    //   //   console.log(tag.name)
    //   // })

    //   let result = taglist.filter(function(item) {
    //     return data.finaltable.indexOf(item.name) != -1;
    //   });


    // console.log(result)
    var keys = Object.keys(userlog);
console.log(keys)

try {
  for (let k = 0; k < keys.length; k++) {
    // const singleuser = await Users.findAll({
    //   where: {
        
    //     id:userid
    //   }
    // });
    
    // const question = await Question.findAll({
    //   where: {
        
    //     id:keys[k]
    //   }
    // });
    // console.log(singleuser)
    // console.log(question)
  
    // await singleuser.addQuestions(question)
    const userquizzes= await UserQuizzes.create({quizname:`quiz${userid}`,UserId:userid,QuestionId:keys[k]})
    
  }

} catch (error) {
  console.log(error)
}
 

    const diplomes= await Diplome.findAll({include:[Tag]});
const filtereddiplomes=[]

for (let index = 0; index < diplomes.length; index++) {
  // console.log(diplomes[index])
  for (let i = 0; i < diplomes[index].Tags.length; i++) {
  // console.log(diplomes[index].Tags[i].name)
  for (let j = 0; j < data.finaltable.length; j++) {
    
    if(diplomes[index].Tags[i].name===data.finaltable[j])
    {
      // console.log(diplomes[index].id)
      const singlediplome = await Diplome.findAll({
        where: {
          
          id:diplomes[index].id
        }
      });
      filtereddiplomes.push(singlediplome[0])
    }
  }
    
  }
}
// console.log(filtereddiplomes)




if (filtereddiplomes.length!=0) {
  res.json(filtereddiplomes)
  
}else{
  res.json("no diplomes found")

}
console.log(filtereddiplomes)

     });

    //  const nbfemale = await sequelize.query(` SELECT * FROM tags WHERE name IN ('${ myarray.join("','") }');`,
    //  {
    //    replacements: ['Female'],
    //    type: QueryTypes.SELECT
    //  });

 
   ////////////get diplomes//////////

// router.get("/all-diplomes",async (req,res)=>{

//   const diplomes= await Diplome.findAll({include:[Tag]});
//   diplomes.forEach(element => {
//     element.Tags.forEach(tag=>{
//       console.log(tag.name)
  
//     })
    
//   });
//   res.json(diplomes)
  
//   })