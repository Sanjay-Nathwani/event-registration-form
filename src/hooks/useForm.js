import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.age || values.age <= 0) {
      errors.age = "Age must be greater than 0";
    }
    if (values.attendingWithGuest === "Yes" && !values.guestName) {
      errors.guestName = "Guest name is required";
    }
    return errors;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
