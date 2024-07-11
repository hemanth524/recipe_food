import React, { useState, useEffect } from 'react';
import oops from '../assets/oops.jpg'


const Home = (props) => {
  const [meals, setMeals] = useState([]);
  const [letter, setLetter] = useState("g");
  const [selectedMeal, setSelectedMeal] = useState(null);
  let Loggedin=props.Loggedin;
  let setLoggedin=props.setLoggedin;


  const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  async function fetchData(a) {
    let url = `${baseUrl}/search.php?f=${a}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setMeals(data.meals ? data.meals.slice(0, 8) : []); 
    } catch (error) {
      console.log("Error fetching data:", error);
      setMeals([]); 
    }
  }
  useEffect(() => {
    let lastScrollTop = 0;
    const content = document.getElementById("content");

    function onScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
       
        content.classList.remove("hidden");
      } else {
        
        content.classList.add("hidden");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  async function fetchMealDetails(mealId) {
    let url = `${baseUrl}/lookup.php?i=${mealId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setSelectedMeal(data.meals[0]); 
    } catch (error) {
      console.log("Error fetching meal details:", error);
      setSelectedMeal(null); 
    }
  }
  function closeModal() {
    setSelectedMeal(null);
  }
  useEffect(() => {
    fetchData(letter);
  }, [letter]);

  const handleLetterClick = (letter) => {
    setLetter(letter);
  };
  
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
  

  return (
    <div className='flex mt-64 md:mt-20 h-full text-xl text-white min-h-screen min-w-screen  id="content'>
      <div className='max-w-screen w-full py-5 px-10 mx-auto relative'>
        <h1 className='text-3xl font-bold mb-10'>Discover the Joy of Culinary Exploration</h1>
        <p className='mb-5'>
          At [Your Website Name], we believe in celebrating food as a universal language that brings people together. Whether you're a seasoned chef or just beginning your culinary journey, our collection of recipes and meal inspirations promises something for everyone.
        </p>
        <p className='text-2xl text-yellow-300 '>
          Login to explore our full collection of recipes and meal ideas!
        </p>
        <div>
        <div className='w-full border-t-2 border-white my-4 mt-10'></div> 
        <div className='min-h-screen mb-6 p-4'>
          <div className='flex flex-wrap justify-center items-center mt-8 md:mt-6 gap-2 max-w-[550px]  md:ml-96  '>
            {alphabet.map((char) => (
              <button
                key={char}
                onClick={() => handleLetterClick(char.toLowerCase())}
                className={`border   bg-blue-500 text-white py-1 px-4 rounded ${char.toLowerCase() === letter ? 'bg-red-500' : ''}`}
              >
                {char}
              </button>
            ))}
          </div>

          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {meals.length === 0 ? (
              <div className='flex justify-center items-center w-full h-64'>
                <img 
                className='w-64 h-64'
                src={oops}></img>
              </div>
            ) : (
              meals.map((meal) => (
                <div key={meal.idMeal} className='border border-white w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 flex flex-col items-center bg-gray-300 rounded-lg'>
                  <div className='w-full h-6 text-center text-black mt-3 text-xl underline'>{meal.strMeal}</div>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='w-full h-48 mt-3 rounded-lg border border-white object-cover'
                  />
                  <div className='mt-auto mb-2'>
                  {Loggedin && (
                <button 
                  onClick={() => fetchMealDetails(meal.idMeal)}
                  className='border bg-red-300 mt-3 px-4 py-2 rounded'
                >
                  Recipe
                </button>
               ) }   
                   
              </div>
                </div>
                
              ))
            )}
          </div>
          {selectedMeal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center  text-black z-50 '>
          <div className='bg-blue-300 p-8 rounded-lg shadow-lg relative max-w-3xl w-full    max-h-screen h-96 overflow-y-auto '>
            <button 
              onClick={closeModal}
              className='absolute top-2 right-2  text-white text-2xl font-bold bg-red-400 rounded-lg w-16'
            >
              x
            </button>
            <h2 className='text-3xl mb-4 uppercase underline text-green-900'>{selectedMeal.strMeal}</h2>
            <p className='text-xl'><strong>Category:</strong> {selectedMeal.strCategory}</p>
            <p className='text-xl'><strong>Area:</strong> {selectedMeal.strArea}</p>
            <p className='text-xl'><strong>Instructions:<br></br></strong> {selectedMeal.strInstructions}</p>
            <h3 className='text-2xl  mt-4 mb-2'><strong>Ingredients:</strong></h3>
            <ul className='text-xl'>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = selectedMeal[`strIngredient${i}`];
                const measure = selectedMeal[`strMeasure${i}`];
                return (
                  ingredient ? <li key={i}>{`${ingredient} - ${measure}`}</li> : null
                );
              })}
            </ul>
          </div>
        </div>
      )}
          <div className='w-full border-t-2 border-white  mt-10 my-4'></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
