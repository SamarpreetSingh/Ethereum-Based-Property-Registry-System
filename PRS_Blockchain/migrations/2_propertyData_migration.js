const PropertyData = artifacts.require("PropertyData");
const PurchaseAgreement = artifacts.require("PurchaseAgreement");

module.exports = function (deployer) {
  deployer.deploy(PropertyData).then(function () {
    return deployer.deploy(PurchaseAgreement, PropertyData.address);
  });
};
