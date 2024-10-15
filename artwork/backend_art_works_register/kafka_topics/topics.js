const fs = require("fs");
const Kafka = require("node-rdkafka");

function readConfig(fileName) {
    const data = fs.readFileSync(fileName, "utf8").toString().split("\n");
    return data.reduce((config, line) => {
        const [key, value] = line.split("=");
        if (key && value) {
            config[key.trim()] = value.trim(); // Trim whitespace
        }
        return config;
    }, {});
}