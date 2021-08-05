import "../style/fantasy/fantasyButton.css"
import "../style/scifi/scifiButton.css"


function Button ({ layout, text, mod, onClick}){
    let style;
    const tempLayout = layout+"__btn";
    if(mod===""){
        style=tempLayout;
    }else{
        style=tempLayout+" "+tempLayout+mod
    }


    return(
     <button className={style} onClick={onClick}>{text}</button>
    )
}

export default Button