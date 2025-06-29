import React from 'react';

const Filter = ({ filterData, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => setSelectedCategory(data.title)}
          className={`px-4 py-2 rounded-lg font-medium transition duration-300
            ${selectedCategory === data.title
              ? "bg-indigo-900 text-black"
              : "bg-deepBlue text-white hover:bg-slate-700"}`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
