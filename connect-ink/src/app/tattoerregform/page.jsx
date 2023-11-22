"use client";

import { useState } from "react";

import "./page.css";

const RegistroFormulario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    city: "",
    postcode: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del Formulario:", formData);
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.password === formData.passwordConfirm &&
    formData.firstName &&
    formData.lastName &&
    formData.mobile &&
    formData.address &&
    formData.city &&
    formData.postcode &&
    formData.privacyPolicy;

  return (
    <div className="formStyle">
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Postcode"
        />
        <label>
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
          />
          I have read and agree to the Privacy Policy
        </label>
        <button type="submit" disabled={!isFormValid}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistroFormulario;
