import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en <GifGridItem />', () => {
    
    test('debe de mostrar el componente correctamente', () => {

        const {data: images, loading} = useFetchGifs(category);
        
        const wrapper = shallow(<GifGridItem 
            key={images[0].id}
            title={images[0].title}
            url={images[0].url}
        />);

        expect(wrapper).toMatchSnapshot();
        
    });
    

});