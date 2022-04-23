import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import
import Palette from "../components/Palette";
import Exemplos from "../components/Exemplos";

function GeneratePalette(props) {
    const [files, setFiles] = useState([]);
    const [colors, setColors] = useState([])
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
                    setColors(res)
                })
        }

    }, [files]);

    useEffect(() => {
        if(Object.keys(colors).length > 0){
            let stringRequest = `http://127.0.0.1:9000/update-style?hex1=${colors[0].substring(1)}&hex2=${colors[4].substring(1)}&hex3=${colors[2].substring(1)}&hex4=${colors[3].substring(1)}&hex5=${colors[1].substring(1)}`
            fetch(stringRequest);
        }
    }, [colors])

    return (
        <>
            <h2>Generate Palette - Image <img alt={"Restart"} onClick={() => setFiles([])} className={'restartImage'} src={restart}/>
            </h2>
            <Dropzone files={files} setFiles={setFiles}/>
            {Object.keys(colors).length > 0 &&
            <>
                <Palette colors={colors}/>
                <Exemplos/>
            </>
            }
        </>

    )
}

export default GeneratePalette