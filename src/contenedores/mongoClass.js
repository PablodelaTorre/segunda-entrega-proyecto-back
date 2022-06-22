import mongoose from "mongoose";
import config from "../config.js"

mongoose.connect(config.mongoDb.URL, config.mongoDb.options)