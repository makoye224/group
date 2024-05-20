import React, { useState } from "react";
import ForSaleForm from "./forms/ForSaleForm";
import FeedForm from "./forms/FeedForm";
import CategoryPicker from "./forms/CategoryPicker";
import LostFoundForm from "./forms/LostFoundForm";
import CampusEventsForm from "./forms/CampusEventsForm";
import RoommateForm from "./forms/RoommateForm";


const ListingEditScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderForm = () => {
    switch (selectedCategory) {
      case "For Sale":
        return <ForSaleForm />;
      case "Feed":
        return <FeedForm />;
      case "Roommate":
        return  <RoommateForm />;
      case "Lost & Found":
        return  <LostFoundForm />;
      case "Campus Events":
        return  <CampusEventsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <CategoryPicker onSelectCategory={setSelectedCategory} />
      {renderForm()}
    </div>
  );
};

export default ListingEditScreen;
