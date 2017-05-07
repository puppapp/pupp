import mongoose from 'mongoose'
import findOrCreate from 'mongoose-findorcreate'

export default function () {
  let schema = mongoose.Schema({
    facebookId: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    }
  })
  schema.plugin(findOrCreate)
  return mongoose.model('User', schema)
}
