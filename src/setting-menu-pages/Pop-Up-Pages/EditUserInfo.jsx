import React, { useState } from "react";
import { Form, Formik } from "formik";
import SelectLabel from "./SelectLabel";
import Select from "react-select";
import * as Yup from "yup";

function EditUserInfo(props) {
  const [value, setValue] = useState("");

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

  const validate = Yup.object({
    fullname: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Incorrect format. Please check your typos.")
      .required("This field is required."),
    job: Yup.string().required("This field is required."),
    userRole: Yup.string(),
  });

  return props.trigger ? (
    <div className="editUserPopUp">
      <div className="popup-inner">
        <div className="popHeading border-bottom">
          <h2 className="editUserinfo">Edit user info</h2>
          <span className="popupclose">
            <a onClick={() => props.setTrigger(false)}>
              <img src="./Image/closepopup-icon.svg" alt="Close Icon" />
            </a>
          </span>
        </div>
        <div className="popupBody">
          {/* <form className="popupform" style={{width: "480px"}}>
                        <div className="form-element-group">
                            <div>
                                <label>Full Name*</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="form-element-group">
                            <div>
                                <label>E-Mail*</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="form-element-group">
                            <div>
                                <label>Job Title*</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="form-element-group">
                            <div>
                                <label>User Role*</label>
                            </div>
                            <select className="form-select shadow-none">
                                <option>User </option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </form> */}
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
                  <SelectLabel label="Full Name*" name="fullname" type="text" />
                  <SelectLabel label="Email*" name="email" type="email" />
                  <SelectLabel label="Job Title*" name="job" type="text" />
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
                  <div className="popup-footer d-flex justify-content-between">
                    <button
                      type="reset"
                      className="popup-cancel"
                      onClick={() => props.setTrigger(false)}
                    >
                      Cancle
                    </button>
                    <div className="footerbutton">
                      <button type="button" disabled={!formik.isValid}>
                        Save Changes
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button> */}
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditUserInfo;
