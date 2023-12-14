import React from "react";
import styles from "./styles.module.scss";

const InputField = ({customClass="", inputType="text", label="", validationError="", placeholder=""}) => {

    return(
        <div className={`${customClass} ${styles['input-wrap']}`}>
            {label && <label htmlFor={label}>{label}</label>}
            <input id={label} type={inputType} placeholder={placeholder} className={`${styles['input-field']}`} />
            {validationError && validationError.length>0 && <p className={`${styles['error-msg']}`}>{validationError}</p>}
        </div>
    )
}

export default InputField;