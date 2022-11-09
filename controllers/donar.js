import Donar from "../models/Donar.js"

export const createDonar = async (req, res, next) => {
    const newDonar = new Donar(req.body)

    try {
        const savedDonar = await newDonar.save();
        res.status(200).json(savedDonar);
    } catch (err) {
        next(err);
    }
}

export const updateDonar = async (req, res, next) => {
    try {
        const updateDonar = await Donar.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateDonar);
    } catch (err) {
        next(err);
    }
}

export const updateDonarLocation = async (req, res, next) => {
    const { donarId } = req.params
    const { location } = req.body
    
    let oldDonar
    
    try {
        oldDonar = await Donar.findById({ _id: donarId })
    } catch (err) {
        res.statut(500).json({ message: error.message })
    }
    
    oldDonar.location = [...oldDonar.location, location]
    
    try {
        const updatedDonar = await oldDonar.save()
        res.status(201).json(updatedDonar)
    } catch (err) {
        res.statut(500).json({ message: error.message })
    }
}

export const deleteDonar = async (req, res, next) => {
    try {
        await Donar.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete DONAR success");
    } catch (err) {
        next(err);
    }
}

export const getDonar = async (req, res, next) => {
    try {
        const donar = await Donar.findById(req.params.id)
        res.status(200).json(donar)
    } catch (err) {
        next(err);
    }
}

export const getDonarCamp = async(req,res,next)=>{
    try{
        const camp_id1 = req.params.camp_id;
        const donarN = await Donar.find({camp_id:camp_id1});
        res.status(200).json({data: donarN});
    } catch(err)
    {
        next(err);
    }
}

export const getDonarEjs = async (req, res, next) => {
    try {
        const donar = await Donar.findById(req.params.id)
        res.status(200).render('donar', { donar })
    } catch (err) {
        next(err);
    }
}


export const getDonars = async (req, res, next) => {
    try {
        const donars = await Donar.find();
        res.status(200).json({ data : donars});
    } catch (err) {
        next(err)
    }
}
