var unirest=require('unirest');

var require=unirest('GET', 'https://rickandmortyapi.com/api/location')
    .end(function(response){
        if(response.error) throw new Error(response.error);
        console.log(response.raw_body);
    })