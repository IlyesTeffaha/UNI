const express = require("express");
const router = express.Router();
const { Users, sequelize } = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")
const {validateToken} = require('../middlewares/AuthMiddleware')
const { QueryTypes } = require('sequelize');
const app=express();
const nodemailer = require("nodemailer");


const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

const CURRENTSTATUS={
  ACTIVE:'active',
  SUSPENDED:'suspended'

}
const isverified={
  TRUE:true,
  FALSE:false,
}


//////////////////////profile image//////////
const path = require('path');
const multer = require('multer');
const { appendFile, read } = require("fs");


app.use("/images",express.static(path.join(__dirname, "../images")));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

router.get('/path',(req,res)=>{
  res.send(path.join(__dirname, "..images"))
})

router.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


///////////////////email verification///////////////////
const characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let activationcode="";
for(let i=0;i<25;i++){
  activationcode+=characters[Math.floor(Math.random()*characters.length)];

}



  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user:"unitnmail@gmail.com", 
      pass:"uorfesvxsfesejst",
    },
  });

const sendConfirmationEmail=(email,activationcode)=>{
  transporter.sendMail({
    from:"unitnmail@gmail.com",
    to:email,
    subject:"Confirm your account",
    html:`<h1>Confirmation Email</h1>
    <h2>Hello,</h2>
    <p>In order to activate your account please click on this link </p>
    <a href=http://localhost:3000/confirm/${activationcode}> Click Here ! </a> </div>`,
  }).catch((err)=>console.log(err));
};

//////activation method/////////
router.put('/activateuser/:activationcode',async (req,res)=>{
  const activationcode = req.params.activationcode;

  try {
  const user = await Users.update({ isverified: true },{ where: { activationcode: activationcode } });
  res.send("updated")
    
  } catch (error) {
  res.json(error)
    
  }


});

///////////reset forgot password//////////
router.post('/forgotpass',async (req,res)=>{
  const {email}=req.body;
  const user = await Users.findOne({ where: { email: email } });
  if(user){
    res.json(true)

  }else{
    res.json({message:"User dosen't exist"})

  }

})




//Registration method///////////

router.post("/",async (req, res) => {
  const { username, password ,email,birthday,address,PostalCode,PhoneNumber,gender,section,scorebac,state,city} = req.body;
  const user = await Users.findOne({ where: { email: email } });

      if(user){
        res.json({message:"Email already exists"}) }
        else{
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      email:email,
      role:ROLE.BASIC,
      birthday:birthday,
      address:address,
      PostalCode:PostalCode,
      PhoneNumber:PhoneNumber,
      occupation:"Student",
      currentstatus:CURRENTSTATUS.ACTIVE,
      gender:gender,
      scorebac:scorebac,
      section:section,
      activationcode:activationcode,
      isverified:isverified.FALSE,
      state:state,
      city:city,

  
    })
    res.json({success:"An activation link has been sent to your email address"});  
  });
  sendConfirmationEmail(email,activationcode)
}
});
//Create admin method///////////////////////////////////

router.post("/admin", async (req, res) => {
  const { username, password ,email,birthday,address,PostalCode,PhoneNumber} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      email:email,
      role:ROLE.ADMIN,
      birthday:birthday,
      address:address,
      PostalCode:PostalCode,
      PhoneNumber:PhoneNumber,
      occupation:"--"
    });
    res.json("ADMIN CREATED WITH SUCCESS");  
  });
});



// login method
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
//finds the user with the email written in the body
  const user = await Users.findOne({ where: { email: email } });

  
  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    //returns true if the entered password matches the imported user
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Password " });
else{
  if(user && match && !user.isverified){
    res.json({ error: "Please verify your account via the mail sent to your email address " });
  }else{
    const accesstoken= sign({username:user.username,id:user.id,email:user.email,role:user.role,birthday:user.birthday,gender:user.gender,address:user.address,PostalCode:user.PostalCode,PhoneNumber:user.PhoneNumber,occupation:user.occupation,scorebac:user.scorebac,section:user.section},"importantsecret");
    
    res.json({token:accesstoken,username:user.username,id:user.id,email:user.email,role:user.role,birthday:user.birthday,gender:user.gender,address:user.address,PostalCode:user.PostalCode,PhoneNumber:user.PhoneNumber,occupation:user.occupation,scorebac:user.scorebac,section:user.section,image:user.image});}
  }
  



  });
  }
  

});

