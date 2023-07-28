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
        string message;
    }

    mapping(address => user) userList;
    mapping(bytes => user) userList;
}