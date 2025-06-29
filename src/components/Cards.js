import React from 'react';
import Card from './Card';
import { toast } from 'react-toastify';


const Cards = ({ courses }) => {
  if (!courses) {
    return  <p className="text-white text-lg text-center ">🔄 Loading...</p>


  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-4 max-w-[1300px] mx-auto transition-all duration-300 ease-in-out">
      {courses.length === 0 ? (
        <p className="text-white text-lg font-medium">No courses found.</p>
      ) : (
        courses.map((course) => (
          <Card key={course.id} course={course} />
        ))
      )}
    </div>
  );
};

export default Cards;
