import mongoose from "mongoose";

const donarSchema = mongoose.Schema({
    
    camp_id: {
        type: String,
    },
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
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    times: {
        type: String,
    },

    address: {
        type: String,
        required: true
    },
    location: [{
    type: String
        }]
   
});

export default mongoose.model("donarcontents", donarSchema);
