import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import
import Palette from "../components/Palette";

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
                    console.log(res)
                    setColors(res)
                })
        }

    }, [files]);

    return (
        <>
            <h2>Generate Palette - Image <img alt={"Restart"} onClick={() => setFiles([])} className={'restartImage'} src={restart}/>
            </h2>
            <Dropzone files={files} setFiles={setFiles}/>
            {Object.keys(colors).length > 0 &&
            <>
                <h1>Palette</h1>
                <Palette colors={colors}/>
            </>
            }
        </>

    )
}

export default GeneratePalette