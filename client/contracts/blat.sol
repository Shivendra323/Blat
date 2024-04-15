// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract HelloWorld {
//     string public greeting;

//     constructor() {
//         greeting = "Hello, World!";
//     }

//     function getGreeting() public view returns (string memory) {
//         return greeting;
//     }
// }

// SPDX-License-Identifier: MIT

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blat {
    // State variables
    address public owner; // Address of the contract owner
    uint256 public subscriptionFee; // Fee for subscription
    uint256 public messageLimit; // Limit of messages per subscription period

    // Structs
    struct UserProfile {
        string username; // Username of the user
        string email; // Email of the user
        bool isSubscribed; // Flag indicating if the user is subscribed
        // Additional user profile fields
        string profilePicture;
        string bio;
    }

    struct SubscriptionPlan {
        uint256 id; // ID of the subscription plan
        string name; // Name of the subscription plan
        uint256 price; // Price of the subscription plan
        uint256 duration; // Duration of the subscription plan in days
        string[] features; // Features of the subscription plan
        // Additional subscription plan details
        uint256 startDate;
        uint256 endDate;
        uint256 maxMessages;
    }

    struct Message {
        address sender; // Address of the sender
        address recipient; // Address of the recipient
        string content; // Content of the message
        uint256 timestamp; // Timestamp of when the message was sent
    }

    // Mappings
    mapping(address => UserProfile) public userProfiles; // Mapping of user addresses to their profiles
    SubscriptionPlan[] public subscriptionPlans; // Array of subscription plans
    mapping(address => Message[]) public userMessages; // Mapping of user addresses to their messages

    // Events
    event UserRegistered(address indexed user, string username, string email); // Event emitted when a new user is registered
    event SubscriptionChanged(address indexed user, bool isSubscribed); // Event emitted when a user's subscription status changes
    event MessageSent(address indexed sender, address indexed recipient, string content); // Event emitted when a message is sent

    // Constructor
    constructor() {
        owner = msg.sender; // Set the contract owner to the address that deployed the contract
        subscriptionFee = 0.000000000000001 ether; // Example subscription fee in ether
        messageLimit = 100; // Example message limit per subscription period
    }

    // Function to register a new user
    function registerUser(string memory _username, string memory _email) external {
        // Check if username and email are not empty and user is not already registered
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(_email).length > 0, "Email cannot be empty");
        require(bytes(userProfiles[msg.sender].username).length == 0, "User already registered");

        // Create user profile and emit UserRegistered event
        userProfiles[msg.sender] = UserProfile(_username, _email, false, "", "");
        emit UserRegistered(msg.sender, _username, _email);
    }

    // Function to subscribe to a plan
    function subscribeToPlan(uint256 _planId) external payable {
        // Check if plan ID is valid and user has sent enough funds
        require(_planId < subscriptionPlans.length, "Invalid plan ID");
        require(msg.value >= subscriptionPlans[_planId].price, "Insufficient funds");

        // Update user's subscription status and emit SubscriptionChanged event
        userProfiles[msg.sender].isSubscribed = true;
        emit SubscriptionChanged(msg.sender, true);
    }

    // Function to send a message
    function sendMessage(address _recipient, string memory _content) external {
        // Check if user is subscribed and message limit is not exceeded
        require(userProfiles[msg.sender].isSubscribed, "User is not subscribed");
        require(userMessages[msg.sender].length < messageLimit, "Message limit exceeded");

        // Add message to user's message list and emit MessageSent event
        userMessages[msg.sender].push(Message(msg.sender, _recipient, _content, block.timestamp));
        emit MessageSent(msg.sender, _recipient, _content);
    }

    // Function to get user's message count
    function getMessageCount(address _user) external view returns (uint256) {
        return userMessages[_user].length; // Return the number of messages for the specified user
    }

    // Function to withdraw contract balance
    function withdrawBalance() external {
        require(msg.sender == owner, "Only owner can withdraw"); // Ensure only the owner can withdraw
        payable(msg.sender).transfer(address(this).balance); // Transfer the contract's balance to the owner
    }

    // Fallback function to receive ether
    receive() external payable {}

    // Function to add a new subscription plan
    function addSubscriptionPlan(
        uint256 _id,
        string memory _name,
        uint256 _price,
        uint256 _duration,
        string[] memory _features,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _maxMessages
    ) external {
        subscriptionPlans.push(SubscriptionPlan(_id, _name, _price, _duration, _features, _startDate, _endDate, _maxMessages)); // Add the new subscription plan to the array
    }

    // Function to update subscription fee by owner
    function updateSubscriptionFee(uint256 _newFee) external {
        require(msg.sender == owner, "Only owner can update subscription fee"); // Ensure only the owner can update subscription fee
        subscriptionFee = _newFee;
    }

    // Function to update message limit by owner
    function updateMessageLimit(uint256 _newLimit) external {
        require(msg.sender == owner, "Only owner can update message limit"); // Ensure only the owner can update message limit
        messageLimit = _newLimit;
    }
}


