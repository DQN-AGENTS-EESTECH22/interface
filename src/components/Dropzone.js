import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    marginBottom: 8,
    height: 400,
    width: '100%',
    padding: 4,
    boxSizing: 'border-box',
    margin: 'auto',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
    margin: 'auto'
};

function Dropzone(props) {
    const onDrop = acceptedFiles => {
        props.setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: window.URL.createObjectURL(file)
        })));
    }
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: onDrop
    });

    const thumbs = props.files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    className={"imageThumb"}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        props.files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [props.files]);

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n drop sua imagem aqui, ou clique para selecionar.</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
}

export default Dropzone