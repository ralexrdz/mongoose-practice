const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Song = new model('Song', schemas.songSchema)
let Album = new model('Album', schemas.albumSchema)
let Artist = new model('Artist', schemas.artistSchema)

Song
  .find({})
  .populate('artist')
  .populate('album')
  .exec((err, res) => console.log(res))

