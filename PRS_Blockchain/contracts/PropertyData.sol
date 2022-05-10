// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract PropertyData {
        struct Property {
            address _owner;
            uint256 _area;
            uint256 _price;
            int _pin;
            string _district;
            string _state;
            bool _isVerified;
        }

        string public name;

        mapping (uint => string) public names;
        uint c =  0;

        function setName(string memory _name) public returns(bool) {
            c++;
            names[c] = _name;
            return true;
        }

        mapping (uint => Property) public property;
        uint256 public count = 0;

        function addProperty(address owner, uint256 area, uint256 price, int pin, string memory district, string memory _state) public
        {
            count++;
            property[count] = Property(owner, area, price, pin, district, _state, false);
        }

        function verifyProperty(uint256 propertyId) public
        {
            property[propertyId]._isVerified = true;
        }

        function transferOwnership(uint256 propertyId, address owner) public
        {
            property[propertyId]._owner = owner;
        }
}