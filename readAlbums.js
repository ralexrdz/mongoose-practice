const mongoose = require('mongoose');
const model = mongoose.model 
// Para conectarnos a la base de datos "mi-base-de-datos"
mongoose.connect('mongodb://localhost/mi-base-de-datos');

const schemas = require('./schemas') 

let Album = new model('Album', schemas.albumSchema)
let Artist = new model('Artist', schemas.artistSchema)

Album
.find({})
.populate('artist')
.exec((err, res) => {
  if (err) console.log(err)
  let albumsMap = res.map(album => {
    console.log(album.artist.name)    
    let newAlbum = {
      title: album.title,
      artist: album.artist.name
    }
    return newAlbum
  })
  console.log(albumsMap)
})

