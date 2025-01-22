import axios from "axios";
import User from "../models/User.js";

export const loginUser = (req, res) => {
    const user = new User(req.body.email, null, req.body.password);
    const apiURL = process.env.API_URL + "/auth/login";
    const username = "Jhon";

    axios.post(apiURL, user, {
        headers: {
            "Content-Type": "application/json"
        }})
        .then(response => {
            console.log("Success", response.data);
            res.render("profile", { user: {
                username: username,
                email: user.email,
                token: response.data.access_token
            } });
        })
        .catch(error => {
            console.error("Error", error);
            res.status(500).send(error.response.data);
        }
    );
};