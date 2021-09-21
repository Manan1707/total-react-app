/* eslint-disable */
import React, { useState } from "react";
import { Form, Formik } from "formik";
import Select from "react-select";
import TextField from "./TextField";
import * as Yup from "yup";

function AddNewUser(props) {
  const [value, setValue] = useState("");

  const validate = Yup.object({
    fullname: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Incorrect format. Please check your typos.")
      .required("This field is required."),
    job: Yup.string().required("This field is required."),
    userRole: Yup.string(),
  });

  const options = [
    { value: "user", label: "User", name: "User" },
    { value: "admin", label: "Admin", name: "Admin" },
  ];

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#EAF7EE",
        primary: "#23A956",
        primary50: "#23A956",
        neutral20: "#D7D8E0",
      },
    };
  }

  return props.trigger ? (
    <div className="adduserpopup">
      <div className="userpopupinner">
        <div className="userpopupHeading border-bottom">
          <h2>Add New user</h2>
          <span>
            <a onClick={() => props.setTrigger(false)}>
              <img src="./Image/closepopup-icon.svg" alt="Close Icon" />
            </a>
          </span>
        </div>
        <div className="userpopupbody">
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              job: "",
              userRole: "",
            }}
            validationSchema={validate}
            validateOnMount
          >
            {(formik) => (
              <div>
                <Form className="formik-form">
                  <TextField label="Full Name" name="fullname" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Job Title" name="job" type="text" />
                  <div style={{ width: "400px" }}>
                    <label htmlFor="userRole" className="formik-label">
                      User Role*
                    </label>
                    <Select
                      classNamePrefix="userSelect"
                      placeholder="Search User Role..."
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      className="user-react-select is-invalid"
                      theme={customTheme}
                      options={options}
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          height: "48px",
                          minHeight: "48px",
                        }),
                        menu: (styles) => ({
                          ...styles,
                          width: "274px",
                          left: "30%",
                        }),
                        menuList: (styles) => ({
                          ...styles,
                          paddingTop: "12px",
                          paddingBottom: "12px",
                        }),
                        indicatorSeparator: (base) => ({
                          ...base,
                          display: "none",
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected
                            ? "EAF7EE"
                            : "transparent",
                          color: "inherit",
                          ":hover": {
                            backgroundColor: "#F1F1F5",
                          },
                        }),
                      }}
                      menuPlacement="top"
                      autoComplete="off"
                      name="userRole"
                      // getOptionLabel={(option) => (
                      //     <div>
                      //         <p>{option.label}</p>
                      //     </div>
                      // )}
                      // components={{ Option: options}}
                      onChange={(a, b) => {
                        if (b.action === "select-option") {
                          setValue({ userRole: a.value, isChecked: a.name });
                        }
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: "0.2px solid #d7d7db",
                      width: "616px",
                      marginLeft: "-48px",
                      marginTop: "30px",
                    }}
                  ></div>
                  <div className="userpopup-footer d-flex justify-content-between">
                    <button
                      type="reset"
                      className="userpopup-cancel"
                      onClick={() => props.setTrigger(false)}
                    >
                      Cancle
                    </button>
                    <div className="userfooterbutton">
                      <button type="button" disabled={!formik.isValid}>
                        Send Invite
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddNewUser;
