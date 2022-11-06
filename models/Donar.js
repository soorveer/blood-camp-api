import mongoose from "mongoose";

const donarSchema = mongoose.Schema({
    aadhar: {
        type: String,
        required: true,
        unique: true,
        primaryKey: true,
    },
    donarname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    mobile: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    times: {
        type: Number,
    },

    address: {
        type: String,
        required: true
    },
    location: [{
    type: String
        }],
    orgId: {
        type: String,
        required: true
    }
});

export default mongoose.model("donarcontents", donarSchema);
