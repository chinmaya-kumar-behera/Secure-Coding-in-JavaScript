// const fs = require("fs");
import fs from "fs";

const trigger = () => {
  try {
    const fileData = fs.readFileSync("src/data/data.txt", "utf-8");
    const deSerializedData = insecureDeserialize(fileData);
    console.log("De-serialized Data:", deSerializedData);
  } catch (err) {
    console.log(err);
  }
};

const insecureDeserialize = (data) => {
  return eval(`(${data})`); // insecure deserialize with eval
};

trigger();
