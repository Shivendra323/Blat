const { Sports, Travel, Food, Technology, Cinema } = require('../Model/subscriberSchema');

const SubscribeChannel = async (req, res) => {
  const { channelId, email } = req.body;
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

    // Check if the email is already subscribed to the channel
    const existingSubscriber = await subscriberModel.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email is already subscribed to the channel' });
    }

    // Create a new subscriber document and save it
    const newSubscriber = new subscriberModel({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing to channel:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { SubscribeChannel };
