import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Navbar from "./page/Navbar";
import Footer from "./page/Footer";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import RoleSelection from "./page/role_selection/RoleSelection";
import RegisterUser from "./page/registration/RegisterUser";
import Login from "./page/login/Login";
import DonorRegistration from "./page/donor/DonorRegistration";
import RecipientRegistration from "./page/recipient/RecipientRegistration";
import Dashboard from "./page/dashboard/Dashboard";
import OrganTracker from "./page/tracking/OrganTracker";
import BlockchainVerification from "./page/blockchain/BlockchainVerification";
import ContactHelp from "./page/contact/ContactHelp";
import NotFound from "./page/NotFound";
import DoctorRegistration from "./page/doctor/DoctorRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donor-registration" element={<DonorRegistration />} />
      <Route path="/recipient-registration" element={<RecipientRegistration />} />
      <Route path="/doctor-registration" element={<DoctorRegistration />} />DoctorRegistration
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/organ-tracker" element={<OrganTracker />} />
      <Route path="/blockchain-verification" element={<BlockchainVerification />} />
      <Route path="/contact-help" element={<ContactHelp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
