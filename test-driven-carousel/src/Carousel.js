import React from 'react';
import PropTypes from 'prop-types';

import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';


class Carousel extends React.PureComponent {
    static propTypes = {
        defaultImgHeight: CarouselSlide.propTypes.imgHeight,
        slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
            .isRequired,
    };
    
    state = {
        slideIndex: 0,
    };

    handlePrevClick = () => {
        this.setState(({ slideIndex }) => ({ slideIndex: slideIndex - 1 }));
    };

    handleNextClick = () => {
        this.setState(({ slideIndex }) => ({ slideIndex: slideIndex + 1 }));
    }

    render() {
        const { defaultImgHeight, slides, ...rest } = this.props;

        return (
            <div {...rest}>
                <CarouselSlide imgHeight={defaultImgHeight} {...slides[this.state.slideIndex]} />;
                <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
                    Prev
                </CarouselButton>

                <CarouselButton data-action="next" onClick={this.handleNextClick} >
                    Next
                </CarouselButton>
            </div>
        )
    }
}

export default Carousel; 