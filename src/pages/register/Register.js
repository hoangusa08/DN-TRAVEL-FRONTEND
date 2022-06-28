import React from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faKey, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import http from "../../core/services/httpService";
import { pushToast } from "../../components/Toast";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Quá ngắn!")
    .max(50, "Quá dài!")
    .required("Quan trọng!"),
  address: Yup.string()
    .min(2, "Quá ngắn!")
    .max(50, "Quá dài!")
    .required("Quan trọng!"),
  email: Yup.string().email("Email không đúng").required("Quan trọng!"),
  password: Yup.string()
    .min(2, "Quá ngắn!")
    .max(50, "Quá dài!")
    .required("Quan trọng!"),
  phoneNumber: Yup.number().min(2, "Quá ngắn!").required("Quan trọng!"),
  fullName: Yup.string()
    .min(2, "Quá ngắn!")
    .max(50, "Quá dài!")
    .required("Quan trọng!"),
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
        fullName: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        console.log(values);
        await http
          .post("/authen/register/customer", values)
          .then((res) => {
            pushToast("success", res.message);
          })
          .catch((e) => pushToast("error", e.message));
      }}
    >
      {(formikProps) => {
        const { errors, touched } = formikProps;
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
                  <Field
                    name="username"
                    className="form-input"
                    placeholder="Tên tài khoản"
                  />
                  {errors.username && touched.username ? (
                    <div className="rig-error">{errors.username}</div>
                  ) : null}
                </div>
                <div className="form-parent">
                  <FontAwesomeIcon
                    icon={faEnvelope}
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
                    icon={faAddressBook}
                    className="icon"
                    color="while"
                    size="lg"
                  />
                  <Field
                    name="address"
                    className="form-input"
                    placeholder="Địa chỉ"
                  />
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
                  <Field
                    name="phoneNumber"
                    className="form-input"
                    placeholder="Số Điện Thoại"
                  />
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
                  <Field
                    name="password"
                    className="form-input"
                    type="password"
                    placeholder="Mật khẩu"
                  />
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
                  <Field
                    name="fullName"
                    className="form-input"
                    placeholder="Tên người dùng"
                  />
                  {errors.fullName && touched.fullName ? (
                    <div className="rig-error">{errors.fullName}</div>
                  ) : null}
                </div>
                <button>Đăng kí</button>
                <div className="back-login">
                  <span>Bạn đã có tài khoản?</span>
                  <Link to="/login">Đăng nhập tại đây</Link>
                </div>
                <div className="back-login">
                  <span>Trở về trang chủ?</span>
                  <Link to="/">Tại Đây</Link>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
