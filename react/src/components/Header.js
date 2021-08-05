import "../style/fantasy/fantasyHeader.css"
import "../style/scifi/scifiHeader.css"

function Header ({ layout }) {
    let style = layout+"Header";
    let header;

    if(layout==="fantasy"){
        header = <img className={style+"__pic"} src="./pic/steamBG.png"/>
    }

    if(layout==="scifi"){
        header = <img className={style+"__pic"}  src="./pic/cyberBG.png"/>
    }

    return(
        <div className={style}>
            {header}
            {layout==="scifi" ? <h1 className={style+"__title-overlay"}>WordWorld</h1> : ""}
            <h1 className={style+"__title"}>WordWorld</h1>
        </div>
    )
}

export default Header