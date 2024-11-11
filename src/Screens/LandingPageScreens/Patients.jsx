import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = () => {
    try {
      const savedData = localStorage.getItem('patients');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setPatients(parsedData);
      }
    } catch (error) {
      console.error('Error loading patients:', error);
      toast.error('Error loading patients');
    }
  };

  const viewProfile = (patientId) => {
    navigate(`/patients/${patientId}`);
  };

  const handleDeleteClick = (patient) => {
    setPatientToDelete(patient);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    try {
      const updatedPatients = patients.filter(p => p.id !== patientToDelete.id);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      setPatients(updatedPatients);
      toast.success('Patient deleted successfully');
      setShowDeleteModal(false);
      setPatientToDelete(null);
    } catch (error) {
      console.error('Error deleting patient:', error);
      toast.error('Error deleting patient');
    }
  };

  // Delete Modal Component
  const DeleteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
        <p className="mb-6">
          Are you sure you want to delete patient{' '}
          <span className="font-semibold">{patientToDelete?.patientName}</span>?
          This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 font-sans pb-24 pt-24">
      <div className="max-w-full mx-16 mt-5 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 my-2">Patient List</h2>
        <p className="text-gray-600 mt-2">
          Total Patients: {patients.length}
        </p>

        {patients.length === 0 ? (
          <p className="text-center py-4 text-gray-500">No patients found</p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="w-full mt-5 border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-3 border border-gray-200">Reg. Number</th>
                  <th className="px-4 py-3 border border-gray-200">Patient Name</th>
                  <th className="px-4 py-3 border border-gray-200">Age</th>
                  <th className="px-4 py-3 border border-gray-200">Sex</th>
                  <th className="px-4 py-3 border border-gray-200">City</th>
                  <th className="px-4 py-3 border border-gray-200">Admission Status</th>
                  <th className="px-4 py-3 border border-gray-200">Admission Date</th>
                  <th className="px-4 py-3 border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.registrationNumber}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.patientName}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.age}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.sex}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.city}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.admissionStatus}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center">{patient.admissionDate}</td>
                    <td className="px-4 py-3 border border-gray-200">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => viewProfile(patient.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDeleteClick(patient)}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && <DeleteModal />}
    </div>
  );
};

export default Patients;