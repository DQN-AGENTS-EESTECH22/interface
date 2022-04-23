import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import

function GeneratePalette(props) {
    const [files, setFiles] = useState([]);
    const [colors, setColors] = useState(['#000000', '#000000', '#000000', '#000000', '#000000'])
    useEffect(() => {
        if (files.length > 0) {
            let data = new FormData()
            data.append('images', files[0])
            let url = "http://127.0.0.1:9000/model"
            fetch(url, {
                crossDomain: true,
                method: "POST",
                body: data,
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function (res) {
                    console.log(res)
                    setColors(res)
                })
        }

    }, [files]);

    return (
        <>
            <h1>Generate Palette - Image <img alt={"Restart"} onClick={() => setFiles([])} className={'restartImage'} src={restart}/>
            </h1>
            <Dropzone files={files} setFiles={setFiles}/>
            {files.length > 0 &&
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

export default GeneratePalette