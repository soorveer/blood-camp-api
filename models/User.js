import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
);

export default mongoose.model("usercontents", userSchema);
