// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChannelChat {
    struct Message {
        uint256 channelId;
        string userId; // Modified to string type
        string message;
        uint256 timestamp;
    }

    mapping(uint256 => Message[]) private messages;

    event MessageSent(uint256 indexed channelId, string indexed userId, string message, uint256 timestamp); // Modified userId to string

    function sendMessage(uint256 _channelId, string memory _userId, string memory _message) external {
        uint256 timestamp = block.timestamp;
        Message memory newMessage = Message(_channelId, _userId, _message, timestamp);
        messages[_channelId].push(newMessage);
        emit MessageSent(_channelId, _userId, _message, timestamp);
    }

    function getMessages(uint256 _channelId) external view returns (Message[] memory) {
        return messages[_channelId];
    }
}
