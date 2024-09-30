import React from "react";

function CreateCarPage({ handleChange, handleSubmit, formData }) {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Make
          <input
            type="text"
            name="make"
            onChange={handleChange}
            value={formData.make}
            required
          />
        </label>

        <label>
          Model
          <input
            type="text"
            name="model"
            onChange={handleChange}
            value={formData.model}
            required
          />
        </label>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}

export default CreateCarPage;
