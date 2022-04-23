import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import
import chroma from "chroma-js";
import Palette from "../components/Palette";


function GeneratePaletteText(props) {
    const [text, setText] = useState('');
    const [colors, setColors] = useState([])
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
                setColors(chroma.scale([res[0], res[1]]).colors(5))
            })
    }

    useEffect(() => {
        let stringRequest = `http://127.0.0.1:9000/update-style?hex1=${colors[0].substring(1)}&hex2=${colors[1].substring(1)}&hex3=${colors[2].substring(1)}&hex4=${colors[3].substring(1)}&hex5=${colors[4].substring(1)}`
        fetch(stringRequest);
    }, [colors])

    return (
        <>
            <h2>Generate Palette - Text <img alt={"Restart"} onClick={() => setText('')} className={'restartImage'} src={restart}/>
            </h2>
            <div>
                <input value={text} type={'text'} className={'inputText'} placeholder={'Digite sua busca...'} onChange={evt => setText(evt.target.value)} />
                <button className={'inputButton'} onClick={submit}>Gerar</button>
            </div>
            {colors.length > 0 &&
            <>
                <h2>Palette</h2>
                <Palette colors={colors}/>
            </>
            }
        </>

    )
}

export default GeneratePaletteText