import React from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { Form, Formik } from "formik";

export default function Register() {
  return (
    <Formik>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log(formikProps);
        return (
          <Form>
            <div className="register">
              <div className="register-ctn">
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input className="form-input" placeholder="username"></input>
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input className="form-input" placeholder="email"></input>
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input className="form-input" placeholder="address"></input>
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input
                    className="form-input"
                    placeholder="phone number"
                  ></input>
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input
                    type="password"
                    className="form-input"
                    placeholder="password"
                  ></input>
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <input className="form-input" placeholder="fullname"></input>
                </div>
                <button>Submit</button>
                <div className="back-login">
                  <span>Already have an account?</span>
                  <a href="a">Login here</a>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
