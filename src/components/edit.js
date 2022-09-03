import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const dispatch = useDispatch();

  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number
    );

    if (checkEmail) {
      return toast.error("Email alrady exits");
    }

    if (checkNumber) {
      return toast.error("Number alrady exits");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({
      type: "UPDATE_CONTACT",
      payload: data,
    });

    toast.success("The Details have been updated successfully!");

    history("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center">Edit Contact: {id}</h1>
          <div className="col-md-6 shadow mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Student"
                  className="btn btn-block btn-dark"
                ></input>
                <Link to="/" className="btn btn-danger ml-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h2>The student is not found</h2>
      )}
    </div>
  );
};

export default Edit;
