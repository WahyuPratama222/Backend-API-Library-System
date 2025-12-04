import Anggota from "../models/Anggota.js";
import { validateId } from "../utils/validateIdUtil.js";
import { createValidateAnggota, updateOptionalValidateAnggota, updateRequiredValidateAnggota} from "../validations/anggotaValidation.js";

const postAnggotaService = async (data) => {
    // Mapping frontend key → DB key
    const anggotaData = {
        nama_anggota: data.nama_anggota,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        no_telp: data.no_telp,
        email: data.email,
        status_anggota: data.status_anggota,
    };

    // Validasi DB-ready data
    const err = createValidateAnggota(anggotaData);
    if (err) throw new Error(err);

    const anggota = await Anggota.create(anggotaData);
    return anggota;
};

const getAnggotaService = async () => { 
    const anggota = await Anggota.findAll();
    return anggota;   
}

const getAnggotaByIdService = async (id) => {

    const errId = validateId(id);
    if (errId) throw new Error(errId);

    const anggota = await Anggota.findByPk(id);
    if (!anggota) throw new Error("Anggota tidak ditemukan");

    return anggota;
};

const putAnggotaService = async (data) => {
    const { id } = data;

    const errId = validateId(id);
    if (errId) throw new Error(errId);

    const anggotaData = {
        nama_anggota: data.nama_anggota,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        no_telp: data.no_telp,
        email: data.email,
        status_anggota: data.status_anggota,
    };    
    
    const anggota = await Anggota.findByPk(id);
    if (!anggota) throw new Error("Anggota tidak ditemukan");

    const errUpdate = updateRequiredValidateAnggota(anggotaData);
    if (errUpdate) throw new Error(errUpdate);

    await anggota.update(anggotaData);

    return anggota;
};


const patchAnggotaService = async (data) => {
    const { id } = data;

    const errId = validateId(id);
    if (errId) throw new Error(errId);

    const anggotaData = {
        nama_anggota: data.nama_anggota,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        no_telp: data.no_telp,
        email: data.email,
        status_anggota: data.status_anggota,
    };

    const anggota = await Anggota.findByPk(id);
    if (!anggota) throw new Error("Anggota tidak ditemukan");

    const err = updateOptionalValidateAnggota(anggotaData);
    if (err) throw new Error(err);

    const updateFields = {};
    for (const key in anggotaData) {
        if (anggotaData[key] !== undefined) {
            updateFields[key] = anggotaData[key];
        }
    }

    if (Object.keys(updateFields).length === 0) {
        throw new Error("Tidak ada field yang diupdate");
    }

    await anggota.update(updateFields);
    return anggota;
};

const deleteAnggotaService = async (id) => {
    const errId = validateId(id);
    if (errId) throw new Error(errId);

   const anggota = await Anggota.findByPk(id);
    if (!anggota) throw new Error("Anggota tidak ditemukan");

    await anggota.destroy(); // langsung hapus record ini

    return anggota;
};

export { postAnggotaService, getAnggotaService, getAnggotaByIdService,putAnggotaService, patchAnggotaService, deleteAnggotaService };