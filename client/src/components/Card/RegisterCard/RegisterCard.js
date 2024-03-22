// RegisterCard.js
import React, { useState } from 'react';
import './RegisterCard.css';

const RegisterCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
    dob: '',
    mobile: '',
    address: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="register__auth__container">
      <div className="register__auth">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <table>
            <tbody>
              <tr>
                <td align="center"><strong>Name:</strong></td>
                <td align="center"><strong>Surname:</strong></td>
                <td align="center"><strong>Date of Birth:</strong></td>
              </tr>
              <tr>
                <td align="center">
                  <input
                    name="name"
                    type="text"
                    className="styletxtfield"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center">
                  <input
                    name="surname"
                    type="text"
                    className="styletxtfield"
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center">
                  <input
                    name="dob"
                    type="date"
                    className="styletxtfield"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td align="center"><strong>Email:</strong></td>
                <td align="center"><strong>Password:</strong></td>
                <td align="center"><strong>Re-Password:</strong></td>
              </tr>
              <tr>
                <td align="center">
                  <input
                    name="email"
                    type="text"
                    className="styletxtfield"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center">
                  <input
                    name="password"
                    type="password"
                    className="styletxtfield"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center">
                  <input
                    name="repeatPassword"
                    type="password"
                    className="styletxtfield"
                    value={formData.repeatPassword}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td align="center"><strong>Mobile:</strong></td>
                <td align="center"><strong>Address:</strong></td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">
                  <input
                    name="mobile"
                    type="text"
                    className="styletxtfield"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center">
                  <input
                    name="address"
                    type="text"
                    className="styletxtfield"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td colSpan="3" align="center">
                  <button type="submit" className="ejiro">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
