import Anggota from "../models/Anggota.js";
import { createValidateAnggota} from "../validations/anggotaValidation.js";

const createAnggotaService = async (data) => {
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
export { createAnggotaService };