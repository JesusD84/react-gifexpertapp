import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Apex'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imgs y el false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Love'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })

})
