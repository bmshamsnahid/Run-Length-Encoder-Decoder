let runLengthEncoderDecoder = require('./run-length-encoder-decoder');

runLengthEncoderDecoder.encoder('aabbcccaaaaa', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Encode: ' + result);
        runLengthEncoderDecoder.decoder(result, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Decode: ' + result);
            }
        });
    }
});