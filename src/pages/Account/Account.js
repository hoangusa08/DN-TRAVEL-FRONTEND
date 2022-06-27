import { Field, Form, Formik } from "formik";
import React from "react";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import "./Account.scss";
import UserNavigation from "./Component/UserNavigation";
import * as Yup from "yup";
import useGetCustomerDetail from "../../hook/useGetCustomerDetail";
import { getUser } from "../../core/localStore";
import http from "../../core/services/httpService";
import { pushToast } from "../../components/Toast";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const dataBasic = {
  email: "",
  fullName: "",
  address: "",
  phoneNumber: "",
  username: "",
};

export default function Account() {
  const [data, getUserDetail] = useGetCustomerDetail();
  const [isEdit, setisEdit] = React.useState(false);
  const user = getUser();

  React.useEffect(() => {
    getUserDetail(user?.id);
  }, []);

  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <div style={{ width: "100%", minHeight: "90vh" }}>
          <Formik
            initialValues={data || dataBasic}
            validationSchema={SignupSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              if (isEdit) {
                http
                  .put(`/customer/edit-detail/${user?.id}`, {
                    ...values,
                    id: user.id,
                    role: data.id,
                  })
                  .then((res) => {
                    pushToast("success",res.message )
                    getUserDetail(user?.id);
                    setisEdit(false);
                  })
                  .catch((e) => {
                    console.log("---hoang---e", e.data.message);
                  });
              } else {
                setisEdit(true);
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
                        <h4>Email</h4>
                        <Field
                          name="email"
                          className="form-input"
                          placeholder="Email"
                          disabled={!isEdit}
                        />
                        {errors.email && touched.email ? (
                          <div className="rig-error">{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Tên người dùng</h4>
                        <Field
                          name="fullName"
                          className="form-input"
                          placeholder="fullName"
                          disabled={!isEdit}
                        />
                        {errors.fullName && touched.fullName ? (
                          <div className="rig-error">{errors.fullName}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Địa chỉ</h4>
                        <Field
                          name="address"
                          className="form-input"
                          placeholder="Address"
                          disabled={!isEdit}
                        />
                        {errors.address && touched.address ? (
                          <div className="rig-error">{errors.address}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Số điện thoại</h4>
                        <Field
                          name="phoneNumber"
                          className="form-input"
                          placeholder="Phone Number"
                          disabled={!isEdit}
                        />
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <div className="rig-error">{errors.phoneNumber}</div>
                        ) : null}
                      </div>
                      <div className="item">
                        <h4>Tên tài khoản</h4>
                        <Field
                          name="username"
                          className="form-input"
                          placeholder="Username"
                          disabled={!isEdit}
                        />
                        {errors.username && touched.username ? (
                          <div className="rig-error">{errors.username}</div>
                        ) : null}
                      </div>
                      <button className="edit-account">
                        {isEdit ? "Lưu" : "Chỉnh Sửa"}
                      </button>
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
