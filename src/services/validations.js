// TODO: Add here the function to validate
const validateGamerTag = (gamerTag) => {
    if (!(gamerTag.length >= 8)) {
        return false;
    }
    if (!/[0-9]/.test(gamerTag)) {
        return false;
    }
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.validateGamerTag = validateGamerTag;
