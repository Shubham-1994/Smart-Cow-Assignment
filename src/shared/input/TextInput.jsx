import React from 'react';
import PropTypes from 'prop-types';
import './text-input.css';
import { Label } from './Label';

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({size, label, ...props }) => {
  return (
    <>
    <Label label='Email address' color="#000000" />
    <br/>
    <input
      type="text"
      className={['input', `input--${size}`].join(' ')}
      {...props}
    />
    </>
  );
};

TextInput.propTypes = {

  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  size: 'medium',
  onChange: undefined,
};
