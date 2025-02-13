import { connect } from "mongoose";
import envUtil from "./env.util.js";
import argsUtil from "./args.util.js";
import loggerUtil from "./logger.util.js";

async function dbConnect() {
    try {
        await connect(envUtil.MONGO_LINK, { maxPoolSize: 16 });
        loggerUtil.INFO("Persistence: " + argsUtil.persistence);
    } catch (error) {
        loggerUtil.FATAL(error.message);
    }
};

export default dbConnect;
