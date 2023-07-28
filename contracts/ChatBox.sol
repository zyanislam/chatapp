//Smart Contract

// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ChatBox {
    struct user {
        string name;
        friend[] friendList;
    }
    struct friend {
        address pubkey;
        string name;
    }
    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    // Create User
    function createUser(string calldata name) external {
        require(checkUserExists(msg.sender) == false, "User Exists");
        require(bytes(name).length > 0, "The username cannot be empty!");

        userList[msg.sender].name = name;
    }

    // Authenticate User
    function checkUserExists(address pubkey) public view returns (bool) {
        return bytes(userList[pubkey].name).length > 0;
    }

    // Get Username
    function getUsername(address pubkey) external view returns (string memory) {
        require(
            checkUserExists(pubkey),
            "The user is not registered! Please Sign-Up first"
        );
        return userList[pubkey].name;
    }
}
