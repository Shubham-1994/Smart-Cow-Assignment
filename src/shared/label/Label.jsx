import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

/**
 * Primary UI component for user interaction
 */
export const Label = ({ color, size, label, ...props }) => {
  return (
    <label
      className={['label', `label--${size}`].join(' ')}
      style={color && { color }}
      {...props}
    >
      {label}
    </label>
  );
};

Label.propTypes = {
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

};

Label.defaultProps = {
  color: "#000000",
  size: 'medium',
};
