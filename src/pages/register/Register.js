import React from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressBook,
  faEnvelope,

} from "@fortawesome/free-regular-svg-icons";
import { faKey, faPhone} from "@fortawesome/free-solid-svg-icons";
import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required"),
  phoneNumber: Yup.number()
  .min(2, "Too Short!")
  .max(15, "Too Long!")
  .required("Required"),
  fullName:Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required")
});

export default function Register() {
  return (
    <Formik
      initialValues={{
        userName: "",
        address: "",
        email: "",
        password: "",
        phoneNumber: "",
        fullName: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
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
                  <Field name="userName"  className="form-input" placeholder="Username"/>
                  {errors.userName && touched.userName ? (
                    <div className="rig-error">{errors.userName}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                   <Field name="email"  className="form-input" placeholder="Email"/>
                  {errors.email && touched.email ? (
                    <div className="rig-error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                   <Field name="address"  className="form-input" placeholder="Address"/>
                  {errors.address && touched.address ? (
                    <div className="rig-error">{errors.address}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                   <Field name="phoneNumber"  className="form-input"  placeholder="Phone Number"/>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="rig-error">{errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faKey}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                   <Field name="password"  className="form-input" type="password" placeholder="password"/>
                  {errors.password && touched.password ? (
                    <div className="rig-error">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                   <Field name="fullName"  className="form-input" placeholder="Full Name"/>
                  {errors.fullName && touched.fullName ? (
                    <div className="rig-error">{errors.fullName}</div>
                  ) : null}
                </div>
                <button>Submit</button>
                <div className="back-login">
                  <span>Already have an account?</span>
                  <Link to="/login">Login here</Link>
                </div>
                <div className="back-login">
                  <span>back to home?</span>
                  <Link to="/">In here</Link>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
