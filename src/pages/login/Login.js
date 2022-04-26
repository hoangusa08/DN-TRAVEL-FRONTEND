import React from "react";
import "./Login.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
// import { login } from "../../store/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const sumitLogin = () => {
    // dispatch(login(dataLogin));
  };
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
            <div className="login">
              <div className="login-ctn">
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
                <button>Submit</button>
                <div className="back-login">
                  <span>Already have an account?</span>
                  <Link to="/register">Register here</Link>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
