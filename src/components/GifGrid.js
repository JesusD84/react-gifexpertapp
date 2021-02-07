import React, { useState } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0)

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=love&limit=10&api_key=Bmmv4eJ3ucVtu2v9ks8MlQdV79HgIUbn';
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        });

        console.log(gifs);

    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
