import Dropzone from "../components/Dropzone";
import restart from '../restart.png'; // with import
import {useEffect, useState} from "react";


function GeneratePallete(props) {
    const [files, setFiles] = useState([]);
    const [colors, setColors] = useState([[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]])

    useEffect(() => {
        if (files.length > 0) {
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
            <h1>Generate Pallete <img onClick={() => setFiles([])} className={'restartImage'} src={restart}/></h1>
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