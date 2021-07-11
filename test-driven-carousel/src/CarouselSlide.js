import React from 'react'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';

//styled.img = fn that generates a component that renders <img> tag w/ given styles, using clas name selector 
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 500px;
`;



const CarouselSlide = ({imgUrl, description, attribution, ...rest }) => (
    <figure {...rest}>
        <Img src={imgUrl} />
        <figcaption>
           <strong>{description}</strong> {attribution}</figcaption>
    </figure>
); 


CarouselSlide.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    attribution: PropTypes.node,
};


export default CarouselSlide; 