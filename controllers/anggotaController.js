import { deleteAnggotaService, getAnggotaByIdService, getAnggotaService, patchAnggotaService, postAnggotaService, putAnggotaService } from '../services/anggotaService.js';

const postAnggota = async (req,res) => {
    try{
        const newAnggota = await postAnggotaService(req.body)
        res.status(201).json(newAnggota);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

const getAllAnggota = async (req,res) => {
    try{
        const allAnggota = await getAnggotaService();
        res.status(200).json(allAnggota);
    } catch (error){
        res.status(400).json({message: error.message})
    }
};

const getAnggotaById = async (req, res) => {
    try {
        const { id } = req.params;
        const anggotaById = await getAnggotaByIdService(id);
        res.status(200).json({ data: anggotaById });
    } catch (error) {
        if (error.message === "Anggota tidak ditemukan") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};

const putAnggota = async (req, res) => {
    try {
        const { id } = req.params; // id dari URL
        const data = { ...req.body, id }; // gabungkan id + body
        const upAnggota = await putAnggotaService(data);
        res.status(200).json(upAnggota);
    } catch (error) {
        if (error.message === "Anggota tidak ditemukan") {
            res.status(404).json({ message: error.message });
        } else if (error.message.includes("ID")) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const patchAnggota = async (req,res) => {
    try {
        const { id } = req.params; // id dari URL
        const data = { ...req.body, id }; // gabungkan id + body
        const upAnggota = await patchAnggotaService(data);
        res.status(200).json(upAnggota);
    } catch (error) {
        if (error.message === "Anggota tidak ditemukan") {
            res.status(404).json({ message: error.message });
        } else if (error.message.includes("ID")) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const deleteAnggota = async (req, res) => {
    try {
        const { id } = req.params;
        const anggota = await deleteAnggotaService(id);
        res.status(200).json(anggota);
    } catch (error) {
        if (error.message === "Anggota tidak ditemukan") {
            res.status(404).json({ message: error.message });
        } else if (error.message.includes("ID")) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

export { postAnggota, getAllAnggota, getAnggotaById, putAnggota, patchAnggota, deleteAnggota};