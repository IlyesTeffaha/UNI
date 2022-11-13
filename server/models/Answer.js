
module.exports = (sequelize, DataTypes) => {
   


    const Answer = sequelize.define("Answer", {
        value: {
          type: DataTypes.STRING,
        },
       
        i:{
          type:DataTypes.INTEGER,

        },
        score:{
          type:DataTypes.FLOAT,

        }
              
      
      });
    
      Answer.associate=(models)=>{
        models.Answer.belongsTo(models.Question) ;
      }
      

      Answer.associate=(models)=>{
        models.Answer.belongsTo(models.Tag) ;
      }
    
      // Answers.associate=(models)=>{
      //   models.Answers.hasOne(models.ScoreAnswerTag) ;
      // }


      return Answer;
    };
  
      
  