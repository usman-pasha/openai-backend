module.exports.info = (message) => {
  console.log("INFO:" + message);
};

module.exports.data = (message, data) => {
  console.log("DATA:" + message);
  console.log(data);
};

module.exports.error = (message, error) => {
  console.log("ERROR:" + message);
  console.log(error);
};

module.exports.success = (message) => {
  console.log("SUCCESS:" + message);
};
