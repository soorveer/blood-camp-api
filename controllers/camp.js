import Camp from "../models/Camp.js"

export const createCamp = async (req, res, next) => {
    const newCamp = new Camp(req.body)

    try {
        const savedCamp = await newCamp.save();
        res.status(200).json(savedCamp);
    } catch (err) {
        next(err);
    }
}

export const updateCamp = async (req, res, next) => {
    try {
        const updateCamp = await Camp.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateCamp);
    } catch (err) {
        next(err);
    }
}

export const deleteCamp = async (req, res, next) => {
    try {
        await Camp.findByIdAndDelete(req.params.id);
        res.status(200).json("Camp is deleted");
    } catch (err) {
        next(err);
    }
}

export const getCamp = async (req, res, next) => {
    try {
        const camp = await Camp.findById(req.params.id);
        res.status(200).json(camp);
    } catch (err) {
        next(err);
    }
}

export const getCamps = async (req, res, next) => {
    try {
        const camps = await Camp.find();
        res.status(200).json({data: camps});
    } catch (err) {
        next(err);
    }
}

export const getCampsAd = async (req, res, next) => {
    try {
        const camps1 = await Camp.findOne({mobile: req.params.mobile});
        res.status(200).json(camps1);
    } catch (err) {
        next(err);
    }
}
