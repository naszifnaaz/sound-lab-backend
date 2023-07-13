// Creating Express Server

const app = require("./index");
const connect = require("./configs/db");

app.listen(process.env.PORT || 5000, async () => {
  try {
    await connect();
    console.log("Connection Established On Port 5000");
  } catch (err) {
    console.log("Something went wrong!", err);
  }
});
