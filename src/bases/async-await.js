const apiKey = 'HyGa1XAXAaKIX48HCzy4Uq4oWGRVHZy3';

/*const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion.then( resp => resp.json() )
    .then( ({ data } )=> {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    })
    .catch( console.error );*/

const getImagen = async () => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const json = await resp.json();
    const { url } = json.data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );    
};

getImagen();

