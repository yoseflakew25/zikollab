import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Screens
import Home from "../Screens/LandingPageScreens/Home";
import NotFoundPage from "../Screens/LandingPageScreens/NotFoundPage.jsx";
import About from "../Screens/LandingPageScreens/About.jsx";
import Patients from "../Screens/LandingPageScreens/Patients.jsx";
import PatientProfile from "../Screens/LandingPageScreens/PatientProfile.jsx";
import GoalSetting from "../Screens/LandingPageScreens/GoalSetting.jsx";
import CreateProfile from "../Screens/LandingPageScreens/CreateProfile.jsx";
import NutritionPlan from "../Screens/LandingPageScreens/NutritionPlan.jsx";


const AllRoutes = () => {


  return (
    <>
      <Routes>
        <Route
          index
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
       

       <Route
          path='/patients'
          element={<Patients />}
        />
        <Route
          path='/patients/:id'
          element={<PatientProfile />}
        />
        <Route
          path='/patients/:id/goal-setting'
          element={<GoalSetting />}
        />

<Route
          path='/patients/:id/plan'
          element={<NutritionPlan />}
        />


        <Route
          path='/create-profile'
          element={<CreateProfile />}
        />
       
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>

      <ToastContainer position='top-right' />
    </>
  );
};

export default AllRoutes;
