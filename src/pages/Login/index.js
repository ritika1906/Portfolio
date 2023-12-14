import React from "react";
import styles from "./styles.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { LoginPageTexts }  from "../../utils/constants";

const Login = ({customClass=""}) => {

    return(

        <div className={`${customClass} ${styles['login-page']}`}>
            <InputField inputType={'mail'} placeholder={LoginPageTexts.EmailFieldPlaceholder} />
            <InputField inputType={'password'} placeholder={LoginPageTexts.PasswordFieldPlaceholder} />
            <Button btnText={LoginPageTexts.LoginBtnText} />
        </div>
        
    )
}

export default Login;