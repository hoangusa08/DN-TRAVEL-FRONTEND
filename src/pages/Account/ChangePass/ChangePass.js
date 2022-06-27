import React from "react";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./ChangePass.scss";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import http from "../../../core/services/httpService";
import { getUser } from "../../../core/localStore";
import { pushToast } from "../../../components/Toast";
import { useHistory } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  newPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  repeatNewPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ChangePass() {
  const user = getUser();
  const history = useHistory();
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <div style={{ width: "100%", minHeight: "90vh" }}>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              repeatNewPassword: "",
            }}
            validationSchema={SignupSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              if (values.newPassword === values.repeatNewPassword) {
                http
                  .put(`/customer/change-password/${user?.id}`, {
                    oldPassword: values.oldPassword,
                    newPassword: values.newPassword,
                  })
                  .then((res) => {
                    pushToast("success", res.message);
                    history.push("/Account")
                  })
                  .catch((e) => {
                    pushToast("error", e?.message);
                  });
              } else {
                pushToast("error", "Repeat New Password incorrect");
              }
            }}
            className="form-account"
          >
            {(formikProps) => {
              const { errors, touched } = formikProps;
              return (
                <Form>
                  <div className="account-formik">
                    <div className="item-ctn">
                      <div className="item">
                        <h4>Mật khẩu củ</h4>
                        <Field
                          name="oldPassword"
                          className="form-input"
                          placeholder="Mật khẩu củ"
                          type="password"
                        />
                        {errors.oldPassword && touched.oldPassword ? (
                          <div className="rig-error">{errors.oldPassword}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Mật khẩu mới</h4>
                        <Field
                          name="newPassword"
                          className="form-input"
                          placeholder="Mật khẩu mới"
                          type="password"
                        />
                        {errors.newPassword && touched.newPassword ? (
                          <div className="rig-error">{errors.newPassword}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Nhắc lại mật khẩu</h4>
                        <Field
                          name="repeatNewPassword"
                          className="form-input"
                          placeholder="Nhắc lại mật khẩu"
                          type="password"
                        />
                        {errors.repeatNewPassword &&
                        touched.repeatNewPassword ? (
                          <div className="rig-error">
                            {errors.repeatNewPassword}
                          </div>
                        ) : null}
                      </div>

                      <button className="edit-pass">Submit</button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
