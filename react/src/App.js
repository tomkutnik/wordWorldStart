import { useEffect, useState } from "react";
import FrontData from "./components/FrontData";
import FrontInfo from "./components/FrontInfo";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import PageLayout from "./components/PageLayout"
import loginDataJson from "./data";
import "./style/global.css"

function App() {

  const [layout, setLayout] = useState("fantasy");
  const [logged, setLogged] = useState();
  const [id, setID] = useState(localStorage.getItem("loggedID"));

  useEffect(()=> {
    if (localStorage.getItem("login")===null){  
    localStorage.setItem("login", loginDataJson)
    }

    if (localStorage.getItem("logged")===null){
      setLogged(false);
    }else{
      setLogged(localStorage.getItem("logged"))
    }
  }, []);

  const handleLayout = (data) =>{
    setLayout(data);
  }

  const handleLogged = (data) =>{
    setLogged(data)
  }


  const logginPage = 
    <div>
      <Header layout={layout}/>
      <div style={{display: "block", margin: "auto", maxWidth: "62.5rem", position:"relative"}}>
      <Login onSubmit={handleLogged} layout={layout}/>
      <Register layout={layout}/>
      </div>
      <FrontInfo />
      <FrontData />
      <PageLayout onChange={handleLayout} />

    </div>
  
  const gamePage=
  <div>
    <h1 style={{color:"white"}}>GAME PAGE Welcome ID: {id}</h1>
    <form onSubmit={()=>{localStorage.removeItem("logged"); localStorage.removeItem("loggedID")}}>
      <input type="submit" value="X"/>
    </form>
  </div>

  return (
    <div>
    {logged? gamePage : logginPage}
    </div>
  );
}

export default App;
