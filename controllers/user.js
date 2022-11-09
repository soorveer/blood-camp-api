import User from "../models/User.js"

export const signin = async (req,res,next) => {
    const admin = req.params.admin;
    const password = req.params.password;
    try{
        const admin1=await Ngo.find({admin_id:admin,password:password});
        if(adminl[0] == null)
        {
            res.send({"success":false});
        }
        else{
            res.send({"success":true});
        }
//          res.status(200).json(ngol);
    } catch(err){
        next(err);
    }
    
}
