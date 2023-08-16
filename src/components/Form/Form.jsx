import { useState } from "react";
import "./Form.css";
// import rickAndMorty from "./images/rickAndMorty.jpg" ;
import validate from "./validation.js";

const Form = ({ login }) => {
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const nameInput = event.target.name;
    setDataUser({
      ...dataUser,
      [nameInput]: event.target.value,
    });
    setErrors(
      validate({
        ...dataUser,
        [nameInput]: event.target.value,
      })
    );
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    login(dataUser);
  };

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <div className="form_image">
          <img
            src={
              "https://www.wescreenplay.com/wp-content/uploads/2017/11/rick-and-morty-portal.jpg"
            }
            alt="login"
          />
        </div>
        <div className="form_inputs">
          <label>Email</label>
          <input
            type="text"
            value={dataUser.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className="form_errors">{errors.email}</p>}
        </div>
        <div className="form_inputs">
          <label>Password</label>
          <input
            type="password"
            value={dataUser.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password && <p className="form_errors">{errors.password}</p>}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
