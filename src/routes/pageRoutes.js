import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const APP_NAME = process.env.APP_NAME + ' versión:' + process.env.APP_VERSION;

router.get("/", (req, res) => {
    res.send('Bienvenidos a ' + APP_NAME);
}
);

router.get("/profile", (req, res) => {
    res.render("profile");
}
);

router.get("/login", (req, res) => {
    res.render("login");
}
);

export default router;