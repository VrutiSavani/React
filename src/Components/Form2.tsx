import React, { FormEvent, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    e.preventDefault();
  };

  return (
    <>
      <div className="form_div">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_div">
            <label className="label">First Name : </label>
            <input
              type="text"
              className="input"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="input_div">
            <label className="label">Last Name : </label>
            <input
              type="text"
              className="input"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="input_div">
            <label className="label">Email : </label>
            <input
              type="text"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input_div">
            <label className="label">Password : </label>
            <input
              type="password"
              className="input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input_div">
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
