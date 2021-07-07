import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ children }) => <button>{children}</button>; //JSX treats lowercase as an instance of a DOM element | uppercase instance of component

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired, 
};


export default CarouselButton;