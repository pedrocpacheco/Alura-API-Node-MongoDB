import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:root@cluster0.cktoaxv.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;