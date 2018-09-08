const mongoose = require('mongoose');
const data = require('./data.js');
const Recipe = require('./models/Recipe')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    mongoose.connection.db.dropDatabase();
    console.log('Connected to Mongo!')
    
    Recipe.create({
      title: 'Trufas', 
      level: 'Amateur Chef', 
      ingredients: ['chocolate', 'harina', 'leche'],
      cousine: 'Around the world', 
      dishType: 'Dessert', 
      duration: 30, 
      creator: 'Cualquiera'}, (err, recipe) => {
        (err) ? console.log(`Ha habido un error`, err) : console.log(`Se ha guardado una receta, ${recipe}`) 
      });
      
      Recipe.insertMany(data)
      console.log(`You have saved: ${data.title}`)
      Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
      .then(() => { console.log(`Rigatoni updated!`) })
      
      .catch((err) => { console.log(`Error de insertMany`)});
      
      Recipe.deleteOne({title: 'Carrot Cake'})
      .then(() => {
        console.log(`Carrot Deleted`);
        mongoose.connection.close();
        console.log('Close!')
      })
      .catch((err) => console.log(`Hubo un error eliminando carrot`))
    
    })
    .catch(err => console.error('Error connecting to mongo', err));