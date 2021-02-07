import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Functional Components
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Nanatzu No Taizai']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { 
                    categories.map(category => 
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;