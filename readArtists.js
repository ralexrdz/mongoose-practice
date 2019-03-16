const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Artist = new model('Artist', schemas.artistSchema)
let Albums = new model('Albums', schemas.albumSchema)

Artist
  .find({})
  .populate('Albums')
  .exec((err, res) =>{
    if (err) console.log(err)
    console.log(res)
  })

