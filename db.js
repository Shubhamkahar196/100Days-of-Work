import mongoose from 'mongoose';
console.log("Connection to the database");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
  });
  
  

const habitSchema = new Schema({
       title: String,
       description: String,
       completed: Boolean
})

const habitModel = mongoose.model("habit", habitSchema);
const userModel = mongoose.model("user", userSchema);

export {
    userModel,
    habitModel
}