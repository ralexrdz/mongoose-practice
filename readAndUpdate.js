const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mi-base-de-datos');
const model = mongoose.model 

const schemas = require('./schemas') 

let Song = new model('Song', schemas.songSchema)

Song.find()
.exec((err, res) => {
  console.log(res)
  let song1 = res[0]
  song1.duration = 2400
  song1.save()
})