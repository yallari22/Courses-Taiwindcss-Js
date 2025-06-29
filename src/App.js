import logo from './logo.svg';
import react, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => { 
  
  const [courses, setCourses] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Transform the grouped courses into a flat array
      const allCourses = [];
      for (const category in output.data) {
        output.data[category].forEach(course => {
          allCourses.push({ ...course, category });
        });
      }

      setCourses(allCourses); // Set flat array
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  fetchData();
}, []);


  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses?.filter(course => course.category === selectedCategory);

  return (
     <div className="min-h-screen bg-slate-500 flex flex-col">
      <Navbar/>

      <Filter
         filterData = {filterData}
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
      />

      <Cards courses={filteredCourses} />

      <ToastContainer position="bottom-right" />

     </div>
  );
};

export default App;
