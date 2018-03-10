var decoder = (str, cb) => {
    const strArr = str.split(''),
        myNumber = '1234567890'.split(''),
        strLength = strArr.length;
    let newString = '';

    for (let index = 0; index < strLength; index++) {
        let number = 1;
        const character = strArr[index];

        if (index < strLength - 1 && myNumber.includes(strArr[index + 1])) {
            number = parseInt(strArr[index + 1]);
            index++;
        }

        addChar(newString, character, number, (str) => {
            newString = str;
        });
    }

    cb(null, newString);
};

var addChar = (str, character, number, cb) => {
    for (let index = 0; index < number; index++) {
        str += character;
    }
    cb(str);
};

module.exports = decoder;