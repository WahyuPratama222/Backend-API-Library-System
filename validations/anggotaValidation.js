import { validateId } from "../utils/validateIdUtil.js";
import { validateEmail } from "../utils/validateEmailUtil.js";
import { validateString, validateEnum } from "../utils/validateDataUtil.js";

const createValidateAnggota = (data) => {
    const { nama_anggota, jenis_kelamin, email } = data;

    // Nama anggota wajib
    let err = validateString(nama_anggota, "Nama anggota");
    if (err) return err;

    // Jenis kelamin wajib dan harus Laki-laki/Perempuan
    err = validateEnum(jenis_kelamin, "Jenis kelamin", ["Laki-laki", "Perempuan"]);
    if (err) return err;

    // Email opsional, kalau ada harus valid
    if (email) {
        const emailErr = validateEmail(email);
        if (emailErr) return emailErr;
    };

    return null;
};

const updateValidateAnggota = (data, id) => {
    // Validasi ID
    const errId = validateId(id);
    if (errId) return errId;

    const { nama_anggota, jenis_kelamin, email, status_anggota } = data;

    // Nama anggota opsional
    const err = validateString(nama_anggota, "Nama anggota", false);
    if (err) return err;


    // Jenis kelamin opsional
    if (jenis_kelamin !== undefined){
        const err = validateEnum(jenis_kelamin, "Jenis kelamin", ["Laki-laki", "Perempuan"]);
        if (err) return err;
    };

    // Email opsional
    if (email !== undefined) {
        const emailErr = validateEmail(email);
        if (emailErr) return emailErr;
    };

    if (status_anggota !== undefined) {// Opsional, karena defaultnya Aktif}
        const err = validateEnum(status_anggota, "Status Anggota", ["Aktif", "Tidak Aktif"]);
        if (err) return err; 
    }

    return null;
};

export { createValidateAnggota, updateValidateAnggota };