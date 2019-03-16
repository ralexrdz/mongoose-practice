const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Song = new model('Song', schemas.songSchema)

Song.create({
  title: 'Madness',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524b'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54c')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Supremacy',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524b'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54c')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Dark Side Of The Moon',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524c'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54d')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Money',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524c'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54d')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Yellow Submarine',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524d'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54e')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Hey Jude',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524d'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54e')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Black',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524e'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54f')
}, (err, res) => console.log(res) )
Song.create({
  title: 'Why go',
  artist: mongoose.Types.ObjectId('5c8d4a1670d9ff36b88c524e'),
  album: mongoose.Types.ObjectId('5c8d4a9f95c9f6371576c54f')
}, (err, res) => console.log(res) )









