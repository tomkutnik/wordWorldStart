import { useEffect, useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import "../style/fantasy/fantasyRegister.css"
import "../style/scifi/scifiRegister.css"

function Register({ layout }) {


  const [validPassword, setValidPassword] = useState(true)
  const [validMail, setValidMail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [mail, setMail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [loginData] = useState(JSON.parse(localStorage.getItem("login")))
  const [popup, setPopup] = useState(false);

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



  const nameHandle = (event) => {
    const name = event.target.value;
    let validNameCount = 0;
    const nameArr = name.split("")

    let lowerCaseLetters = /[a-z]/g;
    if (nameArr.length > 1) {
      for (let i = 1; i < nameArr.length; i++) {
        if (nameArr[i].match(lowerCaseLetters)) {
          validNameCount = 1
        } else {
          validNameCount = 0
          console.log("pozostałe litery");
        }
      }
    }

    if (name.length >= 3) {
      validNameCount++
    } else {
      console.log("długość!");
      validNameCount = 0
    }


    let upperCaseLetters = /[A-Z]/g;
    if (nameArr.length > 0) {
      if (nameArr[0].match(upperCaseLetters)) {
        validNameCount++
      } else {
        validNameCount = 0
        console.log("nie ma pierwszej dużej litery");
      }
    }

    let specialSymbols = /^[A-Za-z]+$/;
    if (!name.match(specialSymbols)) {
      validNameCount = 0
    } else {
      validNameCount++
    }

    if (validNameCount === 4) {
      setValidName(true);
      setName(name)
    } else {
      setValidName(false);
    }

    console.log(validName);
    console.log(validNameCount);
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


  const accRegister = () => {
    console.log()
    let usedMail = false;

    for (let i = 0; i < loginData.length; i++) {
      let tempLoginData = loginData[i]
      if (!usedMail) {
        if (tempLoginData.email === mail) {
          usedMail = true;
        }
      }
    }
    if (!usedMail) {
      let tempData = loginData;
      let tempId = loginData[loginData.length - 1].id;
      tempData.push({ id: tempId + 1, name: name, email: mail, password: password })
      localStorage.setItem("login", JSON.stringify(tempData));
    } else {
      console.log('Mail w użyciu')
    }

  }

  const regPopup = () => {
    setPopup(!popup);
  }
  let style
   if(layout==="fantasy"){
    popup ? style = {diplay: "block"} : style = {display: "none"};
   }
  


  return (
    <div className={layout + "__reg"}>
      {layout==="fantasy" ? <Button layout={layout} mod={"-big"} text="Rejestracja" onClick={regPopup} /> : ""}
      <div className={layout + "__reg_wrapper"} style={style}>
        <div className={layout + "__reg_formBox"}>
        {layout==="fantasy" ? <Button layout={layout} mod="-exit" text="X" onClick={regPopup} />: ""}
          <form onSubmit={accRegister}>

            <TextInput type={"text"} lableText={"Imię Postaci:"} layout={layout} valid={validName} onChange={nameHandle} />
            <TextInput type={"text"} lableText={"E-mail:"} layout={layout} valid={validMail} onChange={emailHandle} />
            <TextInput type={"password"} lableText={"Hasło:"} layout={layout} valid={validPassword} onChange={passwordHandle} />
            <div className={layout + "__reg_btnBox"}>
              <Button type="submit" layout={layout} text="Zarejestruj" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register