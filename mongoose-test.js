const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Album = new model('Album', schemas.albumSchema)

// Album.find({}, (err, res) => {
//   console.log(res)
// })

// Album.create({
//   title: '2nd Law'
// }, (err, res) => console.log(res) )

