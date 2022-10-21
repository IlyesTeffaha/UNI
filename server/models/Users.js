module.exports = (sequelize, DataTypes) => {
   


  const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      role:{
        type: DataTypes.STRING,
       
      },
      birthday:{
        type:DataTypes.DATE,
        
      },
      address:{
        type: DataTypes.STRING,
      }, 
      PostalCode:{

        type: DataTypes.INTEGER,
      }, 
      PhoneNumber:{
        type: DataTypes.INTEGER,

      },
      occupation :{
        type: DataTypes.STRING,

      },
      currentstatus:{
        type: DataTypes.STRING,

      },
      gender:{
        type: DataTypes.STRING,

      },
      scorebac:{
        type:DataTypes.FLOAT,
      },
      section:{
        type:DataTypes.STRING,
      },file:{
        type:DataTypes.STRING,
      },
      isverified:{
        type:DataTypes.BOOLEAN,
        
      },
      activationcode:{
        type:DataTypes.STRING,
      },
      state:{
        type:DataTypes.STRING,
       
      },
      city:{
        type:DataTypes.STRING,
      
      },
      image:{
        type:DataTypes.STRING,

      }     
    
    });


    Users.associate=(models)=>{
      models.Users.belongsToMany(models.Question,{ through: models.UserQuizzes }) ;
    }
  
    return Users;
  };

    
