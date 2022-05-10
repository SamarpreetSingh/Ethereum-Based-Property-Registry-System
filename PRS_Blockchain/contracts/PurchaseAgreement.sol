// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;


contract PurchaseAgreement {
    uint256 public value;
    uint256 public propertyId;
    address payable public buyer;
    address payable public seller;

    address public propertyContract;

    enum State {Created, Locked, Release, Inactive}
    State public state;


    constructor(address contractAddress) payable {
        seller = payable(msg.sender);
        value = msg.value;
        propertyContract = contractAddress;
    }

    error InvalidState();

    error OnlyBuyer();

    error OnlySeller();

    modifier inState(State state_)
    {
        if(state != state_)
        {
            revert InvalidState();
        }
        else{
            _;
        }
    }

    modifier onlyBuyer
    {
        if(msg.sender != buyer)
        {
            revert OnlyBuyer();
        }
        else{
            _;
        }
    }

    modifier onlySeller
    {
        if(msg.sender != seller)
        {
            revert OnlySeller();
        }
        else{
            _;
        }
    }

    function setProperty(uint _value, uint256 _propertyId) public
    {
        value = _value;
        propertyId = _propertyId;
    }

    function confirmPurchase() external inState(State.Created) payable {
        require(msg.value == value, "Insufficient Funds Sent!");
        buyer = payable(msg.sender);
        state = State.Locked;
    }

    function confirmRelease() external inState(State.Locked) {
        state = State.Release;
    }

    function paySeller()  external inState(State.Locked) onlySeller payable {
        state = State.Inactive;
        PropertyData callee = PropertyData(propertyContract);
        callee.transferOwnership(propertyId, buyer);
        seller.transfer(value);
    }
}

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