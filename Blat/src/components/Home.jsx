import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
//import { getGroups, getMessages } from '../services/blockchain'; // You need to implement these functions

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const { isAuthenticated } = useAuth0();
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch groups from the blockchain when the component mounts
    fetchGroups();
  }, []);

  useEffect(() => {
    // Fetch messages when a group is selected
    if (selectedGroup) {
      fetchMessages(selectedGroup);
    }
  }, [selectedGroup]);

  const fetchGroups = async () => {
    // Implement fetching groups from blockchain
    const fetchedGroups = await getGroups();
    setGroups(fetchedGroups);
  };

  const fetchMessages = async (groupId) => {
    // Implement fetching messages for a group from blockchain
    const fetchedMessages = await getMessages(groupId);
    setMessages(fetchedMessages);
  };

  const handleGroupSelect = (groupId) => {
    setSelectedGroup(groupId);
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen bg-gray-500 mt-[20px] rounded-md">
        <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        <div className="h-screen flex flex-col">
          {/* Sidebar header */}
          <div className="px-4 py-6 flex justify-between items-center">
            <h2 className="text-white font-semibold text-xl">Sidebar</h2>
            <button
              className="text-white focus:outline-none"
              onClick={() => setSelectedCategory('')}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Sidebar content */}
          <div className="overflow-y-auto">
            <ul>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  selectedCategory === 'Sports' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleCategoryClick('Sports')}
              >
                Sports
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  selectedCategory === 'Cinema' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleCategoryClick('Cinema')}
              >
                Cinema
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  selectedCategory === 'Technology' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleCategoryClick('Technology')}
              >
                Technology
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  selectedCategory === 'Travel' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleCategoryClick('Travel')}
              >
                Travel
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  selectedCategory === 'Food' ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleCategoryClick('Food')}
              >
                Food
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Your main content here */}
      </div>
    </div>
      
    </div>
  );
};

export default Home;
