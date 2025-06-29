import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Card = ({ course }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => {
      const newState = !prev;
      toast(newState ? "❤️ Added to liked courses" : "💔 Removed from liked courses", {
        position: "top-right",
        autoClose: 1200,
        theme: "dark",
      });
      return newState;
    });
  };

  return (
    <div className="w-[300px] bg-slate-600 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={course.image.url}
          className="w-full h-40 object-cover"
          alt={course.title}
        />
        <div>
          <button
            onClick={toggleLike}
            className="absolute right-2 -bottom-2.5 bg-white p-2 rounded-full shadow hover:scale-110 transition-transform"
            aria-label="like"
          >
            <AiFillHeart fontSize="1.25rem" color={liked ? 'red' : '#fbcfe8'} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <p className="font-semibold text-lg text-white">{course.title}</p>
        <p className="text-white text-sm mt-auto">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
