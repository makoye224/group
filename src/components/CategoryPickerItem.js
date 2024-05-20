import React from "react";

const CategoryPickerItem = ({ item, onPress }) => (
  <div
    onClick={onPress}
    className={`flex items-center p-4 bg-${item.backgroundColor} text-white rounded cursor-pointer`}
  >
    <i className={`icon-${item.icon} mr-4`}></i>
    <span>{item.label}</span>
  </div>
);

export default CategoryPickerItem;
