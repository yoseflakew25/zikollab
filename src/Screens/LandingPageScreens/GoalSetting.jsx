import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoalSetting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goals, setGoals] = useState({
    weightGainTarget: "",
    weightGainPeriod: "day",
    weightGainAlert: "",
    weightGainAlertPeriod: "day",

    weightForHeight: "",
    weightForHeightPeriod: "day",
    weightForHeightAlert: "",
    weightForHeightAlertPeriod: "day",

    initialMuac: "",
    initialMuacPeriod: "day",
    initialMuacAlert: "",
    initialMuacAlertPeriod: "day",

    hemoglobinLevel: "",
    hemoglobinPeriod: "day",
    hemoglobinAlert: "",
    hemoglobinAlertPeriod: "day",

    zinc: "",
    zincPeriod: "day",
    zincAlert: "",
    zincAlertPeriod: "day",

    vitaminD: "",
    vitaminDPeriod: "day",
    vitaminDAlert: "",
    vitaminDAlertPeriod: "day",

    vitaminA: "",
    vitaminAPeriod: "day",
    vitaminAAlert: "",
    vitaminAAlertPeriod: "day",

    iron: "",
    ironPeriod: "day",
    ironAlert: "",
    ironAlertPeriod: "day",

    // Clinical Symptoms
    edema: "",
    edemaPeriod: "day",
    edemaAlert: "",
    edemaAlertPeriod: "day",

    lethargy: "",
    lethargyPeriod: "day",
    lethargyAlert: "",
    lethargyAlertPeriod: "day",

    skinLesions: "",
    skinLesionsPeriod: "day",
    skinLesionsAlert: "",
    skinLesionsAlertPeriod: "day",

    others1: "",
    others1Period: "day",
    others1Alert: "",
    others1AlertPeriod: "day",

    others2: "",
    others2Period: "day",
    others2Alert: "",
    others2AlertPeriod: "day",

    // Developmental and Functional
    appetiteLevel: "",
    appetitePeriod: "day",
    appetiteAlert: "",
    appetiteAlertPeriod: "day",

    activityLevel: "",
    activityPeriod: "day",
    activityAlert: "",
    activityAlertPeriod: "day",

    // Hydration and Electrolyte Balance
    dehydration: "",
    dehydrationPeriod: "day",
    dehydrationAlert: "",
    dehydrationAlertPeriod: "day",

    potassium: "",
    potassiumPeriod: "day",
    potassiumAlert: "",
    potassiumAlertPeriod: "day",

    chloride: "",
    chloridePeriod: "day",
    chlorideAlert: "",
    chlorideAlertPeriod: "day",

    sodium: "",
    sodiumPeriod: "day",
    sodiumAlert: "",
    sodiumAlertPeriod: "day",

    // Education and Caregiver
    caregiverUnderstanding: "",
    caregiverUnderstandingPeriod: "day",
    caregiverUnderstandingAlert: "",
    caregiverUnderstandingAlertPeriod: "day",

    appointmentAttendance: "",
    appointmentAttendancePeriod: "day",
    appointmentAttendanceAlert: "",
    appointmentAttendanceAlertPeriod: "day",

    // Long-Term Health and Growth
    weight: "",
    weightPeriod: "day",
    weightAlert: "",
    weightAlertPeriod: "day",

    height: "",
    heightPeriod: "day",
    heightAlert: "",
    heightAlertPeriod: "day",

    muac: "",
    muacPeriod: "day",
    muacAlert: "",
    muacAlertPeriod: "day",

    signsOfMalnutrition: "",
    signsOfMalnutritionPeriod: "day",
    signsOfMalnutritionAlert: "",
    signsOfMalnutritionAlertPeriod: "day",
  });

  const handleInputChange = (field, value) => {
    setGoals((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    try {
      // Get existing patients data
      const savedData = localStorage.getItem("patients");
      if (savedData) {
        const patients = JSON.parse(savedData);

        // Find and update the specific patient's goals
        const updatedPatients = patients.map((patient) => {
          if (patient.id === id) {
            return {
              ...patient,
              goals: goals,
            };
          }
          return patient;
        });

        // Save back to localStorage
        localStorage.setItem("patients", JSON.stringify(updatedPatients));

        // Show success message
        toast.success("Goals saved successfully");

        // Navigate back to patient profile
        navigate(`/patient/${id}`);
      }
    } catch (error) {
      console.error("Error saving goals:", error);
      toast.error("Error saving goals");
    }
  };

  // This is for handling individual section saves
  const handleSectionSave = (section) => {
    handleEditToggle(section);
    toast.success(`${section} section updated successfully`);
  };

  // Add editing state
  const [isEditing, setIsEditing] = useState({
    weightRecovery: false,
    micronutrient: false,
    clinicalSymptoms: false,
    developmental: false,
    education: false,
    longTerm: false,
    hydration: false,
  });

  // Add sections toggle state
  const [sections, setSections] = useState({
    weightRecovery: false,
    micronutrient: false,
    clinicalSymptoms: false,
    developmental: false,
    education: false,
    longTerm: false,
    hydration: false,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleEditToggle = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen py-10 mt-8">
      <div className="container mx-auto w-4/5 bg-white rounded-lg  p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-800  mb-8">
          Create Patient Profile
        </h2>

        <div className=" mx-auto bg-white rounded-lg">
          {/* Weight Recovery Goals Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("weightRecovery")}
            >
              Weight Recovery Goals
            </button>
            {sections.weightRecovery && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Weight Gain Target */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Weight Gain Target
                      </label>
                      <input
                        type="number"
                        name="weightGainTarget"
                        value={goals.weightGainTarget}
                        onChange={(e) =>
                          handleInputChange("weightGainTarget", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightGainPeriod"
                        value={goals.weightGainPeriod}
                        onChange={(e) =>
                          handleInputChange("weightGainPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="weightGainAlert"
                        value={goals.weightGainAlert}
                        onChange={(e) =>
                          handleInputChange("weightGainAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightGainAlertPeriod"
                        value={goals.weightGainAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "weightGainAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Weight-for-Height */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Weight-for-Height
                      </label>
                      <input
                        type="number"
                        name="weightForHeight"
                        value={goals.weightForHeight}
                        onChange={(e) =>
                          handleInputChange("weightForHeight", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightForHeightPeriod"
                        value={goals.weightForHeightPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "weightForHeightPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="weightForHeightAlert"
                        value={goals.weightForHeightAlert}
                        onChange={(e) =>
                          handleInputChange(
                            "weightForHeightAlert",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightForHeightAlertPeriod"
                        value={goals.weightForHeightAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "weightForHeightAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Initial MUAC */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Initial MUAC</label>
                      <input
                        type="number"
                        name="initialMuac"
                        value={goals.initialMuac}
                        onChange={(e) =>
                          handleInputChange("initialMuac", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="initialMuacPeriod"
                        value={goals.initialMuacPeriod}
                        onChange={(e) =>
                          handleInputChange("initialMuacPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="initialMuacAlert"
                        value={goals.initialMuacAlert}
                        onChange={(e) =>
                          handleInputChange("initialMuacAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="initialMuacAlertPeriod"
                        value={goals.initialMuacAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "initialMuacAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.weightRecovery}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.weightRecovery ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("weightRecovery")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("weightRecovery")}
                      >
                        Edit Weight Recovery Goals
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Micro-nutrient Repletion Goals Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("micronutrient")}
            >
              Micro-nutrient Repletion Goals
            </button>
            {sections.micronutrient && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Hemoglobin Level */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Hemoglobin Level
                      </label>
                      <input
                        type="number"
                        name="hemoglobinLevel"
                        value={goals.hemoglobinLevel}
                        onChange={(e) =>
                          handleInputChange("hemoglobinLevel", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="hemoglobinPeriod"
                        value={goals.hemoglobinPeriod}
                        onChange={(e) =>
                          handleInputChange("hemoglobinPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="hemoglobinAlert"
                        value={goals.hemoglobinAlert}
                        onChange={(e) =>
                          handleInputChange("hemoglobinAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="hemoglobinAlertPeriod"
                        value={goals.hemoglobinAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "hemoglobinAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Zinc */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Zinc</label>
                      <input
                        type="number"
                        name="zinc"
                        value={goals.zinc}
                        onChange={(e) =>
                          handleInputChange("zinc", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="zincPeriod"
                        value={goals.zincPeriod}
                        onChange={(e) =>
                          handleInputChange("zincPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="zincAlert"
                        value={goals.zincAlert}
                        onChange={(e) =>
                          handleInputChange("zincAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="zincAlertPeriod"
                        value={goals.zincAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("zincAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Vitamin D */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Vitamin D</label>
                      <input
                        type="number"
                        name="vitaminD"
                        value={goals.vitaminD}
                        onChange={(e) =>
                          handleInputChange("vitaminD", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="vitaminDPeriod"
                        value={goals.vitaminDPeriod}
                        onChange={(e) =>
                          handleInputChange("vitaminDPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="vitaminDAlert"
                        value={goals.vitaminDAlert}
                        onChange={(e) =>
                          handleInputChange("vitaminDAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="vitaminDAlertPeriod"
                        value={goals.vitaminDAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "vitaminDAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  {/* Second row for Iron and Vitamin A */}
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Iron */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Iron</label>
                      <input
                        type="number"
                        name="iron"
                        value={goals.iron}
                        onChange={(e) =>
                          handleInputChange("iron", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="ironPeriod"
                        value={goals.ironPeriod}
                        onChange={(e) =>
                          handleInputChange("ironPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="ironAlert"
                        value={goals.ironAlert}
                        onChange={(e) =>
                          handleInputChange("ironAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="ironAlertPeriod"
                        value={goals.ironAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("ironAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Vitamin A */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Vitamin A</label>
                      <input
                        type="number"
                        name="vitaminA"
                        value={goals.vitaminA}
                        onChange={(e) =>
                          handleInputChange("vitaminA", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="vitaminAPeriod"
                        value={goals.vitaminAPeriod}
                        onChange={(e) =>
                          handleInputChange("vitaminAPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="vitaminAAlert"
                        value={goals.vitaminAAlert}
                        onChange={(e) =>
                          handleInputChange("vitaminAAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="vitaminAAlertPeriod"
                        value={goals.vitaminAAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "vitaminAAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.micronutrient}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.micronutrient ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("micronutrient")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("micronutrient")}
                      >
                        Edit Micro-nutrient Goals
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Hydration and Electrolyte Balance Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("hydration")}
            >
              Hydration and Electrolyte Balance
            </button>
            {sections.hydration && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-4 gap-8 items-start">
                    {/* Dehydration */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Dehydration</label>
                      <input
                        type="number"
                        name="dehydration"
                        value={goals.dehydration}
                        onChange={(e) =>
                          handleInputChange("dehydration", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="dehydrationPeriod"
                        value={goals.dehydrationPeriod}
                        onChange={(e) =>
                          handleInputChange("dehydrationPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="dehydrationAlert"
                        value={goals.dehydrationAlert}
                        onChange={(e) =>
                          handleInputChange("dehydrationAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="dehydrationAlertPeriod"
                        value={goals.dehydrationAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "dehydrationAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Potassium */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Potassium</label>
                      <input
                        type="number"
                        name="potassium"
                        value={goals.potassium}
                        onChange={(e) =>
                          handleInputChange("potassium", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="potassiumPeriod"
                        value={goals.potassiumPeriod}
                        onChange={(e) =>
                          handleInputChange("potassiumPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="potassiumAlert"
                        value={goals.potassiumAlert}
                        onChange={(e) =>
                          handleInputChange("potassiumAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="potassiumAlertPeriod"
                        value={goals.potassiumAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "potassiumAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Chloride */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Chloride</label>
                      <input
                        type="number"
                        name="chloride"
                        value={goals.chloride}
                        onChange={(e) =>
                          handleInputChange("chloride", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="chloridePeriod"
                        value={goals.chloridePeriod}
                        onChange={(e) =>
                          handleInputChange("chloridePeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="chlorideAlert"
                        value={goals.chlorideAlert}
                        onChange={(e) =>
                          handleInputChange("chlorideAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="chlorideAlertPeriod"
                        value={goals.chlorideAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "chlorideAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Sodium */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Sodium</label>
                      <input
                        type="number"
                        name="sodium"
                        value={goals.sodium}
                        onChange={(e) =>
                          handleInputChange("sodium", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="sodiumPeriod"
                        value={goals.sodiumPeriod}
                        onChange={(e) =>
                          handleInputChange("sodiumPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="sodiumAlert"
                        value={goals.sodiumAlert}
                        onChange={(e) =>
                          handleInputChange("sodiumAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="sodiumAlertPeriod"
                        value={goals.sodiumAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("sodiumAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.hydration}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.hydration ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("hydration")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("hydration")}
                      >
                        Edit Hydration and Electrolyte Balance
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Clinical Symptoms Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("clinicalSymptoms")}
            >
              Clinical Symptoms
            </button>
            {sections.clinicalSymptoms && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Edema */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Edema</label>
                      <input
                        type="number"
                        name="edema"
                        value={goals.edema}
                        onChange={(e) =>
                          handleInputChange("edema", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="edemaPeriod"
                        value={goals.edemaPeriod}
                        onChange={(e) =>
                          handleInputChange("edemaPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="edemaAlert"
                        value={goals.edemaAlert}
                        onChange={(e) =>
                          handleInputChange("edemaAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="edemaAlertPeriod"
                        value={goals.edemaAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("edemaAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Lethargy */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Lethargy</label>
                      <input
                        type="number"
                        name="lethargy"
                        value={goals.lethargy}
                        onChange={(e) =>
                          handleInputChange("lethargy", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="lethargyPeriod"
                        value={goals.lethargyPeriod}
                        onChange={(e) =>
                          handleInputChange("lethargyPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="lethargyAlert"
                        value={goals.lethargyAlert}
                        onChange={(e) =>
                          handleInputChange("lethargyAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="lethargyAlertPeriod"
                        value={goals.lethargyAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "lethargyAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Skin Lesions */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Skin Lesions</label>
                      <input
                        type="number"
                        name="skinLesions"
                        value={goals.skinLesions}
                        onChange={(e) =>
                          handleInputChange("skinLesions", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="skinLesionsPeriod"
                        value={goals.skinLesionsPeriod}
                        onChange={(e) =>
                          handleInputChange("skinLesionsPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="skinLesionsAlert"
                        value={goals.skinLesionsAlert}
                        onChange={(e) =>
                          handleInputChange("skinLesionsAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="skinLesionsAlertPeriod"
                        value={goals.skinLesionsAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "skinLesionsAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  {/* Second row for Others */}
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Others 1 */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Others 1</label>
                      <input
                        type="text"
                        name="others1"
                        value={goals.others1}
                        onChange={(e) =>
                          handleInputChange("others1", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="others1Period"
                        value={goals.others1Period}
                        onChange={(e) =>
                          handleInputChange("others1Period", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="others1Alert"
                        value={goals.others1Alert}
                        onChange={(e) =>
                          handleInputChange("others1Alert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="others1AlertPeriod"
                        value={goals.others1AlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "others1AlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Others 2 */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Others 2</label>
                      <input
                        type="text"
                        name="others2"
                        value={goals.others2}
                        onChange={(e) =>
                          handleInputChange("others2", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="others2Period"
                        value={goals.others2Period}
                        onChange={(e) =>
                          handleInputChange("others2Period", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="others2Alert"
                        value={goals.others2Alert}
                        onChange={(e) =>
                          handleInputChange("others2Alert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="others2AlertPeriod"
                        value={goals.others2AlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "others2AlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.clinicalSymptoms}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.clinicalSymptoms ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("clinicalSymptoms")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("clinicalSymptoms")}
                      >
                        Edit Clinical Symptoms
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Developmental and Functional Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("developmental")}
            >
              Developmental and Functional
            </button>
            {sections.developmental && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Appetite Level */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Appetite Level</label>
                      <input
                        type="number"
                        name="appetiteLevel"
                        value={goals.appetiteLevel}
                        onChange={(e) =>
                          handleInputChange("appetiteLevel", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="appetitePeriod"
                        value={goals.appetitePeriod}
                        onChange={(e) =>
                          handleInputChange("appetitePeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="appetiteAlert"
                        value={goals.appetiteAlert}
                        onChange={(e) =>
                          handleInputChange("appetiteAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="appetiteAlertPeriod"
                        value={goals.appetiteAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "appetiteAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Activity Level */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Activity Level</label>
                      <input
                        type="number"
                        name="activityLevel"
                        value={goals.activityLevel}
                        onChange={(e) =>
                          handleInputChange("activityLevel", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="activityPeriod"
                        value={goals.activityPeriod}
                        onChange={(e) =>
                          handleInputChange("activityPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="activityAlert"
                        value={goals.activityAlert}
                        onChange={(e) =>
                          handleInputChange("activityAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="activityAlertPeriod"
                        value={goals.activityAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "activityAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Dehydration */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Dehydration</label>
                      <input
                        type="number"
                        name="dehydration"
                        value={goals.dehydration}
                        onChange={(e) =>
                          handleInputChange("dehydration", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="dehydrationPeriod"
                        value={goals.dehydrationPeriod}
                        onChange={(e) =>
                          handleInputChange("dehydrationPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="dehydrationAlert"
                        value={goals.dehydrationAlert}
                        onChange={(e) =>
                          handleInputChange("dehydrationAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="dehydrationAlertPeriod"
                        value={goals.dehydrationAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "dehydrationAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.developmental}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.developmental ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("developmental")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("developmental")}
                      >
                        Edit Developmental and Functional
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Education and Caregiver Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("education")}
            >
              Education and Caregiver
            </button>
            {sections.education && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Caregiver Understanding */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Caregiver Understanding
                      </label>
                      <input
                        type="number"
                        name="caregiverUnderstanding"
                        value={goals.caregiverUnderstanding}
                        onChange={(e) =>
                          handleInputChange(
                            "caregiverUnderstanding",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="caregiverUnderstandingPeriod"
                        value={goals.caregiverUnderstandingPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "caregiverUnderstandingPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="caregiverUnderstandingAlert"
                        value={goals.caregiverUnderstandingAlert}
                        onChange={(e) =>
                          handleInputChange(
                            "caregiverUnderstandingAlert",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="caregiverUnderstandingAlertPeriod"
                        value={goals.caregiverUnderstandingAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "caregiverUnderstandingAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Appointment Attendance */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Appointment Attendance
                      </label>
                      <input
                        type="number"
                        name="appointmentAttendance"
                        value={goals.appointmentAttendance}
                        onChange={(e) =>
                          handleInputChange(
                            "appointmentAttendance",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="appointmentAttendancePeriod"
                        value={goals.appointmentAttendancePeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "appointmentAttendancePeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="appointmentAttendanceAlert"
                        value={goals.appointmentAttendanceAlert}
                        onChange={(e) =>
                          handleInputChange(
                            "appointmentAttendanceAlert",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="appointmentAttendanceAlertPeriod"
                        value={goals.appointmentAttendanceAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "appointmentAttendanceAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.education}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.education ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("education")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("education")}
                      >
                        Edit Education and Caregiver
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Long-Term Health and Growth Section */}
          <div className="mb-4">
            <button
              className="w-full text-left bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-500"
              onClick={() => toggleSection("longTerm")}
            >
              Long-Term Health and Growth
            </button>
            {sections.longTerm && (
              <div className="container mx-auto w-full bg-white rounded-lg shadow-md px-8 py-2 my-2">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Weight */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Weight</label>
                      <input
                        type="number"
                        name="weight"
                        value={goals.weight}
                        onChange={(e) =>
                          handleInputChange("weight", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightPeriod"
                        value={goals.weightPeriod}
                        onChange={(e) =>
                          handleInputChange("weightPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="weightAlert"
                        value={goals.weightAlert}
                        onChange={(e) =>
                          handleInputChange("weightAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="weightAlertPeriod"
                        value={goals.weightAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("weightAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* Height */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">Height</label>
                      <input
                        type="number"
                        name="height"
                        value={goals.height}
                        onChange={(e) =>
                          handleInputChange("height", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="heightPeriod"
                        value={goals.heightPeriod}
                        onChange={(e) =>
                          handleInputChange("heightPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="heightAlert"
                        value={goals.heightAlert}
                        onChange={(e) =>
                          handleInputChange("heightAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="heightAlertPeriod"
                        value={goals.heightAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("heightAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>

                    {/* MUAC */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">MUAC</label>
                      <input
                        type="number"
                        name="muac"
                        value={goals.muac}
                        onChange={(e) =>
                          handleInputChange("muac", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="muacPeriod"
                        value={goals.muacPeriod}
                        onChange={(e) =>
                          handleInputChange("muacPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="muacAlert"
                        value={goals.muacAlert}
                        onChange={(e) =>
                          handleInputChange("muacAlert", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="muacAlertPeriod"
                        value={goals.muacAlertPeriod}
                        onChange={(e) =>
                          handleInputChange("muacAlertPeriod", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  {/* Second row for Signs of Malnutrition */}
                  <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Signs of Malnutrition */}
                    <div className="flex flex-col gap-2">
                      <label className="block font-bold">
                        Signs of Malnutrition
                      </label>
                      <input
                        type="text"
                        name="signsOfMalnutrition"
                        value={goals.signsOfMalnutrition}
                        onChange={(e) =>
                          handleInputChange(
                            "signsOfMalnutrition",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="signsOfMalnutritionPeriod"
                        value={goals.signsOfMalnutritionPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "signsOfMalnutritionPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                      <label className="block text-sm mt-2">Alert</label>
                      <input
                        type="number"
                        name="signsOfMalnutritionAlert"
                        value={goals.signsOfMalnutritionAlert}
                        onChange={(e) =>
                          handleInputChange(
                            "signsOfMalnutritionAlert",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      />
                      <label className="block text-sm mt-2">Per</label>
                      <select
                        name="signsOfMalnutritionAlertPeriod"
                        value={goals.signsOfMalnutritionAlertPeriod}
                        onChange={(e) =>
                          handleInputChange(
                            "signsOfMalnutritionAlertPeriod",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                        disabled={!isEditing.longTerm}
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    {isEditing.longTerm ? (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleSectionSave("longTerm")}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md mb-8"
                        onClick={() => handleEditToggle("longTerm")}
                      >
                        Edit Long-Term Health and Growth
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Main Save Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Save All Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSetting;
