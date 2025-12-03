const validateId = (id) => {
    const errorNull = validateNull(id, "ID");
    if (errorNull) return errorNull;

    const parsed = Number(id);
    if (!Number.isInteger(parsed) || parsed <= 0) {
        return "ID harus berupa angka valid";
    }
        
    return null;
};

export { validateId };
