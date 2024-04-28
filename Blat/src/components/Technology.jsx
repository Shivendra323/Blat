import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useAuth0 } from "@auth0/auth0-react";

const Technology = () => {
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    // Fetch messages from the backend when the component mounts
    checkUserSubscription();
    fetchMessages();
  }, []);

  const checkSubscriptionStatus = async (channelId, email) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/getSubscriber?channelId=${channelId}&email=${email}`);
      // Check if the user is subscribed to the channel
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking subscription status:', error);
      return false;
    }
  };

  const checkUserSubscription = async () => {
    const channelId = '221287'; // Replace with actual channelId based on srinivasa ramanujan DOB 22 Des=cember 1887
    const email = user.email; // Assuming user.email contains the user's email address
    
    const subscribed = await checkSubscriptionStatus(channelId, email);
    //console.log(subscribed);
    setIsSubscriber(subscribed);
  };

  const fetchMessages = async () => {
    try {
      const channelId = '221287'; // Assuming channelId is 'sports18'
      const response = await axios.get(`http://localhost:5000/api/messages?channelId=${channelId}`);
      console.log(response.data);
      // Map messages to the required format
      const formattedMessages = response.data.map(msgArray => ({
        channelId: msgArray[0],
        userId: msgArray[1],
        message: msgArray[2],
        timestamp: msgArray[3]
      }));
      setMessages(formattedMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleJoinChannel = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/subscribeChannel', {
        channelId: '221287', // Replace with the channelId of the Technology channel
        email: user.email // Assuming user.email contains the user's email address
      });
      
      // Check if the subscription was successful
      if (response.status === 201) {
        setIsSubscriber(true);
        console.log('User subscribed to the Technology channel');
      } else {
        console.error('Failed to subscribe to the Technology channel');
      }
    } catch (error) {
      console.error('Error subscribing to the channel:', error);
    }
  };
  

  const handleSendMessage = async () => {
    try {
      const channelId = '221287'; // Replace with actual channelId
      const userId = user.email; // Replace with actual userId
      const timestamp = Date.now();

      await axios.post('http://localhost:5000/api/send-message', {
        channelId,
        userId,
        message,
        timestamp,
      });
      await fetchMessages(); // Refresh messages after sending a new message
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {!isSubscriber ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleJoinChannel}
            >
              Join this channel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
            <div className="flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    msg.userId === user.email ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`${
                      msg.userId === user.email
                        ? 'bg-blue-500 text-white rounded-tl-lg rounded-br-lg rounded-bl-lg'
                        : 'bg-white text-gray-800 rounded-tr-lg rounded-br-lg rounded-br-lg'
                    } p-3 max-w-xs break-all`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-200">
            <input
              type="text"
              className="flex-1 border rounded-l py-2 px-3 mr-2 focus:outline-none"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Technology;
