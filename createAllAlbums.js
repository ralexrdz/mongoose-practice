const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Album = new model('Album', schemas.albumSchema)

Album.create({
  title: '2nd Law',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524b')
}, (err, res) => console.log(res) )
Album.create({
  title: 'Dark Side Of The Moon',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524c')
}, (err, res) => console.log(res) )
Album.create({
  title: 'Yellow Submarine',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524d')
}, (err, res) => console.log(res) )
Album.create({
  title: 'Ten',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524e')
}, (err, res) => console.log(res) )









