const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnection = async (username, password) => {
  const dbUrl = `mongodb+srv://${username}:${password}@cluster0.6pfwutj.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbUrl, {});
    console.log("database connected");
  } catch (error) {
    console.log(`While connecting the database: ${error}`);
  }
};

module.exports = dbConnection;
