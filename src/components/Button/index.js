import React from "react";
import styles from "./styles.module.scss";

const Button = ({customClass="", btnText="button", onClick, isDisabled=false}) => {

    return(
        <div className={`${customClass} ${styles['btn-wrap']} ${isDisabled ? styles['disabled-btn-wrap'] : ''}`}>
            <button type="button" onClick={onClick} disabled={isDisabled}>{btnText}</button>
        </div>
    )
}

export default Button;