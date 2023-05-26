import mongoose from "mongoose";//help setup our model

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type:Array,
            default: []
        },
        insuranceStatus: {
            type: Boolean,
            required: true,
            default: false
        },
        lastInteraction: {
            type: String,
            required: true,
            default: "havent yet"
        },
        stiStatus: {
            type: Boolean,
            default: false,
            required: true
        },
        sexualOrientation: {
            type: String,
            require: true
        },
        sti: {
            type: String,
        },
        numInteractions: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;