import mongoose from "mongoose";

const campSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },

    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

export default mongoose.model("campcontents", campSchema)
