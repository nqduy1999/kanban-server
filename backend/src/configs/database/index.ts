import mongoose, { ConnectOptions } from "mongoose"

const URI = "mongodb://127.0.0.1:27017/kanban"

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