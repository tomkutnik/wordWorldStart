import { useState } from "react"

function PageLayout({ onChange }){
    const [layout, setLayout] = useState("fantasy")
    const layoutChange = (event) =>{
        setLayout(event.target.value);
    }

    const style = {
        position: "absolute",
        top: 0,
    }

    return(
    <div style={style}>
    <form onChange={layoutChange} onClick={()=>onChange(layout)}>
    <select name="layout" id="layout">
    <option value="fantasy">Fantasy</option>
    <option value="scifi">Sci-Fi</option>
  </select>
  </form>
        </div>
    )
}

export default PageLayout