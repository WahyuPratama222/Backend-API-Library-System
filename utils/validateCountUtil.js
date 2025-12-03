const validateCount = (data, fieldname) => {
    if (typeof data !== 'number') {
        return `${fieldname} harus berupa angka`;
    }
    if (data <= 0) {
        return `${fieldname} tidak boleh kurang dari atau sama dengan 0`;
    }
    return null; 
}

export { validateCount };
