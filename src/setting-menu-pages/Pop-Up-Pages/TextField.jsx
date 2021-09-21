import React from 'react';
import { useField, ErrorMessage } from "formik";

function TextField({ label, ...props }) {

    const [field, meta] = useField(props);


    return (
        <div className="textfield-div">
            <label htmlFor={field.name}>{label}<ErrorMessage component="div" className="error-msg" name={field.name} /></label>
            <input
                autoComplete="off"
                className={`form-control shadow-none ${meta.touched && meta.error && "error"}`}
                {...field} {...props}
                style={{width: "400px"}}
            />
            {/* <ErrorMessage component="div" className="error-msg" name={field.name} /> */}
            
        </div>
    )
}

export default TextField;
