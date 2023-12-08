import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-noixqdi-shard-00-00.6hz5gcd.mongodb.net:27017,ac-noixqdi-shard-00-01.6hz5gcd.mongodb.net:27017,ac-noixqdi-shard-00-02.6hz5gcd.mongodb.net:27017/?ssl=true&replicaSet=atlas-1rq0nr-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