/////wrong code///Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client/////fixed by doing nested if cycles///for some reason this code sends multiple responses sometimes not clear enough
// // login method
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
// //finds the user with the email written in the body
//   const user = await Users.findOne({ where: { email: email } });

//   if (!user) res.json({ error: "User Doesn't Exist" });
  
// //returns true if the entered password matches the imported user
//   bcrypt.compare(password, user.password).then((match) => {
//     if (!match) res.json({ error: "Wrong Password " });


//   const accesstoken= sign({username:user.username,id:user.id},"importantsecret");
    
//     res.json(accesstoken);
//   });
// });




//validate the authanticity of the token and return the user connected to it

router.get("/validate", validateToken, (req, res) => {
  res.json(req.user);
});


//returns the user infos except the password
router.get("/basicinfo/:id",async (req,res)=>{
const id = req.params.id;

 const basicinfo = await Users.findByPk(id, {attributes : {exclude:['password']},
});

res.json({basicinfo:basicinfo});
});

//return user list for the admin
router.get("/allusers",validateToken,async (req,res)=>{
  const userlist = await Users.findAll({ where: { role: "basic" } })
  res.json(userlist);
})


//return single user for the admin

router.get("/getuser/:id",validateToken,async (req,res)=>{
  const id = req.params.id;
  // const singleuser = await Users.findOne({ where: { role: 'basic' }&&{id:id} });
  const singleuser = await Users.findAll({
    where: {
      
      id:id
    }
  });

  res.json(singleuser[0]);
})

//return number of users according to age

router.get("/nbusersbyage",async (req,res)=>{
  
   const dates = await sequelize.query(" SELECT  YEAR(CURRENT_DATE)-YEAR(t.birthday) AS ageInYears , count(*) as nbr from users t group by ageInYears ;", { type: QueryTypes.SELECT });


  res.json(dates);
})



//return number of users by  joining date

router.get("/nbusersbyjoiningdate",async (req,res)=>{
  
  const dates = await sequelize.query(" SELECT DAY(t.createdAt) as days,count(*) as nbr from users t group by days ;", { type: QueryTypes.SELECT });


 res.json(dates);
})

//return number of males and females  

router.get("/nbbygender",async (req,res)=>{
  
  const nbmale = await sequelize.query(" SELECT count(*) as nb from users where gender= ? ;",
  {
    replacements: ['Male'],
    type: QueryTypes.SELECT
  });

  // const nbmale = await sequelize.query(" SELECT count(*) as nb from users where role= ?  group by gender;",
  // {
  //   replacements: ['basic'],
  //   type: QueryTypes.SELECT
  // });

  const nbfemale = await sequelize.query(" SELECT count(*) as nb from users where gender= ? ;",
  {
    replacements: ['Female'],
    type: QueryTypes.SELECT
  });


 res.json({"nbmale":nbmale,"nbfemale":nbfemale});
})

///change user password

router.put('/changepassword',validateToken ,async (req,res)=>{
  const {oldpass,newpass}= req.body;

  const user = await Users.findOne({where:{email:req.user.email}})

bcrypt.compare(oldpass,user.password).then(async(match)=>{
  if(!match)
  {res.json({error:"old password is wrong"})}else{
    bcrypt.hash(newpass,10).then((hash)=>{
      Users.update({password:hash},{where:{email:req.user.email}})
     res.json("password updated successfully")
   });
  }


});


});



router.put("/update/:id",async (req,res)=>{



  let id = req.params.id
try {
  const user = await Users.update(req.body, { where: { id:id }})


  res.send(user)
} catch (error) {
  res.json(error)
  
}


 
});

module.exports = router;