import React from "react";
import styles from "./styles.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const Login = ({customClass=""}) => {

    return(
        <div className={`${customClass} ${styles['login-page']}`}>
            <InputField inputType={'mail'} placeholder={'Enter your mail id'} />
            <InputField inputType={'password'} placeholder={'Enter your password'} />
            <Button btnText={'Login'} />
        </div>
    )
}

export default Login;