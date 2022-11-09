import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    admin_id: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
    

});

export default mongoose.model("admincontents", adminSchema);
