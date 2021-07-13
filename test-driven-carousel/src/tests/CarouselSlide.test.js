import React from 'react';
import { shallow, mount } from 'enzyme';
import CarouselSlide from '../CarouselSlide';
import styled from 'styled-components';

describe('CarouselSlide', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <CarouselSlide
                imgUrl='https://example.com/default.jpg'
                description='Default test image'
        />);
    });

    //checks core element type of component
    it('renders a <figure>', () => {
        expect(wrapper.type()).toBe('figure');
    });

    //checks child element types of core element in component
    it('renders props.Img and a <figcaption> as children', () => {
        expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img); 
        expect(wrapper.childAt(1).type()).toBe('figcaption'); //second child (embedded DOM element)
    });

    //check props
    it('passes `imgUrl` through to the props.Img', () => {
        const imgUrl = 'https://example.com/image.png';
        wrapper.setProps({ imgUrl });
        const img = wrapper.find(CarouselSlide.defaultProps.Img);  
        expect(img.prop('src')).toBe(imgUrl);
    });

    it('uses `description` and `attribution` as the <figurecaption>', () => {
        const description = 'A jaw dropping spectacular image';
        const attribution = 'Trevor Burnham';
        wrapper.setProps({ description, attribution });

        expect(wrapper.find('figcaption').text()).toBe(`${description} ${attribution}`);
        expect(wrapper.find('figcaption strong').text()).toBe(description);
    });


    it('passes other props through to the <figure>', () => {
        const style = {};
        const onClick = () => { };
        const className = 'my-carousel-slide';
        wrapper.setProps({ style, onClick, className });
        
        expect(wrapper.prop('style')).toBe(style); 
        expect(wrapper.prop('onClick')).toBe(onClick);
        expect(wrapper.prop('className')).toBe(className); 
    })

    describe('Img', () => {
        let mounted;
        const imgUrl = 'https://example.com/default.jpg';

        beforeEach(() => {
            const Img = CarouselSlide.defaultProps.Img;
            mounted = mount(<Img src={imgUrl} imgHeight={500}/>);
        })
        it('renders <img> with the given src', () => {
            expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
        });

        it('has the expected static styles', () => {
            expect(mounted).toHaveStyleRule('width', '100%');
            expect(mounted).toHaveStyleRule('object-fit', 'cover');
        });

        it('uses imgHeight as the height style property', () => {
            expect(mounted).toHaveStyleRule('height', '500px');
            mounted.setProps({ imgHeight: 'calc(100vh - 100px)' });
            expect(mounted).toHaveStyleRule('height', 'calc(100vh - 100px)');
        });

        it('allows styles to be overridden', () => {
            //extending styled components - pass an existing styled component to styled(), it'll return a new component with the stles from the original plus the new styles
            const TestImg = styled(CarouselSlide.defaultProps.Img)`
            width: auto;
            height: auto;
            object-fit: fill;
            `;

            mounted = mount(<CarouselSlide
                Img={TestImg}
                imgUlr={imgUrl}
                description="this prop is required"
            />);

            expect(mounted.find(TestImg)).toHaveStyleRule('width', 'auto');
            expect(mounted.find(TestImg)).toHaveStyleRule('height', 'auto');
            expect(mounted.find(TestImg)).toHaveStyleRule('object-fit', 'fill');
        })

        it('renders correctly', () => {
            expect(mounted.find('img')).toMatchSnapshot();
        });
    });

    it('renders correctly', () => {
        wrapper.setProps({
            description: 'Description',
            attribution: 'Attribution',
        });
        expect(wrapper).toMatchSnapshot();
    });

})