import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import "dotenv/config";
import connectDB from "./db/index.js";

const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(`\n MongoDb connected !! DB HOST `);
//     app.on("error", (error) => {
//       console.log("ERR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on http://localhost:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();

/**
 connectDB() is an async function thus would return a promise . now wecan handle this promise .then().catch()
 */
connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on http://localhost:${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.error("MONGODB connection failed !!!", err);
  });
