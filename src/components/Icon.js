import React from "react";
import { MdHome } from "react-icons/md"; // Example icon from Material Design Icons

function Icon({
  name: IconComponent,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      }}
    >
      <IconComponent size={size * 0.5} color={iconColor} />
    </div>
  );
}

export default Icon;
