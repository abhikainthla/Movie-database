import React from 'react'

function Movies() {
    return (
        <>
        <button onClick={apicall}>Click</button>
        <div id="movies"></div>
        </>
        )
   async function apicall(){
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2022&genre=Drama&list=most_pop_series';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e82d5c875dmshcfd6aec909d5a84p156141jsna0e2ee391f05',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    const data = JSON.parse(result);
	console.log(result);
    data.results.forEach(element => {
        const title = document.createElement( "h1" ); 
        console.log(element.titleText.text);
        title.innerText =  element.titleText.text;
        document.getElementById("movies").appendChild(title) ;
        const img = document.createElement('img');
        img.setAttribute('src', element.primaryImage.url);
        document.getElementById("movies").appendChild(img); //add a space between movies
       
    });
    
} catch (error) {
	console.error(error);
}
    }

}

export default Movies