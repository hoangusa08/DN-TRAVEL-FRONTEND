import React from "react";
import "./Login.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../store/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../store/user";
import Loading from "../../components/Loading/Loading";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Login() {
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  return (
    <>
      <Loading visible={isLoading} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {(formikProps) => {
          const { errors, touched } = formikProps;
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
                    <Field
                      name="email"
                      className="form-input"
                      placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="rig-error">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-parent">
                    <FontAwesomeIcon
                      icon={faKey}
                      className="icon"
                      color="while"
                      size="lg"
                    />
                    <Field
                      name="password"
                      className="form-input"
                      type="password"
                      placeholder="M???t Kh???u"
                    />
                    {errors.password && touched.password ? (
                      <div className="rig-error">{errors.password}</div>
                    ) : null}
                  </div>
                  <button>????ng Nh???p</button>
                  <div className="back-login">
                    <span>B???n ch??a c?? t??i kho???n?</span>
                    <Link to="/register">????ng k?? t???i ????y</Link>
                  </div>
                  <div className="back-login">
                    <span>Tr??? v??? trang ch???</span>
                    <Link to="/">T???i ????y</Link>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
