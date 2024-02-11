const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
const mongoose = require("mongoose");
const userModel = require('../models/user_m');

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    // bearer bmkhvdfgkdsz 
    if (!authorization) {
        return res.status(401).json({ error: "User not logged in" });
    }
    const token = authorization.replace("bearer ", "");

    try {
        const payload = await jwt.verify(token, JWT_SECRET);
        const { _id } = payload;
        const dbUser = await userModel.findById(_id);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = dbUser;
        next();
    } catch (error) {
        return res.status(401).json({ error: "User not logged in" });
    }
};
