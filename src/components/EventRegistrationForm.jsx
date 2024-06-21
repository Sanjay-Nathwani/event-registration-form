import { useState } from "react";
import useForm from "../hooks/useForm";
import "../styles/EventRegistrationForm.css";

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);
  const [isGuestVisible, setIsGuestVisible] = useState(false);

  function submitForm() {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form className="event-registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={values.age || ""}
          onChange={handleChange}
          required
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="form-group">
        <label>Are you attending with a guest?</label>
        <select
          name="attendingWithGuest"
          value={values.attendingWithGuest || "No"}
          onChange={(e) => {
            handleChange(e);
            setIsGuestVisible(e.target.value === "Yes");
          }}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {isGuestVisible && (
        <div className="form-group">
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName || ""}
            onChange={handleChange}
            required={isGuestVisible}
          />
          {errors.guestName && <p className="error">{errors.guestName}</p>}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
