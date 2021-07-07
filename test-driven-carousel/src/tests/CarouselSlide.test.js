import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselSlide />);
    });

    //checks core element type of component
    it('renders a <figure>', () => {
        expect(wrapper.type()).toBe('figure');
    });

    //checks child element types of core element in component
    it('renders an <img> and a <figcaption> as children', () => {
        expect(wrapper.childAt(0).type()).toBe('img'); //first child (embeded DOM element)
        expect(wrapper.childAt(1).type()).toBe('figcaption'); //second child (embedded DOM element)
    });

    //check props
    it('passes `imgUrl` through to the <img>', () => {
        const imgUrl = '`https://example.com/image.png'; //imgUrl used for src of <img> tag
        wrapper.setProps({ imgUrl });

        const img = wrapper.find('img');  //takes a CSS like query selector and returns a shallow wrapper around result
        expect(img.prop('src')).toBe(imgUrl);
    });
})