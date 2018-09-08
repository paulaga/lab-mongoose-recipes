const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');
const Recipe = require('./models/Recipe')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

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