import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        let input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value } });
        
        input = wrapper.find('input');
        expect(input.prop('value')).toBe(value);

    });
    
    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        const input = wrapper.find('input');

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');

    });
    
    

})
