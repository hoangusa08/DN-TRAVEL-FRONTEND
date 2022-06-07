import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import "./Account.scss";
import UserNavigation from "./Component/UserNavigation";
import * as Yup from "yup";
import useGetCustomerDetail from "../../hook/useGetCustomerDetail";
import { getUser } from "../../core/localStore";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function Account() {
  const [data, getCategories] = useGetCustomerDetail();
  const [isEdit, setisEdit] = React.useState(false);
  const user = getUser();

  React.useEffect(() => {
    getCategories(user?.id);
  }, []);

  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <Formik
          initialValues={data}
          validationSchema={SignupSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            if (isEdit) {
              setisEdit(false)
            } else {
              setisEdit(true);
            }
          }}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            return (
              <Form>
                <div className="">
                  <div className="">
                    <div className="f">
                      <h6>email</h6>
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
                    <div className="">
                      <Field
                        name="fullName"
                        className=""
                        placeholder="fullName"
                        disabled={!isEdit}
                      />
                      {errors.fullName && touched.fullName ? (
                        <div className="rig-error">{errors.fullName}</div>
                      ) : null}
                    </div>
                    <button>{isEdit ? "Submit" : "Edit"} </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
