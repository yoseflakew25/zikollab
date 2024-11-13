import React, { useEffect, useState } from 'react';
import Img from "../../assets/img.png";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";


const NutritionPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patientInfo, setPatientInfo] = useState(null);
  const [nutritionData, setNutritionData] = useState({});

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
        setNutritionData(foundPatient.nutrition || {});
      }
    }
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen py-10 mt-8">

    <div className="container mx-auto w-4/5 bg-white rounded-lg shadow-md p-8 my-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Your Nutrition Plan
      </h1>
        <button
          // onClick={handleSave}
          className="bg-blue-600 text-white px-16 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Print
        </button>
        
        
    </div>


    <div className='grid grid-cols-2 gap-2'>
      <div className=' rounded-lg p-8 flex flex-col   items-start border'>
        <p className='text-blue-700 text-lg font-bold'>Your Daily Calorie Target</p>
        <p className='text-blue-700 font-bold -mt-8 -ml-4'><span className='text-blue-900 text-[8rem] font-bold'>{nutritionData.calories || '0'}</span>   kcal</p>
        {/* Nutrition section */}
        <div className="w-full  grid grid-cols-3 gap-2 py-4 px-8 rounded-md border">
       

       <p className="font-semibold flex flex-col ">
        
         <span className="font-bold text-blue-700">Protein : </span>
         {nutritionData.protein || 'N/A'}
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Carbohydrate : </span>
         {nutritionData.carbohydrates || 'N/A'}
       </p>

       <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Saturated fat : </span>
         {nutritionData.saturatedFat || 'N/A'}
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Unsaturated fat : </span>
         {nutritionData.unsaturatedFat || 'N/A'}
       </p>


         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Calcium : </span>
         {nutritionData.calcium || 'N/A'}
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Iron : </span>
         {nutritionData.iron || 'N/A'}
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Magnesium : </span>
         {nutritionData.magnesium || 'N/A'}
       </p>
         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Zinc : </span>
         {nutritionData.zinc || 'N/A'}
       </p>

         <p className="font-semibold flex flex-col ">
         <span className="font-bold text-blue-700">Vitamin D : </span>
         {nutritionData.vitaminD || 'N/A'}
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

    </div>
    </div>
  )
}

export default NutritionPlan
