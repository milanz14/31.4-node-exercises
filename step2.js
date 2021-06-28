const fs = require("fs");
const axios = require("axios");
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

const webCat = async (URL) => {
    try {
        let res = await axios.get(URL);
        console.log(res.data);
    } catch (err) {
        console.log(err, "Something went wrong. Does this page exist?");
        process.exit(1);
    }
};

if (path.slice(0, 4) === "http") {
    webCat(path);
} else {
    cat(path);
}

// cat();
// webCat();
