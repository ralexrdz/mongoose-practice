const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Album = new model('Album', schemas.albumSchema)
let Artist = new model('Artist', schemas.artistSchema)

Album.deleteMany({}, (err, res) => console.log(res))
Artist.deleteMany({}, (err, res) => console.log(res))
// Artists
// Songs
