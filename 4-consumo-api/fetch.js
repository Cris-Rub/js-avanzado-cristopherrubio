const fetch=require('cross-fetch');

fetch('https://rickandmortyapi.com/api/character/?name=rick&status=dead')
    .then((response) => {
        return response.json();
    }).then((resp)=>{
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    });