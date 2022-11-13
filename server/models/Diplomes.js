const Tags = require("./Tag");

module.exports = (sequelize, DataTypes) => {
   


    const Diplome = sequelize.define("Diplome", {
        title: {
          type: DataTypes.STRING,
        },
        faculty: {
          type: DataTypes.STRING,
        },
        university: {
          type: DataTypes.STRING,
        },
  
        categorie:{
          type: DataTypes.STRING,
         
        },
       
        state:{
          type: DataTypes.STRING,
        }, 
        city:{
  
          type: DataTypes.STRING,
        }, 
        
        scorebac:{
          type:DataTypes.FLOAT,
        },
        section:{
          type:DataTypes.STRING,
        },
        capacite:{
          type:DataTypes.INTEGER,
          
        },
        i:{
          type:DataTypes.INTEGER,

        }
              
      
      });
    


     Diplome.associate=(models)=>{
        models.Diplome.belongsToMany(models.Tag,{ through: "Diplomes_Tags" }) ;
      }


      return Diplome;
    };
  
      
  