import React, { useState, useEffect } from 'react';
import oops from '../assets/oops.jpg'

const Country = () => {
  const [meals, setMeals] = useState([]);
  const [name, setName] = useState("canadian");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  async function fetchData(countryName) {
    let url = `${baseUrl}/filter.php?a=${countryName}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setMeals(data.meals || []); 
    } catch (error) {
      console.log("Error fetching data:", error);
      setMeals([]); 
    }
  }
  
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

  function changeHandler(event) {
    setName(event.target.value);
  }

  function searchHandler() {
    fetchData(name);
  }

  function closeModal() {
    setSelectedMeal(null);
  }

  useEffect(() => {
    fetchData(name);
  }, []);

  return (
    <div className='min-h-screen mt-64 md:mt-10 mb-10 p-4'>
      <div className='flex flex-col md:flex-row justify-center items-center mt-16 md:mt-32 gap-4'>
        <label className='w-full md:w-auto'>
          <input 
            className='bg-gray-300 rounded-[0.5rem] h-9 w-full md:w-64 p-[12px] h-8'
            required
            type='text'
            name='name'
            value={name}
            onChange={changeHandler}
            placeholder='Enter the Country Name'
          />
        </label>
        <button 
          onClick={searchHandler} 
          className='border bg-blue-500 w-28 text-white py-1 px-4 rounded'
        >
          Search
        </button>
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
              <div className='w-full text-center mt-3 text-xl underline'>{meal.strMeal}</div>
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className='w-full h-48 mt-3 rounded-lg border border-white object-cover' 
              />
              <div className='mt-auto mb-2'>
                <button 
                  onClick={() => fetchMealDetails(meal.idMeal)}
                  className='border bg-red-300 mt-3 px-4 py-2 rounded'
                >
                  Recipe
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedMeal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 '>
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
    </div>
  );
};

export default Country;
