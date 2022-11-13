const express = require('express')
const app = express()
const cors = require("cors");
const db = require("./models");
const path = require('path');
const fs = require("fs");




app.use(express.json());
app.use(cors());





const usersRouter= require("./routes/Users")
app.use("/auth",usersRouter)

const diplomeRouter= require("./routes/Diplomes");



app.use("/",diplomeRouter)



const questionsRouter = require('./routes/Questions');

app.use("/questions",questionsRouter)






db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log(path.join(__dirname, "./images"));
      
    });
  });

express.static(path.join(__dirname, "./images"));
  
