var encoder = (str, cb) => {
    const myNumber = '1234567890'.split('');
    let newString = '',
        myMap = {},
        currentCharacter = '',
        previousCharacter,
        strArr = str.split(''); // convert the input string to string array

    const strLength = strArr.length;

    // if this is a empty string
    if (strLength <= 0) {
        return cb(null, str);
    }

    previousCharacter = strArr[0];
    newString += strArr[0]; // add the first character to the new string

    for (let index = 0; index < strLength; index++) {
        currentCharacter = strArr[index];

        if (previousCharacter == currentCharacter) {
            if (myMap[currentCharacter]) {
                myMap[currentCharacter] ++;
            } else {
                myMap[currentCharacter]  = 1;
            }
        } else {
            if (myMap[previousCharacter] > 0) {
                newString += myMap[previousCharacter];
                if (myNumber.includes(currentCharacter)) {
                    newString += '/';
                }
            }
            newString += currentCharacter;
            myMap[previousCharacter] = 0;
            previousCharacter = currentCharacter;
            myMap[currentCharacter]  = 1;
        }

    }

    // add the last character number to the new string
    if (myMap[previousCharacter] > 0) {
        newString += myMap[previousCharacter];
        if (myNumber.includes(previousCharacter)) {
            newString += '/';
        }
    }

    cb(null, newString);
};

module.exports = encoder;