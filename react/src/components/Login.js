import { useState } from "react";
import "../style/fantasy/fantasyLogin.css"
import "../style/scifi/scifiLogin.css"
import Button from "./Button";
import TextInput from "./TextInput";

function Login({ layout }) {

    const [validPassword, setValidPassword] = useState(true)
    const [validMail, setValidMail] = useState(true)
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [loginData] = useState(JSON.parse(localStorage.getItem("login")))

    const style = layout+"Login";

    const emailHandle = (event) => {
        const email = event.target.value;

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        if (!validateEmail(email)) {
            setValidMail(false)
        }
        if (validateEmail(email)) {
            setMail(email)
            setValidMail(true)
        }
    }

    const passwordHandle = (event) => {
        const password = event.target.value;

        let validPassword = 0;


        let lowerCaseLetters = /[a-z]/g;
        if (password.match(lowerCaseLetters)) {
            validPassword++
        } else {
            validPassword = 0
        }

        let upperCaseLetters = /[A-Z]/g;
        if (password.match(upperCaseLetters)) {
            validPassword++
        } else {
            validPassword = 0
        }

        let numbers = /[0-9]/g;
        if (password.match(numbers)) {
            validPassword++
        } else {
            validPassword = 0
        }

        if (password.length >= 8) {
            validPassword++
        } else {
            validPassword = 0
        }

        if (validPassword === 4) {
            setValidPassword(true);
            setPassword(password)
        } else {
            setValidPassword(false);
        }
    }



    const login = () => {
        let loopBreaker = false;
        if (!loopBreaker) {
        for (let i = 0; i < loginData.length; i++) {
                let tempLoginData = loginData[i]
                if (tempLoginData.email === mail) {
                    if (tempLoginData.password === password) {
                        console.log("ok");
                        localStorage.setItem("logged", true);
                        localStorage.setItem("loggedID", tempLoginData.id);
                         loopBreaker = true;
                    }
                }
                
            }
        window.alert("Zły mail, albo hasło!")
        }



    }


    return (
        <div className={style}>
            <form className={style+"Form"} onSubmit={login}>
                <TextInput type={"text"} lableText={"E-mail:"} layout={layout} valid={validMail} onChange={emailHandle}/>
                <TextInput type={"password"} lableText={"Hasło:"} layout={layout} valid={validPassword} onChange={passwordHandle}/>
                <Button type="submit" layout={layout} mod={"-short"} text="Zaloguj"/>
            </form>
            <Button layout={layout} mod={""} text="Przypomnij Hasło"/>
        </div>
    )
}

export default Login