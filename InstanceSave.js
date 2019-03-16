const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mi-base-de-datos');
const model = mongoose.model 

const schemas = require('./schemas') 

let Song = new model('Song', schemas.songSchema)

let newSong = new Song({
  title: 'Sabor a mí'
})

newSong.duration = 2000

newSong.save((err, res) => {
  if (err) console.log(err)
  console.log(res)  
} )

