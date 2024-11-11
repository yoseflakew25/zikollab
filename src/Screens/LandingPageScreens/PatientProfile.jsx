import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

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

const PatientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [sections, setSections] = useState({
    admission: true,
    anthropology: false,
    history: false,
    physicalExamination: false,
  });

  useEffect(() => {
    loadPatient();
  }, [id]);

  const loadPatient = () => {
    const savedData = localStorage.getItem('patients');
    if (savedData) {
      const patients = JSON.parse(savedData);
      const foundPatient = patients.find(p => p.id === id);
      if (foundPatient) {
        setPatient(foundPatient);
      }
    }
  };

  const handleInputChange = (field, value) => {
    setPatient(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    try {
      const savedData = localStorage.getItem('patients');
      if (savedData) {
        const patients = JSON.parse(savedData);
        const updatedPatients = patients.map(p => 
          p.id === patient.id ? patient : p
        );
        localStorage.setItem('patients', JSON.stringify(updatedPatients));
        toast.success('Patient profile updated successfully!');
      }
    } catch (error) {
      toast.error('Error updating patient profile');
      console.error('Error:', error);
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 font-sans min-h-screen py-10 mt-8">
      <div className="container mx-auto w-4/5 bg-white rounded-lg shadow-md p-8 my-8">
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit Patient Profile</h1>
          <div className="space-x-4">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate('/patients')}
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Back to List
            </button>
          </div>
        </div>

        {/* Admission Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('admission')}
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition-colors flex justify-between items-center"
          >
            <span className="text-lg font-semibold">Admission Details</span>
            <span>{sections.admission ? '−' : '+'}</span>
          </button>
          
          <AnimatePresence initial={false}>
            {sections.admission && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="mt-4 space-y-4 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      value={patient.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      value={patient.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sex
                    </label>
                    <select
                      value={patient.sex}
                      onChange={(e) => handleInputChange('sex', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={patient.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sub City
                    </label>
                    <input
                      type="text"
                      value={patient.subCity}
                      onChange={(e) => handleInputChange('subCity', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      House Number
                    </label>
                    <input
                      type="text"
                      value={patient.houseNumber}
                      onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Anthropology Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('anthropology')}
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition-colors flex justify-between items-center"
          >
            <span className="text-lg font-semibold">Anthropology</span>
            <span>{sections.anthropology ? '−' : '+'}</span>
          </button>
          
          <AnimatePresence initial={false}>
            {sections.anthropology && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="mt-4 space-y-4 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={patient.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={patient.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      MUAC
                    </label>
                    <input
                      type="number"
                      value={patient.muac}
                      onChange={(e) => handleInputChange('muac', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* History Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('history')}
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition-colors flex justify-between items-center"
          >
            <span className="text-lg font-semibold">History</span>
            <span>{sections.history ? '−' : '+'}</span>
          </button>
          
          <AnimatePresence initial={false}>
            {sections.history && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="mt-4 space-y-4 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chief Complaints
                    </label>
                    <textarea
                      value={patient.chiefComplaints}
                      onChange={(e) => handleInputChange('chiefComplaints', e.target.value)}
                      rows="3"
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Present History
                    </label>
                    <textarea
                      value={patient.presentHistory}
                      onChange={(e) => handleInputChange('presentHistory', e.target.value)}
                      rows="3"
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Physical Examination Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('physicalExamination')}
            className="w-full text-left bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition-colors flex justify-between items-center"
          >
            <span className="text-lg font-semibold">Physical Examination</span>
            <span>{sections.physicalExamination ? '−' : '+'}</span>
          </button>
          
          <AnimatePresence initial={false}>
            {sections.physicalExamination && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="mt-4 space-y-4 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Temperature (°C)
                    </label>
                    <input
                      type="number"
                      value={patient.temperature}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Blood Pressure
                    </label>
                    <input
                      type="text"
                      value={patient.bloodPressure}
                      onChange={(e) => handleInputChange('bloodPressure', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pulse Rate
                    </label>
                    <input
                      type="number"
                      value={patient.pulseRate}
                      onChange={(e) => handleInputChange('pulseRate', e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Set Goals Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(`/patients/${patient.id}/goal-setting`)}
            className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Set Goals for Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;