import React from "react";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./ChangePass.scss";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

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
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <div style={{ width: "100%" , minHeight: "90vh"}}>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              repeatNewPassword: ""
            }}
            validationSchema={SignupSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log("---hoang---", values);
              // if (isEdit) {
              //   setisEdit(false);
              // } else {
              //   setisEdit(true);
              // }
            }}
            className="form-account"
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;
              return (
                <Form>
                  <div className="account-formik">
                    <div className="item-ctn">
                      <div className="item">
                        <h4>Old Password</h4>
                        <Field
                          name="oldPassword"
                          className="form-input"
                          placeholder="Old Password"
                          type="password"
                        />
                        {errors.newPassword && touched.newPassword ? (
                          <div className="rig-error">{errors.newPassword}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>New Password</h4>
                        <Field
                          name="newPassword"
                          className="form-input"
                          placeholder="New Password"
                          type="password"
                        />
                        {errors.newPassword && touched.newPassword ? (
                          <div className="rig-error">{errors.newPassword}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Repeat New Password</h4>
                        <Field
                          name="repeatNewPassword"
                          className="form-input"
                          placeholder="Repeat New Password"
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
