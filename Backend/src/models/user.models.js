import mongoose, { Schema } from 'mongoose';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// define user schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    habits: [
        {
            type: Schema.Types.ObjectId,
            ref: "Habit"
        }
    ],
}, { timestamps: true });


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

//checking password 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return JWT.sign({
        _id: this._id,
        email: this.email,
        name: this.name
    },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_SECRET_KEY_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return JWT.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOEKN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOEKN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)