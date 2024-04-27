// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blat {
    struct User {
        string email;
        bool isRegistered;
        mapping(string => bool) subscribedChannels;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed user, string email);
    event UserSubscribed(address indexed user, string channel);
    event LatestFeedRequested(address indexed user, string channel);

    function register(string memory _email) external {
        require(!users[msg.sender].isRegistered, "User already registered");
        users[msg.sender].email = _email;
        users[msg.sender].isRegistered = true;
        emit UserRegistered(msg.sender, _email);
    }

    function subscribe(string memory _channel) external {
        require(users[msg.sender].isRegistered, "User not registered");
        users[msg.sender].subscribedChannels[_channel] = true;
        emit UserSubscribed(msg.sender, _channel);
    }

    function requestLatestFeed(string memory _channel) external {
        require(users[msg.sender].isRegistered, "User not registered");
        require(
            users[msg.sender].subscribedChannels[_channel],
            "User not subscribed to channel"
        );
        // Emit an event to trigger the off-chain service to send the latest feed via email
        emit LatestFeedRequested(msg.sender, _channel);
    }
}
