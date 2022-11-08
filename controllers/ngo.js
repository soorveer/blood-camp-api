import Ngo from "../models/Ngo.js";

export const createNgo = async (req, res, next) => {
    const newNgo = new Ngo(req.body);

    try {
        const savedNgo = await newNgo.save();
        res.status(200).json(savedNgo);
    } catch (err) {
        next(err);
    }
}

export const updateNgo = async (req, res, next) => {
    try {
        const updateNgo = await Ngo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateNgo);
    } catch (err) {
        next(err);
    }
}

export const deleteNgo = async (req, res, next) => {
    try {
        await Ngo.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete NGO success");
    } catch (err) {
        next(err);
    }
}


export const getNgo = async (req, res, next) => {

    try {
        const ngo = await Ngo.findById(req.params.id);
        res.status(200).json(ngo);
    } catch (err) {
        next(err);
    }
}

export const getNgos = async (req, res, next) => {
    try {
        const ngos = await Ngo.find();
        res.status(200).json({data : ngos});
    } catch (err) {
        next(err);
    }
}

export const sign = async (req,res,next) => {
    const user = req.params.user;
    const password = req.params.password;
    try{
        const ngol=await Ngo.find({Unique_Registration_ID:user,password:password});
         res.status(200).json(ngol);
    } catch(err){
        next(err);
    }
    
}

// export const signin = async(req,res,next)=>{
//     try{
//         const ngo = await Ngo.find({Unique_Registration_ID:req.params.user,password:req.params.password});
//         if(donar != null)
//         {
//             res.send({"success":1});
//         }
//         else
//         {
//             res.send({"success:0});
//         }
//     } catch(err){
//                 next(err);
//             }
// }

export const getNgoReg = async(req,res,next)=>{
    try{
        const ngo1 = await Ngo.findOne({Unique_Registration_ID : req.params.reg});
        if(ngol == null)
        {
            res.send({"success":false});
        }
        res.status(200).json(ngo1);
    }catch(err){
        next(err);
    }
}

