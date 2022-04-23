import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import
import chroma from "chroma-js";


function GeneratePaletteText(props) {
    const [text, setText] = useState('');
    const [colors, setColors] = useState(['#000000', '#000000', '#000000', '#000000', '#000000'])
    const submit = () => {
        let url = `http://127.0.0.1:9000/text?search=${text}`
        fetch(url, {
            crossDomain: true,
            method: "GET",
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (res) {
                setColors(chroma.scale([res[0], chroma.random()]).colors(5))
            })
        
    }

    return (
        <>
            <h1>Generate Palette - Text <img alt={"Restart"} onClick={() => setText('')} className={'restartImage'} src={restart}/>
            </h1>
            <div>
                <input value={text} type={'text'} className={'inputText'} placeholder={'Digite sua busca...'} onChange={evt => setText(evt.target.value)} />
                <button className={'inputButton'} onClick={submit}>Gerar</button>
            </div>
            {text.length > 3 &&
            <>
                <h1>Palette</h1>
                <div className={'colors'}>
                    <div className={'item'} style={{ backgroundColor:colors[0] }}/>
                    <div className={'item'} style={{ backgroundColor:colors[1] }}/>
                    <div className={'item'} style={{ backgroundColor:colors[2] }}/>
                    <div className={'item'} style={{ backgroundColor:colors[3] }}/>
                    <div className={'item'} style={{ backgroundColor:colors[4] }}/>
                </div>
            </>
            }
        </>

    )
}

export default GeneratePaletteText