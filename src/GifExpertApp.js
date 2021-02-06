import { useState } from 'react';

//Functional Components
const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        //setCategories([...categories, 'Nanatzu No Taizai']);
        setCategories(cats => [...cats, 'Nanatzu No Taizai']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                { 
                    categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;