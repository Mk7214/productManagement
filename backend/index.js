import express from "express";
import { connectDb } from "./connections/db.js";
import productRoutes from "./routes/pro.js";

const app = express();
app.use(express.json()); //used to accept the json data
app.use("/api/products", productRoutes);
app.listen(8080, () => {
  connectDb();
  console.log("Server is started at http://localhost:8080");
});
