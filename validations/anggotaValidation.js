import { validateId } from "../utils/validateId.js";
import { validateEmail } from "../utils/validateEmail.js";

const createValidateAnggota = (data) => {
    const { nama_anggota, jenis_kelamin, email } = data;

    if (!nama_anggota || typeof nama_anggota !== "string") {
        return "Nama anggota wajib diisi dan harus berupa string";
    }

    if (!["Laki-laki", "Perempuan"].includes(jenis_kelamin)) {
        return "Jenis kelamin harus 'Laki-laki' atau 'Perempuan'";
    }

    if (email) {
        const err = validateEmail(email);
        if (err) return err;
    }

    return null;
} 

const updateValidateAnggota = (data, id) => {
    const errId = validateId(id);
    if (errId) return errId;

    const { nama_anggota, jenis_kelamin, email } = data;

    if (nama_anggota && typeof nama_anggota !== "string") {
        return "Nama harus berupa string";
    }

    if (jenis_kelamin && !["Laki-laki", "Perempuan"].includes(jenis_kelamin)) {
        return "Jenis kelamin tidak valid";
    }

    if (email) {
        const err = validateEmail(email);
        if (err) return err;
    }

    return null;
}

export {createValidateAnggota, updateValidateAnggota};