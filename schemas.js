const mongoose = require('mongoose');

const Schema = mongoose.Schema

const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album' 
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist' 
  },
  releaseDate: Date,
  duration: Number
})

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist' 
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album' 
    }
  ]
})

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  albums: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album' 
    }
  ],
  gender: {
    type: String,
    enum: ['Rock', 'Pop', 'Jazz', 'Disco', 'Prog'],
  }
})

module.exports = {
  songSchema,
  albumSchema,
  artistSchema
}

