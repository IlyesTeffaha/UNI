
module.exports = (sequelize, DataTypes) => {
   


    const Question = sequelize.define("Question", {
        title: {
          type: DataTypes.STRING,
        },
        image:{
          type: DataTypes.STRING,


        },
       
        i:{
          type:DataTypes.INTEGER,

        }
              
      
      });
    

      Question.associate=(models)=>{
        models.Question.belongsToMany(models.Users,{ through: models.UserQuizzes }) ;
      }

      Question.associate=(models)=>{
        models.Question.hasMany(models.Answer) ;
      }


     

      // Question.associate=(models)=>{
      //   models.Question.belongsTo(models.Quiz) ;
      // }



      
      // Question.hasMany(models.Answer);
      // Question.hasMany(Answer)
      // Answer.belongsTo(Question)

      return Question;
    };
  
      
  