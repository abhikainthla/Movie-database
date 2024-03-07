import React from 'react'
import Cards from './Cards';
import './Movies.css';
function Movies() {
    
    const  movies = [{
        title:'Immaculate',
        imgSrc:'https://media-prod.fangoria.com/images/immaculate-poster.width-800.jpg',
        year:'2024,Michael Mohan',
        time:'2h 46m',
        caption:'Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent. But it becomes clear to Cecilia that her new home harbors dark and horrifying secrets.',
        genre:'Horror',
        mainImg:'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/immaculate-trailer.jpg?resize=1024'
    },{
        title:'Dune: Part Two',
        imgSrc:'https://tse3.mm.bing.net/th?id=OIP.RPbCEpRkb0TYUNnWtQagigHaLH&pid=Api&P=0&h=180',
        year:'2024,Denis Villeneuve',
        time:'1h 29m',
        caption:'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
        genre:'Action, Adventure, Drama',
        mainImg:'https://tse4.mm.bing.net/th?id=OIP.uANT2N5zNQj6eL3p7BMoVgHaEK&pid=Api&P=0&h=180'
    },{
        title:'Spider-Man: Across the Spider-Verse',
        imgSrc:'https://tse4.mm.bing.net/th?id=OIP.8m8unPhODL9JdEvN8obVJQHaKz&pid=Api&P=0&h=180',
        year:'2023,Joaquim Dos Santos',
        time:'2h 20m',
        caption:'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
        genre:'Animation, Action, Adventure',
        mainImg:'https://tse2.mm.bing.net/th?id=OIP.XYSnhCCkmzTg67-3u94xvQHaD7&pid=Api&P=0&h=180'
    },{
        title:'12th Fail',
        imgSrc:'https://tse2.mm.bing.net/th?id=OIP.V5EVBdl5Iy-HEhNQtQBEFgHaKX&pid=Api&P=0&h=180',
        year:'2024,Vidhu Vinod Chopra',
        time:'2h 27m',
        caption:'The real-life story of IPS Officer Manoj Kumar Sharma and IRS Officer Shraddha Joshi.',
        genre:'Biography, Drama',
        mainImg:'https://cdn.gulte.com/wp-content/uploads/2024/01/12th-fail-1.jpg'
    },{
        title:'Sam Bahadur',
        imgSrc:'https://tse3.explicit.bing.net/th?id=OIP.W_Yf-al4HpGNd4vQFKNGlwAAAA&pid=Api&P=0&h=180',
        year:'2023,Meghna Gulzar',
        time:'2h 30m',
        caption:'Revolves around the high and low points of Sam Manekshaw who became the first Indian Army officer to be promoted to the rank of Field Marshal.',
        genre:'Biography, Drama, War',
        mainImg:'https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2023/sam-bahadur2-1701528828.jpg'
    },{
        title:'Oppenheimer',
        imgSrc:'https://tse2.mm.bing.net/th?id=OIP.fZoBEzk6so-Pj033wxwmNwHaLH&pid=Api&P=0&h=180',
        year:'2023,Christopher Nolan',
        time:'3h 10m',
        caption:'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
        genre:'Biography, Drama, History',
        mainImg:'https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg'
    }]

return (
    <>
    <section className='movie-list'>
        {
            movies.map((ele,index)=>{
                return(
                    <Cards key={index} movieTitle={ele.title} 
                    time={ele.time} img={ele.imgSrc} caption={ele.caption} 
                    year={ele.year} genre={ele.genre} mainImg={ele.mainImg} />
                )
            })
        }
    </section>
    </>
)

}


export default Movies