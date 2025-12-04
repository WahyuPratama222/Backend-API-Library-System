import Buku from "../models/Buku.js";
import { validateId } from "../utils/validateIdUtil.js";
import { createValidateBuku, updateOptionalValidateBuku, updateRequiredValidateBuku } from "../validations/bukuValidation";

const postBukuService = async (data) => {
    const bukuData = {
        judul_buku: data.judul_buku,
        nama_penerbit: data.nama_penerbit,
        nama_penulis: data.nama_penulis,
        jumlah_halaman: data.jumlah_halaman,
        jumlah_buku: data.jumlah_buku
    };

    const err = createValidateBuku(bukuData)
    if (err) throw new Error(err);

    const buku = await Buku.create(bukuData);
    return buku;
};

const getBukuService = async () => {
    const buku = await Buku.findAll();
    return buku;
};

const getBukuByIdService = async (id) => {

    const errId = validateId(id);
    if (errId) throw new Error(errId);

    const buku = await Buku.findByPk(id);
    if (!buku) throw new Error("Buku tidak ditemukan");

    return buku;
}

const putBukuService = async (data) => {
    const { id } = data;
    
    const errId = validateId(id);
    if (errId) throw new Error(errId);


    const bukuData = {
        judul_buku: data.judul_buku,
        nama_penerbit: data.nama_penerbit,
        nama_penulis: data.nama_penulis,
        jumlah_halaman: data.jumlah_halaman,
        jumlah_buku: data.jumlah_buku
    };

    const buku = await Buku.findByPk(id);
    if (!buku) throw new Error("Buku tidak ditemukan");

    const errUpdate = updateRequiredValidateBuku(bukuData);
    if (errUpdate) throw new Error(errUpdate);

    await buku.update(bukuData);

    return buku;
    
};

const patchBukuService = async (data) => {
    const { id } = data;
    
    const errId = validateId(id);
    if (errId) throw new Error(errId);


    const bukuData = {
        judul_buku: data.judul_buku,
        nama_penerbit: data.nama_penerbit,
        nama_penulis: data.nama_penulis,
        jumlah_halaman: data.jumlah_halaman,
        jumlah_buku: data.jumlah_buku
    };
    
    const buku = await Buku.findByPk(id);
    if (!buku) throw new Error("Buku tidak ditemukan");

    const err = updateOptionalValidateBuku(bukuData);
    if (err) throw new Error(err);

    const updateFields = {};
    for (const key in bukuData) {
        if (bukuData[key] !== undefined) {
            updateFields[key] = bukuData[key];
        };
    };

    if (Object.keys(updateFields).length === 0) {
        throw new Error("Tidak ada field yang diupdate");
    };

    await buku.update(updateFields);
    return buku;
};

const deleteBukuService = async (id) => {
    const errId = validateId(id);
    if (errId) throw new Error(errId);


   const buku = await Buku.findByPk(id);
    if (!buku) throw new Error("Buku tidak ditemukan");

    await buku.destroy(); 
    return buku;
};

export {postBukuService, getBukuService, getBukuByIdService, putBukuService, patchBukuService, deleteBukuService}