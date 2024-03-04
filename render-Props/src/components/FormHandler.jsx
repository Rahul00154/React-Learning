import React, { useState } from 'react';

const FormHandler = ({ render }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    /* Empty Check */

    if (value === '') {
      setError({ msg: `${name} is required` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    setFormData(formDataObj);
  };

  return render({ formData, error, handleChange, handleSubmit });
};

export default FormHandler;
