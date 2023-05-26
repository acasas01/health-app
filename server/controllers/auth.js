import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";//send web token  for user authorization
import User from "../models/User.js";

//register user
// async to allow it to run while handling other events.
// request body, and result from backend
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            insuranceStatus,
            lastInteraction,
            stiStatus,
            sexualOrientation,
            sti,
            numInteractions
        } = req.body;

        const salt = await bcrypt.genSalt(); 
        const passwordHash = await bcrypt.hash(password, salt);


        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            insuranceStatus,
            lastInteraction: "05/15/2023",
            stiStatus,
            sexualOrientation,
            sti,
            numInteractions: Math.floor(Math.random() * 4)
        });

        //updating user or new document/user
        const savedUser = new newUser.save();
        //send user 201 (created) status and json verion of saved user data
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};

//login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //using mongoose to find user that has that specified email
        const user = await User.findOne({ email: email});

        //user not found
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        const found = await bcrypt.compare(password, user.password);
        //no pass word
        if (!found) return res.status(400).json({ msg: "User does not exist" });

        //authentication complete, give user token
        const token = jwt.sign({ id: user.id }, procces.env.JWT_SECRET);

        delete user.password;
        res.status(200).json({ token, user });


    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};