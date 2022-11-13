module.exports = (sequelize, DataTypes) => {

    const UserQuizzes = sequelize.define('UserQuizzes', {
        quizname:{

            type:DataTypes.STRING
        },
        userhistory:{
            type:DataTypes.STRING

        }

      });


    //   Tag.associate=(models)=>{
    //     models.Tag.belongsToMany(models.Diplomes,{ through: "Diplomes_Tags" }) ;
    //   }

    //   Tag.associate=(models)=>{
    //     models.Tag.hasMany(models.Answer) ;
    //   }

  return UserQuizzes;    


};



 