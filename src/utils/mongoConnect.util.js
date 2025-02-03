import { connect } from "mongoose";
import envUtil from "./env.util.js";
import argsUtil from "./args.util.js";

async function dbConnect() {
    try {
        await connect(envUtil.MONGO_LINK, { maxPoolSize: 16 });
        console.log("Persistence: " + argsUtil.persistence);
    } catch (error) {
        console.log(error);
    }
};

export default dbConnect;
