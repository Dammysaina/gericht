import React from 'react';
import Button from './Button_styles';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <Button buttonWidth={props.buttonWidth}>
            {props.children}
        </Button>
    )
};

Button.propTypes = {
    buttonColor: PropTypes.string,
    buttonWidth: PropTypes.string,
    
}

export default CustomButton;