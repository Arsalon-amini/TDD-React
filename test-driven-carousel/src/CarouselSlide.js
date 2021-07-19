import React from 'react'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';

//styled.img = fn that generates a component that renders <img> tag w/ given styles, using clas name selector 
const Img = styled.img`
  height: ${props => typeof props.imgHeight === 'number' ? `${props.imgHeight}px` : props.imgHeight};
  object-fit: cover;
  width: 100%;
`;



const CarouselSlide = ({Img, imgUrl, imgHeight, description, attribution, ...rest }) => (
    <figure {...rest}>
        <Img src={imgUrl} imgHeight={imgHeight}/>
        <figcaption>
           <strong>{description}</strong> {attribution}</figcaption>
    </figure>
); 


CarouselSlide.propTypes = {
    Img: PropTypes.elementType, //validates prop is a valid argument for React.CreateElement: either DOM elem or Component
    imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    attribution: PropTypes.node,
};

CarouselSlide.defaultProps = {
  Img,
  imgHeight: 500,
};



export default CarouselSlide; 