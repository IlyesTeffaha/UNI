module.exports = (sequelize, DataTypes) => {

    const Tag = sequelize.define('Tag', {
        name: DataTypes.STRING
      });


      Tag.associate=(models)=>{
        models.Tag.belongsToMany(models.Diplomes,{ through: "Diplomes_Tags" }) ;
      }

      Tag.associate=(models)=>{
        models.Tag.hasMany(models.Answer) ;
      }

  return Tag;    


};



 