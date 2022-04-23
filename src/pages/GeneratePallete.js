import Dropzone from "../components/Dropzone";
import restart from '../restart.png'; // with import
import {useState} from "react";


function GeneratePallete(props) {
    const [files, setFiles] = useState([]);

    return (
        <>
            <h1>Generate Pallete <img onClick={() => setFiles([])} className={'restartImage'} src={restart}/></h1>
            <Dropzone files={files} setFiles={setFiles}/>
            {files.length > 0 &&
            <h1>Pallete</h1>
            }
        </>

    )
}

export default GeneratePallete