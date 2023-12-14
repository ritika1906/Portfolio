import React from "react";
import styles from "./styles.module.scss";

const Button = ({customClass="", btnText="button", onClick}) => {

    return(
        <div className={`${customClass} ${styles['btn-wrap']}`}>
            <button type="button" onClick={onClick}>{btnText}</button>
        </div>
    )
}

export default Button;