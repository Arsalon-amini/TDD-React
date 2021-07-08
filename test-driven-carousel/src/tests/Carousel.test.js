import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CarouselButton from '../CarouselButton';

describe('Carousel', () => {
    let wrapper;

    const slides = [
  {
    imgUrl: 'https://example.com/slide1.png',
    description: 'Slide 1',
    attribution: 'Uno Pizzeria',
  },
  {
    imgUrl: 'https://example.com/slide2.png',
    description: 'Slide 2',
    attribution: 'Dos Equis',
  },
  {
    imgUrl: 'https://example.com/slide3.png',
    description: 'Slide 3',
    attribution: 'Three Amigos',
  },
];


    beforeEach(() => {
        wrapper = shallow(<Carousel slides={slides}/>);
    });
    it('renders a <div>', () => {
        expect(wrapper.type()).toBe('div');
    });

    it('has an initial `slideIndex` of 0', () => {
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('renders a carouselbutton labelled "prev" ', () => {
        expect(
            wrapper
                .find(CarouselButton)
                .at(0)
                .prop('children')
        ).toBe('Prev');
    });

    it('renders a carouselbutton labeled "next"', () => {
        expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next');
    });

    it('decrements `slideIndex` when Prev is clicked', () => {
        wrapper.setState({ slideIndex: 1 });
        wrapper.find('[data-action="prev"]').simulate('click');
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('incremenets `slideIndex` when Prev is clicked', () => {
        wrapper.setState({ slideIndex: 1 });
        wrapper.find('[data-action="next"]').simulate('click');
        expect(wrapper.state('slideIndex')).toBe(2);
});

});