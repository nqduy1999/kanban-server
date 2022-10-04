import mongoose, { ConnectOptions } from "mongoose"

console.log(process.env.ISLOCAL, 'IS LOCAL');

const URI = (process.env.ISLOCAL !== "false" ?  "mongodb://127.0.0.1:27017/kanban" : process.env.MONGODB_URL)

mongoose.connect(`${URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions).then(() => {  
  console.log("Database Connected Successfuly.");
})
  .catch((err) => {
    console.log(err, 'err');
    console.log("Error Connectiong to the Database");
  });