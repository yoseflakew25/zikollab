import { useState } from 'react';
import {  toast } from 'react-toastify';
import Button from '../../Components/Button';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CreateProfile = () => {
    const navigate = useNavigate();



    const handleSetGoals = () => {
        // Check if we have a patient ID in formData
        if (formData.id) {
            // First save the patient data
            try {
                // Get existing patients
                const savedData = localStorage.getItem('patients');
                const patients = savedData ? JSON.parse(savedData) : [];
                
                // Add new patient data if it doesn't exist
                if (!patients.find(p => p.id === formData.id)) {
                    patients.push({
                        ...formData,
                        registrationNumber: `PAT-${Date.now()}`,
                        admissionDate: new Date().toISOString().split('T')[0]
                    });
                    localStorage.setItem('patients', JSON.stringify(patients));
                }

                // Navigate to goal setting
                console.log('Navigating to goal setting:', formData.id);
                navigate(`/patients/${formData.id}/goal-setting`);
            } catch (error) {
                console.error('Error saving patient:', error);
                toast.error('Error saving patient data');
            }
        } else {
            toast.error('Please save the patient profile first');
        }
    };

    const [isSaved, setIsSaved] = useState(false);

  const [sections, setSections] = useState({
    admission: false,
    anthropology: false,
    history: false, // Added for History section toggle
    physicalExamination: false, // Added for Physical Examination toggle
  });

  const [isEditing, setIsEditing] = useState({
    admission: false,
    anthropology: false,
    history: false, // Added for History section toggle
    physicalExamination: false, // Added for Physical Examination toggle
  });

  const [formData, setFormData] = useState(() => {
    // Try to get existing data from localStorage on component mount
    const savedData = localStorage.getItem('patients');
    const patients = savedData ? JSON.parse(savedData) : [];
    
    // Return either existing patient data or initial state
    return {
      id: uuidv4(),
      patientName: '',
      city: '',
      subCity: '',
      houseNumber: '',
      age: '',
      sex: 'male',
      mothersName: '',
      otpSite: '',
      distance: '',
      referredBy: '',
      admissionStatus: 'new',
      relapse: 'no',
      additionalInfo: '',
       // Anthropology Section Fields
       edema: '+',
       muac: '',
       weight: '',
       height: '',
       bmi: '',
       admissionCriteria: 'edema',
       otherCriteria: '',
       // History Section Fields (Added)
      diarrhoea: 'no',
      vomiting: 'no',
      cough: 'no',
      passingUrine: 'no',
      breastfeedingStatus: 'no',
      appetite: 'good',
      edemaSwellingDuration: '',
      stoolsPerDay: '1-3',
      historyAdditionalInfo: '',
      // Physical Examination Fields (Added)
      respirationRate: '<30',
      temperature: '',
      chestInDrawing: 'no',
      eyes: 'normal',
      conjunctiva: 'yes',
      dehydration: 'none',
      handsFeet: 'normal',
      ears: 'normal',
      skinChanges: 'none',
      enlargedLymphNodes: [],
      disability: 'no',
      additionalSkinChanges: 'normal',
      physicalAdditionalInfo: '',
    };
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const handleEditToggle = (section) => {
    setIsEditing((prevEditing) => ({
      ...prevEditing,
      [section]: !prevEditing[section],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSave = (section) => {
    toast.success(`${section} section data saved!`);
    handleEditToggle(section); // Exit editing mode
  };

  const handleSaveProfile = () => {
    try {
      // Validate required fields
      if (!formData.patientName ) {
        toast.error('Patient name is required');
        return;
      }

    if (!formData.city ){
      toast.error('City is required');
      return;
    }

    if(!formData.age){
      toast.error('Age is required');
      return;
    }

    if(!formData.sex){
      toast.error('Sex is required');
      return;
    }

    if(!formData.weight){
      toast.error('Weight is required');
      return;
    }

    if(!formData.height){
      toast.error('Height is required');
      return;
    }

      // Add timestamp for admission date
      const patientData = {
        ...formData,
        admissionDate: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
        registrationNumber: `PAT-${Date.now()}`, // Generate a registration number
      };

      // Get existing patients from localStorage
      const savedData = localStorage.getItem('patients');
      const patients = savedData ? JSON.parse(savedData) : [];

      // Add new patient data
      patients.push(patientData);

      // Save back to localStorage
      localStorage.setItem('patients', JSON.stringify(patients));

      toast.success('Patient profile saved successfully!');
      
      // Reset form
      setFormData({
        id: uuidv4(),
        patientName: '',
        city: '',
        subCity: '',
        houseNumber: '',
        age: '',
        sex: 'male',
        mothersName: '',
        otpSite: '',
        distance: '',
        referredBy: '',
        admissionStatus: 'new',
        relapse: 'no',
        additionalInfo: '',
        // Anthropology Section Fields
        edema: '+',
        muac: '',
        weight: '',
        height: '',
        bmi: '',
        admissionCriteria: 'edema',
        otherCriteria: '',
        // History Section Fields
        diarrhoea: 'no',
        vomiting: 'no',
        cough: 'no',
        passingUrine: 'no',
        breastfeedingStatus: 'no',
        appetite: 'good',
        edemaSwellingDuration: '',
        stoolsPerDay: '1-3',
        historyAdditionalInfo: '',
        // Physical Examination Fields
        respirationRate: '<30',
        temperature: '',
        chestInDrawing: 'no',
        eyes: 'normal',
        conjunctiva: 'yes',
        dehydration: 'none',
        handsFeet: 'normal',
        ears: 'normal',
        skinChanges: 'none',
        enlargedLymphNodes: [],
        disability: 'no',
        additionalSkinChanges: 'normal',
        physicalAdditionalInfo: '',
      });

      // Reset editing states
      setIsEditing({
        admission: false,
        anthropology: false,
        history: false,
        physicalExamination: false,
      });

      // Reset section states
      setSections({
        admission: false,
        anthropology: false,
        history: false,
        physicalExamination: false,
      });

    } catch (error) {
      toast.error('Error saving patient profile');
      console.error('Error saving patient:', error);
    }
    setIsSaved(true);

  };

  // Add these animation variants
  const sectionButtonVariants = {
    hover: { scale: 1.01 },
    tap: { scale: 0.99 }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2
      }
    }
  };

  // Add animation variants near the top of the file
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  return (
    <motion.div 
      className="bg-gray-50 font-sans min-h-screen py-10 mt-8"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <motion.div 
        className="container mx-auto w-4/5 bg-white rounded-lg shadow-md p-8 my-8"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-8"
          variants={containerVariants}
        >
          Create Patient Profile
        </motion.h2>

        {/* Admission Details Section */}
        <div className="mb-4">
          <motion.button
            variants={sectionButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded hover:bg-green-500"
            onClick={() => toggleSection('admission')}
          >
            Admission Details
          </motion.button>
          
          <AnimatePresence initial={false}>
            {sections.admission && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2 overflow-hidden"
              >
                <form className='flex flex-col gap-4'>
                  <div className='grid grid-cols-3 gap-2 items-center'>

                 
                  <div className='flex flex-col gap-2 items-start'>

                
                  <label className="block font-bold mt-4">Patient Name:</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Sub-city:</label>
                  <input
                    type="text"
                    name="subCity"
                    value={formData.subCity}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  </div>
                  <div className='grid grid-cols-3 gap-2 items-center'>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">House Number:</label>
                  <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Sex:</label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  </div>

                  </div>

                  <div className='grid grid-cols-3 gap-2 items-center'>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Mother's Name:</label>
                  <input
                    type="text"
                    name="mothersName"
                    value={formData.mothersName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">OTP Site:</label>
                  <input
                    type="text"
                    name="otpSite"
                    value={formData.otpSite}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                      />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Distance to House (km):</label>
                  <input
                    type="number"
                    name="distance"
                    value={formData.distance}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  </div>

                  <div className='grid grid-cols-3 gap-2 items-center'>

               

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Referred by:</label>
                  <input
                    type="text"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Admission Status:</label>
                  <select
                    name="admissionStatus"
                    value={formData.admissionStatus}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  >
                    <option value="new">New</option>
                    <option value="relapse">Relapse</option>
                    <option value="returned-defaulter">Returned Defaulter</option>
                    <option value="routine">Routine</option>
                    <option value="sc">SC</option>
                    <option value="sc-refusal">SC Refusal</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Relapse:</label>
                  <select
                    name="relapse"
                    value={formData.relapse}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  </div>

                  <div className='grid grid-cols-3 gap-2 items-center'>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Additional Information:</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.admission}
                  ></textarea>
                  </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.admission ? (

                  
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSave('admission')}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle('admission')}
                      >
                        Edit Admission Details
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


     {/* Anthropology Section */}
     <div className="mb-4">
          <motion.button
            variants={sectionButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded hover:bg-green-500"
            onClick={() => toggleSection('anthropology')}
          >
            Admission Anthropology
          </motion.button>
          
          <AnimatePresence initial={false}>
            {sections.anthropology && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2 overflow-hidden"
              >
                <form className='flex flex-col gap-4'>

                <div className='grid grid-cols-3 gap-2 items-center'>
                {/* Anthropology form fields */}
                <div className='flex flex-col gap-2 items-start'>
                  <label className="block font-bold mt-4">Bilateral Pitting Edema:</label>
                  <select
                    name="edema"
                    value={formData.edema}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.anthropology}
                  >
                    <option value="+">+</option>
                    <option value="++">++</option>
                    <option value="+++">+++</option>
                  </select>

                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">MUAC (cm):</label>
                  <input
                    type="number"
                    name="muac"
                    value={formData.muac}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    step="0.1"
                    disabled={!isEditing.anthropology}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Weight (kg):</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    step="0.1"
                    disabled={!isEditing.anthropology}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Height (cm):</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    step="0.1"
                    disabled={!isEditing.anthropology}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">BMI:</label>
                  <input
                    type="number"
                    name="bmi"
                    value={formData.bmi}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    step="0.1"
                    disabled={!isEditing.anthropology}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Admission Criteria:</label>
                  <select
                    name="admissionCriteria"
                    value={formData.admissionCriteria}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.anthropology}
                  >
                    <option value="edema">Bilateral Pitting Edema</option>
                    <option value="muac">MUAC</option>
                    <option value="bmi">BMI</option>
                    <option value="other">Other</option>
                  </select>
</div>
                  </div>

                  {formData.admissionCriteria === 'other' && (
                    <div className="mt-4">
                      <label className="block font-bold">Specify Other Criteria:</label>
                      <input
                        type="text"
                        name="otherCriteria"
                        value={formData.otherCriteria}
                        onChange={handleInputChange}
                        className="w-full mt-1 p-2 border rounded"
                        disabled={!isEditing.anthropology}
                      />
                    </div>
                  )}

                  {/* Save and Edit buttons */}
                  <div className="mt-4">
                    {isEditing.anthropology ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSave('anthropology')}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle('anthropology')}
                      >
                        Edit Anthropology Details
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>











             {/* Patient History Section */}
             <div className="mb-4">
          <motion.button
            variants={sectionButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded hover:bg-green-500"
            onClick={() => toggleSection('history')}
          >
            Patient History
          </motion.button>
          
          <AnimatePresence initial={false}>
            {sections.history && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2 overflow-hidden"
              >
                <form className='flex flex-col gap-4'>
                <div className='grid grid-cols-3 gap-2 items-center'>

                {/* History form fields */}
                <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Diarrhoea:</label>
                  <select
                    name="diarrhoea"
                    value={formData.diarrhoea}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Vomiting:</label>
                  <select
                    name="vomiting"
                    value={formData.vomiting}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Cough:</label>
                  <select
                    name="cough"
                    value={formData.cough}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Passing Urine:</label>
                  <select
                    name="passingUrine"
                    value={formData.passingUrine}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Breastfeeding Status (6-23mo):</label>
                  <select
                    name="breastfeedingStatus"
                    value={formData.breastfeedingStatus}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Appetite:</label>
                  <select
                    name="appetite"
                    value={formData.appetite}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="good">Good</option>
                    <option value="poor">Poor</option>
                    <option value="none">None</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">If Edema, Swelling Duration (days):</label>
                  <input
                    type="number"
                    name="edemaSwellingDuration"
                    value={formData.edemaSwellingDuration}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Stools per Day:</label>
                  <select
                    name="stoolsPerDay"
                    value={formData.stoolsPerDay}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  >
                    <option value="1-3">1-3</option>
                    <option value="4-5">4-5</option>
                    <option value=">5"> 5</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Additional Information:</label>
                  <textarea
                    name="historyAdditionalInfo"
                    value={formData.historyAdditionalInfo}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.history}
                  ></textarea>
                  </div>

</div>

                  {/* Save and Edit buttons */}
                  <div className="mt-4">
                    {isEditing.history ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSave('history')}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle('history')}
                      >
                        Edit Patient History
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>






        {/* Physical Examination Section */}
        <div className="mb-4">
          <motion.button
            variants={sectionButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded hover:bg-green-500"
            onClick={() => toggleSection('physicalExamination')}
          >
            Physical Examination
          </motion.button>
          
          <AnimatePresence initial={false}>
            {sections.physicalExamination && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2 overflow-hidden"
              >
                <form className='flex flex-col gap-4'>
                <div className='grid grid-cols-3 gap-2 items-center'>
                {/* Physical Examination form fields */}
                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Respiration Rate (min):</label>
                  <select
                    name="respirationRate"
                    value={formData.respirationRate}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="<30">&lt; 30</option>
                    <option value="30-39">30 - 39</option>
                    <option value="40-49">40 - 49</option>
                    <option value=">50">&gt; 50</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Temperature (°C):</label>
                  <input
                    type="number"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    step="0.1"
                    disabled={!isEditing.physicalExamination}
                  />
                  </div>

                  <div className='flex flex-col gap-2 items-start'>
                  <label className="block font-bold mt-4">Chest In Drawing:</label>
                  <select
                    name="chestInDrawing"
                    value={formData.chestInDrawing}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Eyes:</label>
                  <select
                    name="eyes"
                    value={formData.eyes}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="normal">Normal</option>
                    <option value="sunken">Sunken</option>
                    <option value="discharge">Discharge</option>
                  </select>
                  </div>


                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Conjunctiva:</label>
                  <select
                    name="conjunctiva"
                    value={formData.conjunctiva}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>


                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Dehydration:</label>
                  <select
                    name="dehydration"
                    value={formData.dehydration}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="none">None</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>
                  <label className="block font-bold mt-4">Hands and Feet:</label>
                  <select
                    name="handsFeet"
                    value={formData.handsFeet}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="normal">Normal</option>
                    <option value="cold">Cold</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Ears:</label>
                  <select
                    name="ears"
                    value={formData.ears}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="normal">Normal</option>
                    <option value="discharge">Discharge</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Skin Changes:</label>
                  <select
                    name="skinChanges"
                    value={formData.skinChanges}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="none">None</option>
                    <option value="scabies">Scabies</option>
                    <option value="peeling">Peeling</option>
                    <option value="ulcers-abscesses">Ulcers/Abscesses</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Enlarged Lymph Nodes:</label>
                  <select
                    name="enlargedLymphNodes"
                    value={formData.enlargedLymphNodes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        enlargedLymphNodes: Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        ),
                      })
                    }
                    multiple
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="none">None</option>
                    <option value="neck">Neck</option>
                    <option value="axilla">Axilla</option>
                    <option value="groin">Groin</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Disability:</label>
                  <select
                    name="disability"
                    value={formData.disability}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>

                  <label className="block font-bold mt-4">Additional Skin Changes:</label>
                  <select
                    name="additionalSkinChanges"
                    value={formData.additionalSkinChanges}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  >
                    <option value="normal">Normal</option>
                    <option value="sores">Sores</option>
                    <option value="candida">Candida</option>
                  </select>
                  </div>

                  <div className='flex flex-col gap-2 items-start'>
                  <label className="block font-bold mt-4">Additional Information:</label>
                  <textarea
                    name="physicalAdditionalInfo"
                    value={formData.physicalAdditionalInfo}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded"
                    disabled={!isEditing.physicalExamination}
                  ></textarea>
    </div>
</div>


                  {/* Save and Edit buttons */}
                  <div className="mt-4">
                    {isEditing.physicalExamination ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSave('physicalExamination')}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle('physicalExamination')}
                      >
                        Edit Physical Examination
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>



        <motion.div 
          className="flex justify-center mt-8 mb-8 gap-4"
          variants={containerVariants}
        >
          {isSaved && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSetGoals}
              className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Set Goals for Patient
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveProfile}
            className="bg-green-800 text-white px-8 py-2 rounded-md hover:bg-green-700 focus:outline-none"
          >
            Save Patient Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CreateProfile;
