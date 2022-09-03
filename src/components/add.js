import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const Add = () => {
  const contacts = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    console.log(checkNumber);

    if (!email || !number || !name) {
      return toast.warning("Fill the details noob");
    }

    if (checkEmail) {
      return toast.error("Email Already exists");
    }

    if (checkNumber) {
      return toast.error("Number already Exists");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name: name,
      email: email,
      number: number,
    };

    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });

    history("/");
    toast.success("Student has been added successfully");

    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="display-3 text-center">Add Contact</h1>
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
                  value="Add Student"
                  className="btn btn-block btn-dark"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
