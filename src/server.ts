import app from "./app";
const PORT = process.env.PORT || 2222;
// Database
import './configs/database'

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})

