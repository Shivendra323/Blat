const { Sports, Travel, Food, Technology, Cinema } = require('../Model/subscriberSchema');

const getChannelSubscriber = async (req, res) => {
  const { channelId, email } = req.query; // Use req.query to get channelId and email from query parameters
  console.log(req.body);
  
  try {
    let subscriberModel;

    // Determine which channel's model to use based on channelId
    switch (channelId) {
      case '180710':
        subscriberModel = Sports;
        break;
      case '170362':
        subscriberModel = Travel;
        break;
      case '241075':
        subscriberModel = Food;
        break;
      case '221287':
        subscriberModel = Technology;
        break;
      case '191301':
        subscriberModel = Cinema;
        break;
      default:
        return res.status(400).json({ message: 'Invalid channelId' });
    }

    // Find the subscriber document for the given email and channel
    const existingSubscriber = await subscriberModel.findOne({ email });
    if (existingSubscriber) {
      return res.status(200).json({ message: 'User is subscribed to the channel' });
    } else {
      return res.status(404).json({ message: 'User is not subscribed to the channel' });
    }
  } catch (error) {
    console.error('Error checking subscriber:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getChannelSubscriber };
