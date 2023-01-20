// TODO: Add here the function to validate
const validateGamerTag = (gamerTag) => {
    if (gamerTag.length >= 8) {
        return true;
    }
    return false;
};

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.validateGamerTag = validateGamerTag;
