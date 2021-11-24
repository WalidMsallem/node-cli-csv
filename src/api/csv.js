const fs = require("fs");

class CSV {
  constructor() {}

  create(data) {
    try {
      fs.writeFileSync("FILE.CSV", data.split("").join(","));
      console.log("CSV created!");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CSV;
