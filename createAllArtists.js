const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Artist = new model('Artist', schemas.artistSchema)

Artist.create({
  name: 'Muse',
  gender: 'Rock'
}, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})
Artist.create({
  name: 'Pink Floyd',
  gender: 'Prog'
}, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})
Artist.create({
  name: 'The Beatles',
  gender: 'Rock'
}, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})
Artist.create({
  name: 'Pearl Jam',
  gender: 'Rock'
}, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})

