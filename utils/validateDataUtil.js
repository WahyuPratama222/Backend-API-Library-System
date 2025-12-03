const validateString = (value, fieldName, required = true) => {
    if (required) {
        if (value === undefined || value === null || value === "") {
            return `${fieldName} wajib diisi`;
        }
    } else {
        if (value === undefined) return null; 
        if (value === null || value === "") {
            return `${fieldName} tidak boleh kosong`;
        }
    }

    if (typeof value !== "string") {
        return `${fieldName} harus berupa string`;
    }

    return null;
};

const validateEnum = (value, fieldName, allowedValues) => {
    if (value === undefined || value === null || value === "") {
        return `${fieldName} wajib diisi`;
    }
    if (!allowedValues.includes(value)) {
        return `${fieldName} harus salah satu dari: ${allowedValues.join(", ")}`;
    }
    return null;
};

const validateInt = (value, fieldName) => {
    if (value === undefined || value === null || value === "") {
        return `${fieldName} wajib diisi`;
    }

    const num = Number(value);

    if (!Number.isInteger(num)) {
        return `${fieldName} harus berupa integer`;
    }

    return null;
};

export { validateString, validateEnum, validateInt }; 