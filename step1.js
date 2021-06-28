const fs = require('fs')
const path = process.argv[2];

function cat() {
    fs.readFile(path, 'utf-8', (err,data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data);
    });
}

cat();