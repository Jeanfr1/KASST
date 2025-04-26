"use client";

import { useState } from "react";
import MVPForm from "./MVPForm";

export default function MVPNavigation() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmitSuccess = () => {
    // Redirect to MVP page after successful form submission
    window.location.href = "/mvp"; // Change this URL to your actual MVP page
  };

  return (
    <>
      <button
        onClick={handleOpenForm}
        aria-label="MVP Kasst"
        className="text-light hover:text-primary transition-colors duration-300 font-medium"
      >
        MVP Kasst
      </button>

      {showForm && (
        <MVPForm
          onClose={handleCloseForm}
          onSubmitSuccess={handleFormSubmitSuccess}
        />
      )}
    </>
  );
}
