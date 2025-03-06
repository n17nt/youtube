require("dotenv").config();
const connectDb = require("./config/db");
const app = require("./middlewares/app");
connectDb();

app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
