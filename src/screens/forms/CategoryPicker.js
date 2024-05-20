import React from "react";

const categories = [
  { label: "Feed", value: "Feed" },
  { label: "For Sale", value: "For Sale" },
  { label: "Roommate", value: "Roommate" },
  { label: "Lost & Found", value: "Lost & Found" },
  { label: "Campus Events", value: "Campus Events" },
];

function CategoryPicker({ onSelectCategory }) {
  return (
    <div className="flex space-x-2 mb-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className="p-2 bg-gray-200 rounded"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryPicker;
