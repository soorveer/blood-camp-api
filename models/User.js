import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    admin_id: {
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
