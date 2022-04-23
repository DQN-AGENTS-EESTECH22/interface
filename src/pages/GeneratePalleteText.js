import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import

function GeneratePaletteText(props) {
    const [text, setText] = useState('');
    const [colors, setColors] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
    useEffect(() => {
        if (text.length > 3) {

        }
    }, [text]);

    return (
        <>
            <h1>Generate Palette - Text <img alt={"Restart"} onClick={() => setText('')} className={'restartImage'} src={restart}/>
            </h1>
            <div>
                <input type={'text'} className={'inputText'} placeholder={'Digite sua busca...'}/>
                <button className={'inputButton'}>Gerar</button>
            </div>
            {text.length > 3 &&
            <>
                <h1>Palette</h1>
                <div className={'colors'}>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                </div>
            </>
            }
        </>

    )
}

export default GeneratePaletteText