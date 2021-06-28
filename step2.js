const fs = require("fs");
const axios = require("axios");
const path2 = process.argv[3];
const path = process.argv[2];

const cat = () => {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            process.kill(1);
        }
        console.log(data);
    });
};

const webCat = async () => {
    try {
        let data = await axios.get(path2);
        console.log(data);
    } catch (err) {
        console.log(err, "Something went wrong. Does this page exist?");
        process.exit(1);
    }
};

cat();
webCat();
