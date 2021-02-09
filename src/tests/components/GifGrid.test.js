import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre <GifGrid />', () => {

    const category = 'Hola Mundo';
    
    test('debe de renderizar <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid
            category={category}
        />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/123.jpg',
            title: 'Cualquier 123'
        }
        ]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid
            category={category}
        />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    

})
