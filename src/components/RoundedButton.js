import React from "react";
import {
    Button
} from 'reactstrap';
import './RoundedButton.css';

export default class RoundedButton extends React.Component {

    render() {

        const { label, disabled, onClick } = this.props;

        return (
            <Button 
                className="RoundedButton"
                disabled={disabled}
                onClick={onClick}>
                {label}
            </Button>
        );
    }
}