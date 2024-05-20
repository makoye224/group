import React from "react";
import { MdThumbUp, MdComment, MdShare, MdMoreVert } from "react-icons/md";
import colors from "../config/colors";


function Card({
  title,
  description,
  subTitle,
  location,
  imageUrl,
  onPress,
  thumbnailUrl,
  displayName, 
  postedAt,
}) {
  // Handler functions for like, comment, and share actions
  const handleLikePress = () => {
    alert("Like action triggered!");
  };

  const handleCommentPress = () => {
    alert("Comment action triggered!");
  };

  const handleSharePress = () => {
    alert("Share action triggered!");
  };

  return (
    <>
      <div className="rounded-lg bg-white mb-5 overflow-hidden shadow-md">
        {/* Profile section */}
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://shorturl.at/rsJK1"
            alt="profile"
          />
          <div className="ml-3">
            <p className="font-bold">{displayName}</p>
            <p className="text-gray-500">{postedAt}</p>
          </div>
          <button className="ml-auto">
            <MdMoreVert size={24} color={colors.medium} />
          </button>
        </div>

        {/* Post details */}
        <div className="p-5">
          <div onClick={onPress} className="cursor-pointer">
            <p className="text-black text-base">{description}</p>
          </div>
          {imageUrl && (
            <div onClick={onPress} className="cursor-pointer mt-3 mb-3">
              <img
                className="w-full object-cover"
                style={{ aspectRatio: "1 / 1" }}
                src={imageUrl}
                alt="post"
              />
            </div>
          )}
          <p className="text-blue-500 mb-3">500000 people liked this</p>
          <div className="flex justify-around">
            {/* Like action */}
            <button onClick={handleLikePress} className="focus:outline-none">
              <MdThumbUp size={24} />
            </button>

            {/* Comment action */}
            <button onClick={handleCommentPress} className="focus:outline-none">
              <MdComment size={24} />
            </button>

            {/* Share action */}
            <button onClick={handleSharePress} className="focus:outline-none">
              <MdShare size={24} />
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Card;
