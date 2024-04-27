// const HelloWorld = artifacts.require("HelloWorld");

// module.exports = function (deployer) {
//   deployer.deploy(HelloWorld);
// };

const ChannelChat = artifacts.require("ChannelChat");

module.exports = function (deployer) {
  deployer.deploy(ChannelChat);
};
