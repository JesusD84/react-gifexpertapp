const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas sobre <GifExpertApp />', () => {
    
    
    test('el componente debe renderizarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['Apex', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    

})
