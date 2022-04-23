import Dropzone from "../components/Dropzone";
import restart from '../restart.png';
import {useEffect, useState} from "react"; // with import

function GeneratePallete(props) {
    const [files, setFiles] = useState([]);
    const [colors, setColors] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
    useEffect(() => {
        if (files.length > 0) {
            let data = new FormData()
            data.append('images', files[0]) // maybe it should be '{target}_cand'
            let url = "https://tongsampah.herokuapp.com/model"
            fetch(url, {
                method: "POST",
                body: data,
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function (res) {
                    console.log('success')
                    console.log(res)
                })

            console.log(files)
            setColors([
                [40, 40, 40],
                [128, 28, 90],
                [218, 28, 48],
                [15, 28, 2],
                [223, 28, 2],
                [248, 234, 234]
            ])
        }

    }, [files]);

    return (
        <>
            <h1>Generate Pallete <img alt={"Restart"} onClick={() => setFiles([])} className={'restartImage'} src={restart}/>
            </h1>
            <Dropzone files={files} setFiles={setFiles}/>
            {files.length > 0 &&
            <>
                <h1>Pallete</h1>
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

export default GeneratePallete