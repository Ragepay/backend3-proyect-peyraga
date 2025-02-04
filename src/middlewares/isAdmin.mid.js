import { verifyTokenUtil } from "../utils/token.util.js";

async function isAdmin(req, res, next) {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(403).json({ message: "BAD AUTH." })
    }
    const data = verifyTokenUtil(token);
    if (data.role !== "ADMIN") {
        return res.status(403).json({ message: "ACCESS DENIED: YOU ARE NOT ADMIN." })
    }
    return next();
};

export default isAdmin;
