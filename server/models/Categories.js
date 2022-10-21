module.exports = (sequelize, DataTypes) => {

    const Categories = sequelize.define("Categories", {
      title:DataTypes.STRING,
       
      
     
    });
  
    return Categories;
  };