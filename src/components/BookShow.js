import React, { useState, useEffect } from "react";

export const BookShow = (props) => {
  const [formData, setFormData] = useState({
    movieName: props.movieName,
    name: "",
    email: "",
    phone: "",
    address: "",
    inculdePopcorn: true,
  });

  // Updating the form data on change
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // submitting the form
  function handleSubmit(event) {
    event.preventDefault();
  }

  // storing form data to local storage
  useEffect(() => {
    localStorage.setItem("Booking", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="book mt-4">
      <h4>Book Your Show</h4>
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="MovieName">Movie Title</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="movieName"
              value={props.movieName}
              disabled
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Name">Your Name</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Phone">Phone No.</label>
            <input
              type="phone"
              className="form-control"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="address">Address</label>

            <textarea
              value={formData.address}
              className="form-control"
              onChange={handleChange}
              name="address"
            />
          </div>

          <div className="form-group form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="includePopcorn"
              checked={formData.inculdePopcorn}
              onChange={handleChange}
              name="includePopcorn"
            />
            <label htmlFor="includePopcorn">
              Do you want to add popcorn which will be provided during the show
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
