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
            "The user is not registered! Please Sign-Up first."
        );
        return userList[pubkey].name;
    }

    // Add Friends
    function addFriend(address friend_key, string calldata name) external {
        require(checkUserExists(msg.sender), "Please Sign-Up first.");
        require(
            checkUserExists(friend_key),
            "Sorry! This user does not exist! Please try again."
        );
        require(
            msg.sender != friend_key,
            "You can't add yourself as a friend!"
        );
        require(
            checkAlreadyFriends(msg.sender, friend_key) == false,
            "The user is already your friend!"
        );

        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }

    // Check if the user is already your friend
    function checkAlreadyFriends(
        address pubkey1,
        address pubkey2
    ) internal view returns (bool) {
        if (
            userList[pubkey1].friendList.length >
            userList[pubkey2].friendList.length
        ) {
            address tmp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = tmp;
        }
        for (uint256 i = 0; i < userList[pubkey1].friendList.length; i++) {
            if (userList[pubkey1].friendList[i].pubkey = pubkey2) {
                return true;
            }
        }
        return false;
    }

    function _addFriend(
        address me,
        address friend_key,
        string memory name
    ) internal {
        friend memory newFriend = friend(friend_key, name);
        userList[me].friendList.push(newFriend);
    }

    //List of my friends

    function listOfMyFriends() external view returns (friend[] memory) {
        return userList[msg.sender].friendList;
    }

    function _getChatCode(
        address pubkey1,
        address pubkey2
    ) internal pure returns (bytes32) {
        if (pubkey1 < pubkey2) {
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        } else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    //Message Sent Function
}
