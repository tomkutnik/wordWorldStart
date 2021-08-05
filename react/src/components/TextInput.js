import "../style/fantasy/fantasyTextInput.css"
import "../style/scifi/scifiTextInput.css"


function TextInput({ type, layout, valid, onChange, lableText }){
    return( <>
            <label className={layout+"__label"}>{lableText}</label>
            <input className={valid ? layout+"__textInput " : layout+"__textInput "+layout+"__textInput-invalid"} type={type} onChange={onChange}></input>
        </>
    )
}

export default TextInput