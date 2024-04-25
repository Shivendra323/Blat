import React, { useState } from 'react';

const Travel = () => {
  const [isSubscriber, setIsSubscriber] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'User1', content: 'Hello!' },
    { sender: 'User2', content: 'Hi there!' },
    { sender: 'User1', content: 'How are you?' },
    { sender: 'User2', content: 'I am good, thanks!' },
  ]);

  const handleJoinChannel = () => {
    setIsSubscriber(false);
    console.log("User joined the Travel channel");
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'User', content: message }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {isSubscriber ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            {/* <h1 className="text-3xl font-bold mb-4">Travel</h1> */}
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
                    msg.sender === 'User' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`${
                      msg.sender === 'User'
                        ? 'bg-blue-500 text-white rounded-tl-lg rounded-br-lg rounded-bl-lg'
                        : 'bg-white text-gray-800 rounded-tr-lg rounded-br-lg rounded-br-lg'
                    } p-3 max-w-xs break-all`}
                  >
                    {msg.content}
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

export default Travel;
