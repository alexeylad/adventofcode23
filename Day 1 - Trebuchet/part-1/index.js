const fs = require('fs');

fs.readFile('input', function (err, dataRaw) {
    let calibration = 0;
    const data = dataRaw.toString().split('\n');
       
    const result = data.map((str) => {
        const matches = str.match(/\d/g);
        calibration += parseInt(matches[0] + matches[matches.length - 1]);
    })
    
    console.log(calibration)
});
