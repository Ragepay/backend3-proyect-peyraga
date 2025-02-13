import loggerUtil from "../utils/logger.util.js";

const errorHandler = (error, req, res, next) => {
    console.log(error);
    const message = req.method + " " + req.url + " - " + (error.message || "FATAL ERROR");
    const statusCode = error.statusCode || 500;
    if (statusCode.toString().startsWith("4")) {
        loggerUtil.WARN(error);
    } else {
        loggerUtil.FATAL(error);
    }
    return res.status(statusCode).json({ message });
};

export default errorHandler;