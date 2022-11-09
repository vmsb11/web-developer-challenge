import React from 'react';
import './Header.css';
import imgLogo from '../assets/images/logo/bx-logo.png';
import imgLogo2x from '../assets/images/logo/bx-logo@2x.png';
import imgLogo3x from '../assets/images/logo/bx-logo@3x.png';

export default class Header extends React.Component {

    render() {

        return (
            <div className="Header">
                <img 
                    alt="Logo"
                    src={imgLogo}
                    srcSet={`${imgLogo2x} 2x,${imgLogo3x} 3x`}
                    className="imgLogo"/>
            </div>
        );
    }
}