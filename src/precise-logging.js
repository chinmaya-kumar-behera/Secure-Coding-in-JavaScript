import fs from "fs";
const trigger = () => {
  const sender = "Uttam Mahanty";
  const receiver = "John Doe";
  const amount = 1000;

  fundTransfer(sender, receiver, amount);
};

const fundTransfer = (sender, receiver, amount) => {
  console.log(" making the transaction");

  setTimeout(() => {
    console.log("Transaction completed");
  }, 2000);

  writeLog(sender, receiver, amount);
};

const writeLog = (sender, receiver, amount) => {
  const timeStamp = new Date();

  const logObject = {
    sender: sender,
    receiver: receiver,
    amount: amount,
  };

  const logResult = fs.appendFile(
    "transaction.log",
    `${timeStamp} - ${JSON.stringify(logObject)}\n`,
    (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      } else {
        console.log("Log written successfully");
      }
    }
  );
};


trigger();