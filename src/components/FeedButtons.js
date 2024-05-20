import React from 'react';
import { MdPostAdd, MdTag, MdSearch, MdEvent, MdHome } from 'react-icons/md'; // Import icons
import IconButton from './IconButton';
import routes from '../navigation/routes';
import { useNavigate } from 'react-router-dom';

const FeedButtons = () => {
    const navigate = useNavigate();
  const buttonData = [
    { 
      iconName: MdPostAdd, // Use the actual icon component
      buttonText: 'Add Post', 
      screen: "post",
    },
    { 
        iconName: MdPostAdd, // Use the actual icon component
        buttonText: 'All Posts', 
        screen: "",
      },
    { 
      iconName: MdTag, // Use the actual icon component
      buttonText: 'For Sale', 
      screen: routes.FORSALE,
    },
    { 
      iconName: MdSearch, // Use the actual icon component
      buttonText: 'Lost & Found', 
      screen: routes.LOSTFOUND,
    },
    { 
      iconName: MdEvent, // Use the actual icon component
      buttonText: 'Campus Events', 
      screen: routes.CAMPUS_EVENTS,
    },
    { 
      iconName: MdHome, // Use the actual icon component
      buttonText: 'Roommate', 
      screen: routes.ROOMMATE,
    },
  ];

  return (
    <div className="flex overflow-x-auto mb-2 w-full p-2">
      {buttonData.map((button, index) => (
        <IconButton 
          key={index} 
          iconName={button.iconName} 
          buttonText={button.buttonText} 
          onClick={() => navigate(`/${button.screen}`)}
        />
      ))}
    </div>
  );
};

export default FeedButtons;
