import React, { useEffect, useState, useRef } from 'react';
import Img from "../../assets/img.png";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import doroWatImage from '../../assets/foods/Doro-Wat.jpg';
import injeraImage from '../../assets/foods/injera.jpg';
import tibsImage from '../../assets/foods/Tibs.jpg';
import shiroWatImage from '../../assets/foods/shiro-wat.jpg';
import misirWatImage from '../../assets/foods/misir.jpg';
import kikAlichaImage from '../../assets/foods/kik.jpg';
import gomenImage from '../../assets/foods/Gomen.jpg';
import atakiltWatImage from '../../assets/foods/atakilt.jpg';
import azifaImage from '../../assets/foods/azifa.jpg';
import firfirImage from '../../assets/foods/firfir.jpg';

const NutritionPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patientInfo, setPatientInfo] = useState(null);
  const [nutritionData, setNutritionData] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState({});
  const printRef = useRef();

  useEffect(() => {
    loadPatient();
  }, [id]);

  const loadPatient = () => {
    const savedData = localStorage.getItem("patients");
    if (savedData) {
      const patients = JSON.parse(savedData);
      const foundPatient = patients.find((p) => p.id === id);
      if (foundPatient) {
        setPatientInfo(foundPatient);

        const age = foundPatient.age;
        const sex = foundPatient.sex.toLowerCase();

        let newNutritionData = {};

        if (age >= 1 && age <= 3) {
          newNutritionData = {
            calories: 1000,
            protein: 13,
            carbohydrates: 130,
            saturatedFat: 35,
            calcium: 700,
            iron: 7,
            magnesium: 80,
            zinc: 3,
            vitaminD: 600,
          };
        } else if (age >= 4 && age <= 8) {
          if (sex === 'female') {
            newNutritionData = {
              calories: 1200,
              protein: 19,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 1000,
              iron: 10,
              magnesium: 130,
              zinc: 5,
              vitaminD: 600,
            };
          } else if (sex === 'male') {
            newNutritionData = {
              calories: 1400,
              protein: 19,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 1000,
              iron: 10,
              magnesium: 130,
              zinc: 5,
              vitaminD: 600,
            };
          }
        } else if (age >= 9 && age <= 13) {
          if (sex === 'female') {
            newNutritionData = {
              calories: 1600,
              protein: 34,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 1300,
              iron: 8,
              magnesium: 240,
              zinc: 8,
              vitaminD: 600,
            };
          } else if (sex === 'male') {
            newNutritionData = {
              calories: 1800,
              protein: 34,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 1300,
              iron: 8,
              magnesium: 240,
              zinc: 8,
              vitaminD: 600,
            };
          }
        } else if (age >= 14 && age <= 18) {
          if (sex === 'female') {
            newNutritionData = {
              calories: 1800,
              protein: 46,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 1300,
              iron: 15,
              magnesium: 360,
              zinc: 9,
              vitaminD: 600,
            };
          } else if (sex === 'male') {
            newNutritionData = {
              calories: 2200,
              protein: 52,
              carbohydrates: 130,
              saturatedFat: 35,
              calcium: 700,
              iron: 11,
              magnesium: 410,
              zinc: 11,
              vitaminD: 600,
            };
          }
        }

        setNutritionData(newNutritionData);
        loadFoodList(newNutritionData.calories);
      }
    }
  };

  const loadFoodList = (targetCalories) => {
    const foods = [
      {
        name: "Doro Wat (Spicy Chicken Stew)",
        ingredients: "Chicken, niter kibbeh (spiced butter), berbere (spice blend), onions, garlic, ginger, boiled eggs.",
        instructions: "Sauté onions, add garlic, ginger, and spices. Add chicken and coat it with the spices. Simmer until tender, adding boiled eggs in the last few minutes.",
        calories: 500,
        category: "Dinner",
        image: doroWatImage
      },
      {
        name: "Injera (Ethiopian Flatbread)",
        ingredients: "Teff flour, water.",
        instructions: "Mix teff flour with water to form a batter. Ferment for 1-3 days, then cook on a griddle to make a soft, spongy flatbread.",
        calories: 200,
        category: "Lunch",
        image: injeraImage
      },
      {
        name: "Tibs (Sautéed Meat)",
        ingredients: "Beef or lamb, onions, green peppers, garlic, rosemary, niter kibbeh, berbere.",
        instructions: "Sauté onions and spices in niter kibbeh. Add meat and cook until browned and tender. Serve with injera.",
        calories: 600,
        category: "Dinner",
        image: tibsImage
      },
      {
        name: "Shiro Wat (Chickpea Stew)",
        ingredients: "Shiro powder (roasted chickpea flour), onions, garlic, tomatoes, berbere, oil.",
        instructions: "Cook onions, garlic, and tomatoes with spices, then gradually add shiro powder, stirring until smooth and thick.",
        calories: 350,
        category: "Lunch",
        image: shiroWatImage
      },
      {
        name: "Misir Wat (Spicy Red Lentils)",
        ingredients: "Red lentils, onions, garlic, ginger, tomatoes, berbere, niter kibbeh.",
        instructions: "Sauté onions with spices, add lentils and water. Simmer until lentils are soft and thickened.",
        calories: 300,
        category: "Lunch",
        image: misirWatImage
      },
      {
        name: "Kik Alicha (Mild Split Pea Stew)",
        ingredients: "Yellow split peas, onions, garlic, ginger, turmeric, oil.",
        instructions: "Sauté onions and garlic with turmeric, add split peas and cook until tender. Season with salt and serve with injera.",
        calories: 250,
        category: "Dinner",
        image: kikAlichaImage
      },
      {
        name: "Gomen (Ethiopian Collard Greens)",
        ingredients: "Collard greens or kale, onions, garlic, ginger, niter kibbeh.",
        instructions: "Sauté onions, garlic, and ginger in niter kibbeh, add greens and cook until tender.",
        calories: 150,
        category: "Dinner",
        image: gomenImage
      },
      {
        name: "Atakilt Wat (Vegetable Stew)",
        ingredients: "Cabbage, potatoes, carrots, onions, garlic, turmeric, oil.",
        instructions: "Sauté onions and garlic with turmeric, add vegetables, and cook until soft.",
        calories: 200,
        category: "Lunch",
        image: atakiltWatImage
      },
      {
        name: "Azifa (Green Lentil Salad)",
        ingredients: "Green lentils, onions, green chili, mustard, lemon juice, oil.",
        instructions: "Boil lentils until tender, mix with chopped onions, chili, mustard, and lemon juice. Chill before serving.",
        calories: 180,
        category: "Lunch",
        image: azifaImage
      },
      {
        name: "Firfir (Injera Stir-Fry)",
        ingredients: "Leftover injera, berbere, onions, garlic, tomatoes, niter kibbeh.",
        instructions: "Sauté onions and garlic with berbere, add pieces of injera and tomatoes, cooking until the injera absorbs flavors.",
        calories: 400,
        category: "Breakfast",
        image: firfirImage
      }
    ];
    setFoodList(foods);
    selectFoods(foods, targetCalories);
  };

  const selectFoods = (foods, targetCalories) => {
    const selected = {
      Breakfast: null,
      Lunch: null,
      Dinner: null,
    };

    const findClosestFood = (category) => {
      const categoryFoods = foods.filter(food => food.category === category);
      let closestFood = null;
      let closestDifference = Infinity;

      categoryFoods.forEach(food => {
        const difference = Math.abs(food.calories - targetCalories);
        if (difference < closestDifference) {
          closestDifference = difference;
          closestFood = food;
        }
      });

      return closestFood;
    };

    selected.Breakfast = findClosestFood("Breakfast");
    selected.Lunch = findClosestFood("Lunch");
    selected.Dinner = findClosestFood("Dinner");

    setSelectedFoods(selected);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen py-10 mt-8">

    <div className="container mx-auto w-4/5 bg-white rounded-lg shadow-md p-8 my-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Your Nutrition Plan
      </h1>
        {/* <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-16 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Print
        </button> */}
        
        
    </div>


    <div className='grid grid-cols-2 gap-2'>
      <div className=' rounded-lg p-8 flex flex-col   items-start border'>
        <p className='text-blue-700 text-lg font-bold'>Your Daily Calorie Target</p>
        <p className='text-blue-700 font-bold -mt-8 -ml-4'><span className='text-blue-900 text-[8rem] font-bold'>{nutritionData.calories || '0'}</span>   kcal</p>
        {/* Nutrition section */}
        <div className="w-full  grid grid-cols-3 gap-2 py-4 px-8 rounded-md border">
       

       <p className="font-semibold flex flex-col ">
        
         <span className="font-bold text-blue-700">Protein : </span>
         {nutritionData.protein || 'N/A'} g
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Carbohydrate : </span>
         {nutritionData.carbohydrates || 'N/A'} g
       </p>

       <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Fat : </span>
         {nutritionData.saturatedFat || 'N/A'} %kcal
       </p>
         


         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Calcium : </span>
         {nutritionData.calcium || 'N/A'} mg
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Iron : </span>
         {nutritionData.iron || 'N/A'} mg
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Magnesium : </span>
         {nutritionData.magnesium || 'N/A'} mg
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Zinc : </span>
         {nutritionData.zinc || 'N/A'} mg
       </p>

         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Vitamin D : </span>
         {nutritionData.vitaminD || 'N/A'} mg
       </p>

     </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src={Img} alt="" />
      </div>

    </div>

    <h1 className="text-2xl font-bold text-gray-900 w-full  flex flex-wrap justify-between py-2 px-2 mt-4">
        Patient Information
      </h1>

    {patientInfo ? (
      <div className="w-full flex flex-wrap justify-between py-4 px-8 rounded-md border mt-4">
        <p className="font-semibold">
          <span className="font-bold text-blue-700">Reg. Number : </span>
          {patientInfo.registrationNumber || 'N/A'}
        </p>
        <p className="font-semibold">
          <span className="font-bold text-blue-700">Name : </span>
          {patientInfo.patientName || 'N/A'}
        </p>
        <p className="font-semibold">
          <span className="font-bold text-blue-700">Age : </span>
          {patientInfo.age || 'N/A'}
        </p>
        <p className="font-semibold">
          <span className="font-bold text-blue-700">Sex : </span>
          {patientInfo.sex || 'N/A'}
        </p>
      </div>
    ) : (
      <div>Loading...</div>
    )}

<h1 className="text-2xl font-bold text-gray-900 w-full  flex flex-wrap justify-between py-2 px-2 mt-8">
        Meal Plan
      </h1>
      <div className="w-full f py-4 px-8 rounded-md border mt-4">

      {['Breakfast', 'Lunch', 'Dinner'].map((mealCategory) => (
        <div key={mealCategory}>
          <h2 className="text-2xl font-bold text-blue-800 mt-4">{mealCategory}</h2>
          <div className="w-full flex flex-wrap justify-center py-4 px-8  mt-8">
            {selectedFoods[mealCategory] && (
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[32rem]">
                <img
                  alt={selectedFoods[mealCategory].name}
                  src={selectedFoods[mealCategory].image}
                  className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                  <h3 className="mt-0.5 text-lg text-gray-900">{selectedFoods[mealCategory].name}</h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    <strong>Ingredients:</strong> {selectedFoods[mealCategory].ingredients}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    <strong>Instructions:</strong> {selectedFoods[mealCategory].instructions}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    <strong>Calories:</strong> {selectedFoods[mealCategory].calories} kcal
                  </p>
                </div>
              </article>
            )}



          </div>
        </div>
      ))}

</div>

    </div>
    </div>
  )
}

export default NutritionPlan
