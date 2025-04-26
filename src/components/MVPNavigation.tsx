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
    // Redirect to the actual MVP Kasst site after successful form submission
    window.location.href = "https://mvpkasst.netlify.app/";
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
