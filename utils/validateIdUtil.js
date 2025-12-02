export const validateId = (id) => {
    if (!id) return "ID wajib diisi";
        
    const parsed = Number(id);
        
    if (!Number.isInteger(parsed) || parsed <= 0) {
        return "ID harus berupa angka valid";
    }
        
    return null;
};
