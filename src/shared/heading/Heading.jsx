import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ color, size, label, ...props }) => {
  return (
    <h1
      className={['heading', `heading--${size}`].join(' ')}
      style={color && { color }}
      {...props}
    >
      {label}
    </h1>
  );
};

Heading.propTypes = {
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

Heading.defaultProps = {
  color: "#222222;",
  size: 'large',
};
