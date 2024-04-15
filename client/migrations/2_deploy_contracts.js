// const HelloWorld = artifacts.require("HelloWorld");

// module.exports = function (deployer) {
//   deployer.deploy(HelloWorld);
// };

const Blat = artifacts.require("Blat");

module.exports = function (deployer) {
  deployer.deploy(Blat);
};
