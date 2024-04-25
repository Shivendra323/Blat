import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Sports from './sports';
import Cinema from './Cinema';
import Technology from './Technology';
import Travel from './Travel';
import Food from './Food';
//import { getGroups, getMessages } from '../services/blockchain'; // You need to implement these functions

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSport, setIsSportState]=useState(false);
  const [isCinema, setIsCinemaState]=useState(false);
  const [isTechnology, setIsTechnologyState]=useState(false);
  const [isTravel, setIsTravelState]=useState(false);
  const [isFood, setIsFoodState]=useState(false);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if(category==='Sports')
    {
      setIsSportState(true);
      setIsCinemaState(false);
      setIsTechnologyState(false);
      setIsTravelState(false);
      setIsFoodState(false);
    }
    else if(category==='Cinema')
    {
      setIsSportState(false);
      setIsCinemaState(true);
      setIsTechnologyState(false);
      setIsTravelState(false);
      setIsFoodState(false);
    }
    else if(category==='Technology')
    {
      setIsSportState(false);
      setIsCinemaState(false);
      setIsTechnologyState(true);
      setIsTravelState(false);
      setIsFoodState(false);
    }
    else if(category==='Travel')
    {
      setIsSportState(false);
      setIsCinemaState(false);
      setIsTechnologyState(false);
      setIsTravelState(true);
      setIsFoodState(false);
    }
    else if(category==='Food')
    {
      setIsSportState(false);
      setIsCinemaState(false);
      setIsTechnologyState(false);
      setIsTravelState(false);
      setIsFoodState(true);
    }
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
    
    <div className="container mx-auto p-8 h-screen bg-gray-500 mt-[20px] rounded-md">
        <div className="h-full flex overflow-hidden bg-gray-100 rounded-md ">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        <div className="h-screen flex flex-col">
          {/* Sidebar header */}
          <div className="px-4 py-6 flex justify-between items-center">
            <h2 className="text-white font-semibold text-xl">Channels</h2>
            <button
              className="text-white focus:outline-none"
              onClick={() => setSelectedCategory('')}
            >
              {/* <svg
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
              </svg> */}
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
      {isSport &&(
      <>
      <h1 className="text-3xl font-bold mb-4 mx-auto ml-[20px]">Sports</h1>
          <Sports />
      </>
      )}
        {isCinema &&(
      <>
      <h1 className="text-3xl font-bold mb-4 mx-auto ml-[20px]">Cinema</h1>
          <Cinema/>
      </>
        )}
        {isTechnology &&(
          
          <>
         <h1 className="text-3xl font-bold mb-4 mx-auto ml-[20px]">Technology</h1>
          <Technology/>
          </>
        )}
        {isTravel &&(
          <>
          <h1 className="text-3xl font-bold mb-4 mx-auto ml-[20px]">Travel</h1>
          <Travel/>
          </>
        )}
        {isFood &&(
         <>
         <h1 className="text-3xl font-bold mb-4 mx-auto ml-[20px]">Food</h1>

         <Food/>
         </>
        )}
      </div>
    </div>
      
    </div>
  );
};

export default Home;
