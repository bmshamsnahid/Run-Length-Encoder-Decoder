Run Length Encoder Decoder
=========

A small library that endcode and decode words using Run Length Algorithm

## Installation

  `npm i run-length-encoder-decoder --save`

## Usage

    let runLengthEncoderDecoder = require('run-length-encoder-decoder');
    
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
  
  
  Encoder Output should be `a2b2c3a5`  
  Decoder Output should be `aabbcccaaaaa`
