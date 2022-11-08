import mongoose from "mongoose";

const ngoSchema = mongoose.Schema({
    Unique_Registration_ID: {
        type: String,
        unique: true,
        required: true,
        primaryKey: true,
    },
    password: {
        type: String,
        required: true
    },
    NGO_Name: {
        type: String,
        required: true,
    },
    NGO_Type: String,
    NGO_Url: String,
    NGO_Address: String,
    NGO_State: String,
    NGO_District: String,

    NGO_PAN_Number: {
        type: String,
        required: true
    },
    CSR_Number: {
        type: String,
        required: true
    }
    

});

export default mongoose.model("ngocontents", ngoSchema);
