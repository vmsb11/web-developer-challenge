import React from "react";
import './UploadButton.css';
import imgImage from '../assets/images/upload/image.png';
import imgImage2x from '../assets/images/upload/image@2x.png';
import imgImage3x from '../assets/images/upload/image@3x.png';

export default class UploadButton extends React.Component {

    constructor(props) {

        super(props);

        this.inputFileRef = React.createRef();
    }

    render() {

        const { onClick, selectedPhoto } = this.props;

        return (
            <div 
                className="UploadButton"
                style={(selectedPhoto !== '' ? {padding: 0} : {padding: 32})}>
                <a 
                    href="#"
                    onClick={() => {
                        this.inputFileRef.current.click();
                    }}>
                    {
                        (selectedPhoto !== '') ?
                        <img 
                            src={selectedPhoto}
                            className="imgSelecedImage"/>
                        :
                        <img 
                            src={imgImage}
                            srcSet={`${imgImage2x} 2x,${imgImage3x} 3x`}
                            className="imgImageUpload"/>
                    }
                </a>

                <input 
                    type='file' 
                    id='file'
                    accept='.png'
                    onChange={onClick} 
                    ref={this.inputFileRef} 
                    style={{display: 'none'}}/>
            </div>
        );
    }
}