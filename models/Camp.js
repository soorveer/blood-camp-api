import mongoose from "mongoose";

const campSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    ngo_id: {
        type:String,
    },
    address: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

export default mongoose.model("campcontents", campSchema)
