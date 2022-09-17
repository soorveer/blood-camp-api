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
        res.status(200).json(ngos);
    } catch (err) {
        next(err);
    }
}