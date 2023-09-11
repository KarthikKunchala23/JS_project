fetch('https://swapi.dev/api/planets/3/');
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
    
